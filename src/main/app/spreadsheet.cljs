(ns app.spreadsheet
  (:require [reagent.core :as r]
            [sci.core :as sci]
            [clojure.string :as string]))


(defonce
  state
  (r/atom {}))


(def cell-letters-range
  "A list of lowercase letters a-z"
  (map js/String.fromCharCode (range (.charCodeAt "a") (inc (.charCodeAt "z")))))


(def cell-numbers-range
  "A list of whole numbers 1-99"
  (range 1 100))


(defn root
  "Take the y-th root of x"
  [x y]
  (js/Math.pow x (/ 1 y)))


(def supported-ops #{'+ '- '/ '* '** 'sqrt 'root})


(defn get-cell-reference
  [s state]
  (-> s
      string/lower-case
      keyword
      state
      :value))


(def cell-reference-re #"([A-Z]|[a-z])[1-9][0-9]?((?=[\ ,\)])|$)")


(defn eval-formula-str
  [formula-str state]
  (cond
    (empty? formula-str)
    {:kind nil
     :value formula-str}
    (some true? (map #(string/starts-with? formula-str %) (map #(str % " ") supported-ops)))
    (try
      (as-> formula-str s
        (string/replace s cell-reference-re #(-> % first (get-cell-reference state)))
        (str "(" s ")")
        (sci/eval-string s {:bindings {'root root 'sqrt js/Math.sqrt '** js/Math.pow}})
        {:kind :derived
         :value s})
      (catch js/Error _
        {:kind :invalid
         :value formula-str}))
    (-> formula-str js/parseFloat js/isNaN not)
    {:kind :number
     :value (js/parseFloat formula-str)}
    :else
    {:kind :text
     :value formula-str}))


(defn get-parents
  [formula-str]
  (try
    (->> formula-str
         (re-seq cell-reference-re)
         (map first)
         (map string/lower-case)
         (map keyword))
    (catch js/Error _ nil)))


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
                        (filter some?)
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
  (update state cell-id
          #(conj % (-> state cell-id :formula (eval-formula-str state)))))


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
        cell-value (r/cursor state [cell-id :value])
        cell-kind (r/cursor state [cell-id :kind])]
    (fn []
      [:input
       {:type "text"
        :class ["w-24"
                "h-12"
                (case @cell-kind
                  :text "bg-green-100"
                  :number "bg-purple-100"
                  :derived "bg-yellow-100"
                  :invalid "bg-red-100"
                  nil)]
        :style {:position "relative"
                :margin "-1px"}

        :value (or @editing-formula @cell-value)

        :on-key-press
        (fn [e]
          (when (= (.-key e) "Enter")
            (.. js/document -activeElement blur)))

        :on-focus
        #(reset! editing-formula (deref (r/cursor state [cell-id :formula])))

        :on-blur
        #(when (non-cyclical? cell-id @editing-formula @state)
           (swap! state (partial update-formula cell-id @editing-formula))
           (println @state)
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