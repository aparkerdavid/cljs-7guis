(ns app.spreadsheet
  (:require [reagent.core :as r]
            [cljs.js :refer [eval js-eval]]
            [cljs.reader :as reader]
            [clojure.string :as string]))


(def cell-letters-range
  (map js/String.fromCharCode (range (.charCodeAt "a") (inc (.charCodeAt "z")))))


(def cell-numbers-range
  (range 1 100))


(defonce
  state-1
  (r/atom {}))


(def eval-compiler-opts
  "Bit of a hack here. See implementation notes."
  (atom {:cljs.analyzer/namespaces {'cljs.user {:name 'cljs.core}
                                    'app.spreadsheet {:name 'app.spreadsheet}}
         :cljs.analyzer/constant-table {}
         :cljs.analyzer/data-readers {}
         :cljs.analyzer/externs nil
         :options {}}))


(defn eval-list
  "Evaluate a list.
  see https://github.com/yogthos/cljs-eval-example/blob/master/src/cljs/cljs_eval_example/core.cljs"
  [list]
  (eval eval-compiler-opts
        list
        {:eval       js-eval
         :source-map true
         :context    :expr}
        :value))


(defn root
  "Take the y-th root of x"
  [x y]
  (js/Math.pow x (/ 1 y)))


(defn expand-formula
  "Prepare a Formula (defined as a list) for evaluation as Clojure.
  This operation ensures that the Formula in question includes only supported operations.
  It also replaces references to other Cells with their respective values.
  This function does not ensure that the Formula in question is valid Clojure (eval handles that.)
  Each item in the list will be visited, and processed as such:

  If the item in question is a list, leave it alone
  (other than the empty list, which will become nil.)
  If it's a number, leave it alone.
  If it's a keyword, replace it with the value of the cell that it references.
  If it's one of the supported function symbols, replace it with the appropriate function
  Anything else: replace it with nil."
  [formula state]
  (clojure.walk/postwalk
   (fn [item]
     (cond
       (= item '()) nil
       (list? item) item
       (number? item) item
       (keyword? item)
       ;; Keywords are converted to lowercase before lookup.
       (-> item name string/lower-case keyword state :value)
       (= '+ item) 'cljs.core/+
       (= '- item) 'cljs.core/-
       (= '* item) 'cljs.core/*
       (= '/ item) 'cljs.core//
       (= '** item) 'js/Math.pow
       (= 'sqrt item) 'js/Math.sqrt
       (= 'root item) 'app.spreadsheet/root
       :else nil))
   formula))


(defn solve-formula
  "Check if formula-str should be treated as a number of a function by looking at its first char.
  If the first char is a number, Treat it as a number. Else, treat it as a function."
  [formula-str state]
  (if (-> formula-str first js/parseInt js/isNaN)
    (->
    ;; If formula-str is a function, read it as if it were wrapped in parens.
     (reader/read-string (str \( formula-str \)))
     (expand-formula state)
     (eval-list))

    ;; If it is a number, read it as-is
    (reader/read-string formula-str)))


(defn get-parents
  "A simple way to find a Cell's Parents: identify all the keywords in its Formula."
  [formula-str]
  (->> formula-str
       (#(str \( % \)))
       reader/read-string
       flatten
       (filter keyword?)))


(defn non-cyclical?
  "Check if a Formula would cause a cyclical reference if it were assigned to a given Cell, via BFS.

  First, find the Parents of the Formula in question.
  If there aren't any, return true. (Can't have a cyclical reference without any references)
  Otherwise: check if the Cell in question is among the Parents.
  If so: we've found a cyclical reference, return false.
  Otherwise: repeat the process with the combined set of the Parents of each Parent.
  Eventually, we will either find a cyclical reference or run out of ancestors to test."
  [cell-id formula-str state]
  (loop [current-batch (into #{} (get-parents formula-str))]
    (cond
      (current-batch cell-id) false
      (empty? current-batch) true
      :else (recur (->> current-batch
                        (map #(-> state % :formula))
                        (map get-parents)
                        flatten
                        (into #{}))))))


(defn add-child
  "Given two cells 'cell-id' and 'child-id', register child-id as a Child of cell-id."
  [state child-id cell-id]
  (update-in state [cell-id :children] #(into [] (conj % child-id))))


(defn remove-child
  "Given two Cells 'cell-id' and 'child-id', unregister child-id as a child of cell-id"
  [state child-id cell-id]
  (update-in state [cell-id :children]
             (fn [children] (filter #(not= child-id %) children))))


(defn update-value
  "Set the Value of a given cell to the result of the evaluation of its Formula."
  [state cell-id]
  (assoc-in
   state [cell-id :value]
   (-> state cell-id :formula (solve-formula state))))


(defn update-values
  [state ids]
  (let [update-fn (apply comp (for [id (reverse ids)] #(update-value % id)))]
    (update-fn state)))


(defn update-value-chain
  "Update the values of a given cell and its descendents, in topological order via DFS."
  [state cell-id]
  (loop [to-visit [cell-id]
         visited #{}
         sorted []]
    (let [current
          (peek to-visit)
          unvisited-children
          (when current
            (->> state
                 current
                 :children
                 (filter (complement visited))
                 not-empty))]
      (cond
        (empty? to-visit)
        (update-values state (reverse sorted))

        unvisited-children
        (recur (into to-visit unvisited-children)
               visited
               sorted)

        :else
        (recur (pop to-visit)
               (conj visited current)
               (if (visited current) sorted (conj sorted current)))))))


(defn update-formula
  "Change the formula associated with the a given cell. Update it and its children.

  This is the core function of the spreadsheet's update mechanism."
  [cell-id formula-str state]
  (let [old-parents
        (-> state cell-id :formula get-parents)
        remove-old-children
        (apply comp
               (for [parent old-parents]
                 #(remove-child % cell-id parent)))
        new-parents (get-parents formula-str)
        add-new-children
        (apply comp
               (for [parent new-parents]
                 #(add-child % cell-id parent)))]
    (-> state
        remove-old-children
        add-new-children
        (assoc-in [cell-id :formula] formula-str)
        (update-value-chain cell-id))))


(defn cell-field [cell-id]
  (let [editing-formula (r/atom nil)
        cell-value (r/cursor state-1 [cell-id :value])]
    (fn []
      [:input
       {:type "text"
        :class ["w-24" "h-12"]
        :style {:position "relative"
                :margin "-1px"}

        :value (or @editing-formula @cell-value)

        :on-key-press
        (fn [e]
          (when (= (.-key e) "Enter")
            (.. js/document -activeElement blur)))

        :on-focus
        #(reset! editing-formula (deref (r/cursor state-1 [cell-id :formula])))

        :on-blur
        #(when (non-cyclical? cell-id @editing-formula @state-1)
           (swap! state-1 (partial update-formula cell-id @editing-formula))
           (reset! editing-formula nil))

        :on-change
        (fn [e]
          (reset! editing-formula (-> e .-target .-value)))}])))



(defn spreadsheet []
  [:div
   {:class ["p-0" "h-screen"]}

   [:div
    {:class ["overflow-scroll" "h-screen" "w-screen"]}
    [:table
     {:class "relative"}
     [:thead
      [:tr
       [:th
        {:class ["sticky"
                 "top-0"
                 "z-20"]}
        [:div
         {:class ["border-2" "border-gray-600" "bg-gray-100" "h-12" "w-24"]
          :style {:margin "-2px"}}
         ""]]
       (for [letter cell-letters-range]
         [:th {:key letter
               :class ["sticky" "top-0" "z-20"]}
          [:div {:class
                 ["border-2" "border-gray-600" "bg-gray-100" "h-12" "w-24" "p-2" "uppercase"]
                 :style {:margin "-2px"}} letter]])]]
     [:tbody
      (for [number cell-numbers-range]
        [:tr
         {:key number}
         [:td
          {:class ["sticky" "left-0" "z-10"]}
          [:div
           {:class ["align-middle"
                    "border-2"
                    "border-gray-600"
                    "bg-gray-100" "p-2"
                    "h-12"
                    "w-24"
                    "text-center"]
            :style {:margin "-2px"}}
           number]]
         (for [letter cell-letters-range]
           [:td
            {:key letter
             :class ["p-0"]}
            [cell-field (keyword (str letter number))]])])]]]])
