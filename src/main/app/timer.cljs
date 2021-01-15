(ns app.timer
  (:require [reagent.core :as r]))

(defn limit-slider [value]
  [:input
   {:class ["w-full"]
    :type "range"
    :min "10"
    :max "1000"
    :value @value
    :on-change (fn [e] (reset! value (-> e .-target .-value)))}])

(defn timer []
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
       {:class ["max-w-xs"]}
       [:input
        {:class ["w-full"]
         :type "range"
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
          (concat
           ["w-full"
            "mb-4"]
           (if @active
             ["btn-red"
              "text-red-600"
              "font-bold"
              "border-red-600"]
             ["btn-green"]))
          :on-click (fn [e] (swap! active not))}
         (if @active "Stop" "Start")]
        [:button
         {:class
          ["w-full"
           "btn-blue"]
          :on-click (fn [e] (reset! elapsed 0))}
         "Reset"]]])))
