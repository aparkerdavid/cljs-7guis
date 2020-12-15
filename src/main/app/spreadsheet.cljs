(ns app.spreadsheet
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.walk :refer [walk]]
            [cljs.js :refer [empty-state eval js-eval]]
            [cljs.env :refer [*compiler*]]
            [cljs.tools.reader :refer [read-string]]
            [cljs.reader :as reader]))

(def cell-letters-range
  (map js/String.fromCharCode (range (.charCodeAt "a") (inc (.charCodeAt "z")))))

(def cell-numbers-range
  (range 1 100))

(def cell-coordinate-keywords
  (into #{}
        (for [letter cell-letters-range
              number cell-numbers-range]
          (keyword (str letter number)))))

(defn cell-keyword?
  [item]
  (-> item))

(defonce
  state
  (r/atom
   {:cells {}}))

(def eval-compiler-opts
  "Bit of a hack here, I'll admit I don't fully understand what's going on.
  As far as I can tell, the default behavior of cljs.js/eval is to treat unqualified symbols as being namespaced under cljs.user. This creates a problem when trying to call core functions, as eval is looking for them in the cljs.user namespace rather than cljs.core. The following options map is based on cljs.js/empty-state (apparently the default) but aliases the cljs.core namespace to cljs.user, allowing core functions to be used normally. It also allows use of symbols in the app.spreadsheet (i.e. current) namespace."

  (atom {:cljs.analyzer/namespaces {'cljs.user {:name 'cljs.core}
                                    'app.spreadsheet {:name 'app.spreadsheet}}
         :cljs.analyzer/constant-table {}
         :cljs.analyzer/data-readers {}
         :cljs.analyzer/externs nil
         :options {}}))

(defn eval-list
  "Evaluate a list.
  see: https://github.com/yogthos/cljs-eval-example/blob/master/src/cljs/cljs_eval_example/core.cljs "
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
  "Transform a Formula (defined as a list) into a list.
  This list will later be evaluated as Clojure to determine the formula's value.
  This function does not ensure that the Formula in question is valid Clojure (eval can handle that.)
  This function does ensure that the Formula in question includes only supported operations.
  It also replaces references to other Cells with the appropriate values.
  Each item in the list will be visited, and processed as such:

  If the item in question is a list, leave it alone
  (other than the empty list, which will become nil.)
  If it's a number, leave it alone.
  If it is a cell, keyword, replace it with the value of the cell that it references.
  If it is one of the supported arithmetic function symbols, replace it with the appropriate function
  Anything else, replace it with nil.
  "
  [formula]
  (clojure.walk/postwalk
   (fn [item]
     (cond
       (= item '()) nil
       (list? item) item
       (number? item) item
       (keyword? item) (-> @state :cells item :value)
       (= '+ item) 'cljs.core/+
       (= '- item) 'cljs.core/-
       (= '* item) 'cljs.core/*
       (= '/ item) 'cljs.core//
       (= '** item) 'js/Math.pow
       (= 'sqrt item) 'js/Math.sqrt
       (= 'root item) 'app.spreadsheet/root
       :else nil))
   formula))

(defn solve-formula [formula-str]
  ;; Check if formula-str should be treated as a number of a function by looking at its first char.
  ;; If the first char is a number, Treat it as a number. Else, treat it as a function.
  (if (-> formula-str first js/parseInt js/isNaN)
    (->
    ;; If formula-str is a function, read it as if it were wrapped in parens.
     (reader/read-string (str \( formula-str \)))
     (expand-formula)
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
  Eventually, we will either find a cyclical reference or run out of ancestors to test.
  "
  [state cell-id formula-str]
  (loop [current-batch (into #{} (get-parents formula-str))]
    (cond
      (current-batch cell-id) false
      (empty? current-batch) true
      :else (recur (->> current-batch
                        (map #(r/cursor state [:cells % :formula]))
                        (map deref)
                        (map get-parents)
                        flatten
                        (into #{}))))))

(defn add-child!
  "Given two cells 'cell-id' and 'child-id', register child-id as a Child of cell-id."
  [state cell-id child-id]
  (swap! (r/cursor state [:cells cell-id :children])
         #(into [] (conj % child-id))))

(defn remove-child!
  "Given two Cells 'cell-id' and 'child-id', unregister child-id as a child of cell-id"
  [state cell-id child-id]
  (swap! (r/cursor state [:cells cell-id :children])
         (fn [children] (filter #(not= child-id %) children))))

(defn update-value!
  "Set the Value of a given cell to the result of the evaluation of its Formula."
  [state cell-id]
  (let [value (r/cursor state [:cells cell-id :value])
        formula (r/cursor state [:cells cell-id :formula])]
    (reset! value (solve-formula @formula))))

(defn update-value-chain!
  "Update the values of a given cell and its descendents, in topological order via DFS."
  [state cell-id]
  (loop [to-visit [cell-id]
         visited #{}
         sorted []]
    (let [current (peek to-visit)
          unvisited-children (->> (r/cursor state [:cells current :children])
                                  deref
                                  (filter (complement visited))
                                  not-empty)]
      (cond
        (empty? to-visit)
        (doseq [id-to-update (reverse sorted)]
          (update-value! state id-to-update))

        unvisited-children
        (recur #_to-visit (into to-visit unvisited-children)
               #_visited visited
               #_sorted sorted)

        :else
        (recur #_to-visit (pop to-visit)
               #_visited (conj visited current)
               #_sorted (if (visited current) sorted (conj sorted current)))))))

(defn update-formula!
  "Change the formula associated with the a given cell, and 'do the needful' as they say.

  This is the core function of the spreadsheet's update mechanism."
  [state cell-id formula-str]
  (let [old-parents (-> (r/cursor state [:cells cell-id :formula]) deref get-parents)
        new-parents (get-parents formula-str)]
    (doseq [old-parent old-parents] (remove-child! state old-parent cell-id))
    (doseq [new-parent new-parents] (add-child! state new-parent cell-id))
    (reset! (r/cursor state [:cells cell-id :formula]) formula-str)
    (update-value-chain! state cell-id)))

(defn cell-field [state cell-id]
  (let [editing (r/atom false)
        cell-value (r/cursor state [:cells cell-id :value])
        cell-formula (r/atom "")]
    (fn []
      [:input
       {:type "text"
        :class ["w-24"]
        :style {:position "relative"
                :margin "-1px"}
                ;; :z-index (if @editing "1" nil)

        :value (if @editing @cell-formula @cell-value)

        :on-key-press
        (fn [e]
          (when (= (.-key e) "Enter")
            (.. js/document -activeElement blur)))

        :on-focus
        (fn [e]
          (reset! cell-formula (deref (r/cursor state [:cells cell-id :formula])))
          (reset! editing true))

        :on-blur
        (fn [e]
          (when (non-cyclical? state cell-id @cell-formula)
            (update-formula! state cell-id @cell-formula)
            (reset! editing false)))

        :on-change
        (fn [e]
          (when @editing
            (reset! cell-formula (-> e .-target .-value))))}])))

(defn main []
  [:div
   {:class
    ["max-w-3xl" "overflow-scroll"]}

   [:table
    {:class "relative"}
    [:thead
     [:tr
      [:th ""]
      (for [letter cell-letters-range]
        [:th {:key letter :class ["sticky" "top-0" "z-20"]} letter])]]
    [:tbody
     (for [number cell-numbers-range]
       [:tr
        {:key number}
        [:td
         {:class ["sticky" "left-0" "z-10"]}
         number]
        (for [letter cell-letters-range]
          [:td
           {:key letter
            :class ["p-0"]}
           [cell-field state  (keyword (str letter number))]])])]]])
