(ns app.counter
  (:require [reagent.core :as r]))

(defn counter []
  (let [cnt (r/atom 0)]
    (fn []
      [:div
       (str @cnt)
       [:button {:on-click #(swap! cnt inc)} "Increment!"]])))
