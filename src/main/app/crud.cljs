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
       [:div
        {:class ["flex" "row"]}
        [:div
         [:div
          [:div
           "Filter: "]
          [:input
           {:type "text"
            :value @filter-str
            :on-change (fn [e] (reset! filter-str (-> e .-target .-value)))}]]
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
                   (str (v :first) " " (v :last))])))]]
        [:div
         [:div
          [:div
           "First name:"]
          [:input
           {:type "text"
            :value @first-name-input
            :on-change (fn [e] (reset! first-name-input (-> e .-target .-value)))}]]
         [:div
          [:div
           "Last name: "]
          [:input
           {:type "text"
            :value @last-name-input
            :on-change (fn [e] (reset! last-name-input (-> e .-target .-value)))}]]]]

       [:div

        [:button
         {:class ["hover:bg-green-600"
                  "hover:border-green-600"
                  "hover:text-white"
                  "hover:shadow-xl"
                  "active:bg-green-400"
                  "active:border-green-400"
                  "active:text-white"]
          :on-click
          (fn [e]
            (swap!
             names
             #(assoc %
                     @current-key-index
                     {:first @first-name-input :last @last-name-input}))
            (swap! current-key-index inc))}
         "Create"]

        [:button
         {:class ["hover:bg-blue-600"
                  "hover:border-blue-600"
                  "hover:text-white"
                  "hover:shadow-xl"
                  "active:bg-blue-400"
                  "active:border-blue-400"
                  "active:text-white"]
          :on-click
          (fn [e]
            (when (-> @first-name-input string/blank? not)
              (swap! names #(assoc-in % [@selected-id :first] @first-name-input)))
            (when (-> @last-name-input string/blank? not)
              (swap! names #(assoc-in % [@selected-id :last] @last-name-input))))}
         "Update"]

        [:button
         {:class ["hover:bg-red-600"
                  "hover:border-red-600"
                  "hover:text-white"
                  "hover:shadow-xl"
                  "active:bg-red-400"
                  "active:border-red-400"
                  "active:text-white"]
          :on-click
          (fn [e]
            (swap! names #(dissoc % @selected-id))
            (reset! selected-id (-> @names keys first)))}
         "Delete"]]])))
