(ns app.timer
  (:require [reagent.core :as r]))

(defn limit-slider [value]
  [:input
   {:type "range"
    :min "10"
    :max "1000"
    :value @value
    :on-change (fn [e] (reset! value (-> e .-target .-value)))}])

(defn main []
  (let [active (r/atom false)
        elapsed (r/atom 0)
        limit (r/atom 1000)
        timer (. js/window setInterval
                 #(cond
                    (>= @elapsed @limit)
                    (do
                      (reset! active false)
                      (reset! elapsed 0))
                    @active
                    (swap! elapsed inc)))]
    (fn []
      [:div
       [:input
        {:type "range"
         :disabled true
         :min "0"
         :max "1000"
         :value (* 1000 (/ @elapsed @limit))}]
       [:div (str @elapsed " / " @limit)]
       [:div (/ @elapsed @limit)]
       [limit-slider limit]
       [:div
        [:button
         {:class
          (if @active
            ["text-red-600"
             "font-bold"
             "border-red-600"
             "hover:text-white"
             "hover:bg-red-600"
             "hover:shadow-xl"]
            ["hover:text-white"
             "hover:bg-green-600"
             "hover:border-green-600"
             "hover:shadow-xl"])
          :on-click (fn [e] (swap! active not))}
         (if @active "Stop" "Start")]
        [:button
         {:class ["hover:text-white"
                  "hover:bg-blue-600"
                  "hover:border-blue-600"
                  "hover:shadow-xl"]
          :on-click (fn [e] (reset! elapsed 0))}
         "Reset"]]])))
