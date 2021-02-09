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


(def ops-table {:+ +
                :- -
                :/ /
                :* *
                :** js/Math.pow
                :=sqrt js/Math.sqrt
                :=root root
                :=avg avg})

(def supported-ops 
  (->> ops-table
       keys
       (map str)
       (map #(subs % 1))
       (into #{})))  

(def lowercase-keyword
  "Convert an expr to a lowercase keyword.
   e.g. A1 => :a1"
  (comp keyword string/lower-case str))


(defn get-ref-value
  "Given a string"
  [str state]
  (-> str
      lowercase-keyword
      state
      :value))


(defn eval-formula-expr
  "Evaluate an expression using a limited subset of Clojure.

   First, construct a lookup table consisting of:
   - A mapping of allowed function symbols (keywordized) to their associated functions
   - A mapping of each key in 'state' to its value.
   
   To evaluate an expression:
   - If the expression is a number, leave it be.
   - If the expression is a symbol, check if it is a legal cell reference.
     If so, replace it with the matching value in the state map.
     Otherwise, 
   - If the expression is a list:
     - Evaluate each item in the list.
     - Apply the first list item as a function to the rest of the list items.
   "
  [expr state]
  (js/parseFloat
   (let [state-table (into {} (map (fn [[k v]] [k (:value v)]) state))

         op-lookup (fn [sym]
                     (or
                      (-> sym
                          lowercase-keyword
                          ops-table)
                      str))
         state-lookup (fn [sym]
                        (if (and (re-matches cell-reference-re (str sym))
                                 (-> state (lowercase-keyword sym) :kind (not= :error)))
                          ((lowercase-keyword sym) state-table)
                          :false))]

     (cond
       (number? expr) expr
       (symbol? expr) (state-lookup expr)
       (list? expr) (apply (-> expr first op-lookup) (map #(eval-formula-expr % state) (rest expr)))))))
    

(defn eval-formula
  [formula-expr state]
  (let [result (eval-formula-expr formula-expr state)]
    (when ((complement js/isNaN) result)
      result)))


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


(defn cyclical?
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
      (current-batch cell-id) true
      (empty? current-batch) false
      :else (recur (->> current-batch
                        (map #(-> state % :formula))
                        (map get-references)
                        flatten
                        (filter some?)
                        (into #{}))))))


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
   - Otherwise, :value will be the unmodified string, and :kind will be :label.
   "
  [formula-str cell-id state]
  (cond
    ;; If formula-str is empty:
    (empty? formula-str)
    {:kind nil
     :value nil}
    
    ;; If formula-str contains a circular reference:
    (cyclical? cell-id formula-str state)
    {:kind :error
     :value formula-str}
    
    ;; If formula-str looks like a function:
    (some true? (map #(string/starts-with? (string/lower-case formula-str) %) supported-ops))
    (let [eval-result 
          (try
            (as-> formula-str s
              (string/replace s cell-range-re #(-> % first expand-range))
              (str "(" s ")")
              (reader/read-string s)
              (eval-formula s state))
            (catch js/Error _ nil))]
      (if
       eval-result
       {:kind :derived
        :value eval-result}
       {:kind :error
        :value formula-str}))
    ;; If formula-str can be parsed as a number:
    (-> formula-str js/parseFloat js/isNaN not)
    {:kind :number
     :value (js/parseFloat formula-str)}
    :else
    {:kind :label
     :value formula-str}))


(defn add-child
  "Given two cells 'cell-id' and 'child-id', register child-id as a Child of cell-id."
  [state child-id cell-id]
  (update-in state [cell-id :children] #(into #{} (conj % child-id))))


(defn remove-child
  "Given two cells 'cell-id' and 'child-id', unregister child-id as a child of cell-id"
  [state child-id cell-id]
  (update-in state [cell-id :children]
             (fn [children] (filter #(not= child-id %) children))))


(defn update-value
  "Set the value of a given cell to the result of the evaluation of its formula."
  [state cell-id]
  (update state cell-id
          #(conj % (-> state cell-id :formula (eval-formula-str cell-id state)))))


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
        new-parents (if (non-cyclical? cell-id formula-str state)
                      (get-references formula-str)
                      [])
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
  (let [draft-formula (r/atom nil)
        cell-value (r/cursor state [cell-id :value])
        cell-kind (r/cursor state [cell-id :kind])
        cell-formula (r/cursor state [cell-id :formula])]
    (fn []
      [:input
       {:type "text"
        :class ["w-24"
                "h-12"
                (case @cell-kind
                  :label "bg-green-100"
                  :number "bg-purple-100"
                  :derived "bg-yellow-100"
                  :error "bg-red-100"
                  nil)]
        :style {:position "relative"
                :margin "-1px"}

        :value (or @draft-formula @cell-value)

        :on-key-press
        (fn [e]
          (when (= (.-key e) "Enter")
            (.. js/document -activeElement blur)))

        :on-focus
        #(reset! draft-formula @cell-formula)

        :on-blur
        (fn [_]
          (swap! state #(update-formula cell-id @draft-formula %))
          (reset! draft-formula nil))

        :on-change
        (fn [e]
          (reset! draft-formula (-> e .-target .-value)))}])))


(defn spreadsheet [back-fn]
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
                 "left-0"
                 "z-30"]}
        [:button
         {:class ["border-2"
                  "bg-blue-600"
                  "border-blue-600"
                  "hover:bg-blue-500"
                  "hover:border-blue-500"
                  "text-white"
                  "h-12"
                  "w-24"]
          :style {:margin "-2px"}
          :on-click back-fn}
          
         "← Back"]]
         
          
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
