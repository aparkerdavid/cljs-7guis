(ns app.spreadsheet
  (:require [reagent.core :as r]
            [cljs.reader :as reader]
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


(defn avg
  "Average two or more numbers."
  [x y & zs]
  (let [xs (filter some? (flatten [x y zs]))]
    (/ (apply + xs) (count xs))))


(defn expand-range
  "If a string defines a valid range, return a string that defines each cell in that range.
   Otherwise, return the string unchanged.
   e.g:
   'A1-E1' => 'A1 B1 C1 D1 E1'
   'A1-A5' => 'A1 A2 A3 A4 A5'
   'A1-X9' => 'A1-X9'
   "
  [range-str]
  (let [[start end] (into [] (string/split range-str #"-"))
        start-col (first start)
        start-row (js/parseInt (subs start 1))
        end-col (first end)
        end-row (js/parseInt (subs end 1))]
    (cond
      ;; If it's a row range
      (= start-col end-col)
      (->>
       (range start-row (inc end-row))
       (map #(str start-col %))
       (string/join " "))
      ;; If it's a column range
      (= start-row end-row)
      (->>
       (range (.charCodeAt start-col) (inc (.charCodeAt end-col)))
       (map js/String.fromCharCode)
       (map #(str % start-row))
       (string/join " "))
      :else
      range-str)))


(def supported-ops #{"+ " "- " "/ " "* " "** " "SQRT " "ROOT " "AVG "})


(def cell-range-re #"([A-Z]|[a-z])[1-9][0-9]?-([A-Z]|[a-z])[1-9][0-9]?")


(def cell-reference-re #"([A-Z]|[a-z])[1-9][0-9]?((?=[\ ,\)])|$)")


(defn eval-formula
  "Evaluate an expression using a limited subset of Clojure.

   First, construct a lookup table consisting of:
   - A mapping of allowed function symbols (keywordized) to their associated functions
   - A mapping of each key in 'state' to its value.
   
   To evaluate an expression:
   - If the expression is a number, leave it be.
   - If the expression is a symbol, replace it with the matching value in the lookup table.
   - If the expression is a list:
     - Evaluate each item in the list.
     - Apply the first list item as a function to the rest of the list items.
   "
  [expr state]
  (let [sym->kw (comp keyword string/lower-case str)
        lookup (fn [sym]
                ((sym->kw sym)
                 (conj 
                  {:+ +
                   :- -
                   :/ /
                   :* *
                   :** js/Math.pow
                   :sqrt js/Math.sqrt
                   :root root
                   :avg avg}
                  (into {} (map (fn [[k v]] [k (:value v)]) state)))))]
    (cond
      (number? expr) expr
      (symbol? expr) (lookup expr)
      (list? expr) (apply (eval-formula (first expr) state) (map #(eval-formula % state) (rest expr))))))


(defn eval-formula-str
  "Evaluate a formula (defined as a string) given the provided state map.
   Returns a map containing :value and :kind keys.
   :kind will be used to color-code cells with input.

   To evaluate a formula-str:
   - First, check if it's empty. If so, :kind and :value are nil.
   - Otherwise, check if it starts with one of the supported operations..
     - If so, it should be evaluated as a function: 
     - First, expand all ranges.
     - Then, add leading and trailing parentheses.
     - Finally, read in as a list and evaluate.
     - :value will be the result of evaluation, :kind will be :derived.
   - Otherwise, check if it can be parsed as a number.
     If so, :value will be the parsed number, and :kind will be :number.
   - Otherwise, :value will be the unmodified string, and :kind will be :text.
   "
  [formula-str state]
  (cond
    ;; If formula-str is empty:
    (empty? formula-str)
    {:kind nil
     :value nil}
    ;; If formula-str looks like a function:
    (some true? (map #(string/starts-with? formula-str %) supported-ops))
    (try
      (as-> formula-str s
        (string/replace s cell-range-re #(-> % first expand-range))
        (str "(" s ")")
        (reader/read-string s)
        (eval-formula s state)

        {:kind :derived
         :value s})
      (catch js/Error _
        {:kind :invalid
         :value formula-str}))
    ;; If formula-str can be parsed as a number:
    (-> formula-str js/parseFloat js/isNaN not)
    {:kind :number
     :value (js/parseFloat formula-str)}
    :else
    {:kind :text
     :value formula-str}))


(defn get-references
  "Determine which cells are referenced in a formula."
  [formula-str]
  (try
    (->> formula-str
         (re-seq cell-reference-re)
         (map first)
         (map string/lower-case)
         (map keyword))
    (catch js/Error _ nil)))


(defn non-cyclical?
  "Check if a formula would cause a cyclical reference if it were assigned to a given cell.

  First, find the parents of the formula in question.
  If there aren't any, return true. (Can't have a cyclical reference without any references)
  Otherwise: check if the cell in question is among the parents.
  If so: we've found a cyclical reference, return false.
  Otherwise: repeat the process with the combined set of the parents of each Parent.
  Eventually, we will either find a cyclical reference or run out of ancestors to test."
  [cell-id formula-str state]
  (loop [current-batch (into #{} (get-references formula-str))]
    (cond
      (current-batch cell-id) false
      (empty? current-batch) true
      :else (recur (->> current-batch
                        (map #(-> state % :formula))
                        (map get-references)
                        flatten
                        (filter some?)
                        (into #{}))))))


(defn add-child
  "Given two cells 'cell-id' and 'child-id', register child-id as a Child of cell-id."
  [state child-id cell-id]
  (update-in state [cell-id :children] #(into [] (conj % child-id))))


(defn remove-child
  "Given two cells 'cell-id' and 'child-id', unregister child-id as a child of cell-id"
  [state child-id cell-id]
  (update-in state [cell-id :children]
             (fn [children] (filter #(not= child-id %) children))))


(defn update-value
  "Set the value of a given cell to the result of the evaluation of its formula."
  [state cell-id]
  (update state cell-id
          #(conj % (-> state cell-id :formula (eval-formula-str state)))))


(defn update-values
  "Update multiple values"
  [state ids]
  (let [update-fn (apply comp (for [id (reverse ids)] #(update-value % id)))]
    (update-fn state)))


(defn update-value-chain
  "Update the values of a given cell and its descendents, in topological order via dfs."
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
        (-> state cell-id :formula get-references)
        remove-old-children
        (apply comp
               (for [parent old-parents]
                 #(remove-child % cell-id parent)))
        new-parents (get-references formula-str)
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
