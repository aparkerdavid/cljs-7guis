(ns app.crud
  (:require [reagent.core :as r]
            [clojure.string :as string]))

(def sample-names
  {0 {:first "Lebbeus"
      :last "Woods"}
   1 {:first "Bruce"
      :last "Mau"}
   2 {:first "Christopher"
      :last "Alexander"}
   3 {:first "Jane"
      :last "Jacobs"}})

(defn main []
  (let [names (r/atom sample-names)
        first-name-input (r/atom "")
        last-name-input (r/atom "")
        selected-id (r/atom 0)
        filter-str (r/atom "")
        current-key-index (r/atom 4)]
    (fn []
      [:div
       [:div (str @selected-id)]
       [:div
        "Filter: "
        [:input
         {:value @filter-str
          :on-change (fn [e] (reset! filter-str (-> e .-target .-value)))}]]
       [:div
        "First name:"
        [:input
         {:value @first-name-input
          :on-change (fn [e] (reset! first-name-input (-> e .-target .-value)))}]]
       [:div
        "Last name: "
        [:input
         {:value @last-name-input
          :on-change (fn [e] (reset! last-name-input (-> e .-target .-value)))}]]
       [:button
        {:on-click
         (fn [e]
           (when (-> @first-name-input string/blank? not)
             (swap! names #(assoc-in % [@selected-id :first] @first-name-input)))
           (when (-> @last-name-input string/blank? not)
             (swap! names #(assoc-in % [@selected-id :last] @last-name-input))))}
        "Update"]
       [:button
        {:on-click
         (fn [e]
           (swap! names #(dissoc % @selected-id))
           (reset! selected-id (-> @names keys first)))}
        "Delete"]
       [:button
        {:on-click
         (fn [e]
           (swap!
            names
            #(assoc %
                    @current-key-index
                    {:first @first-name-input :last @last-name-input}))
           (swap! current-key-index inc))}
        "Create"]
       [:select
        {:size "10"
         :value @selected-id
         :on-change (fn [e] (reset! selected-id (-> e .-target .-value js/parseInt)))}
        (->> @names
             (filter
              (fn [[k v]]
                (if (string/blank? @filter-str)
                  true
                  (string/starts-with?
                   (string/lower-case (v :last))
                   (string/lower-case @filter-str)))))
             (map
              (fn [[k v]]
                [:option
                 {:value k
                  :key k}
                 (str (v :first) " " (v :last))])))]])))
