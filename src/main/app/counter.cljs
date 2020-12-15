(ns app.counter
  (:require [reagent.core :as r]))

(defn counter []
  (let [cnt (r/atom 0)]
    (fn []
      [:div
       {:class ["flex" "flex-col" "items-center"]}
       [:div
        {:class ["text-9xl" "mb-8"]}
        (str @cnt)]
       [:button
        {:class ["hover:bg-red-600"
                 "hover:border-red-600"
                 "hover:text-white"
                 "hover:shadow-xl"
                 "active:bg-red-400"
                 "active:border-red-400"
                 "active:text-white"]

         :on-click #(swap! cnt inc)} "Increment!"]])))
