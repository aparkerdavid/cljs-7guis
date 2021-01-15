(ns app.counter
  (:require [reagent.core :as r]))

(defn counter []
  (let [cnt (r/atom 0)]
    (fn []
      [:div
       {:class ["max-w-xs" "flex" "flex-col" "items-center"]}
       [:div
        {:class ["text-9xl" "mb-8"]}
        (str @cnt)]
       [:button
        {:class ["btn-red"]

         :on-click #(swap! cnt inc)} "Increment!"]])))
