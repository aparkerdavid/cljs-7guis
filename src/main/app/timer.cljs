(ns app.timer
  (:require [reagent.core :as r]))


(defn timer []
  (let [active (r/atom false)
        elapsed (r/atom 0)
        limit (r/atom 500)
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
       [:input ;; A disabled input slider serves as our elapsed time readout.
        {:class ["w-full"]
         :type "range"
         :disabled true
         :min "0"
         :max "1000"
         :value (* 1000 (/ @elapsed @limit))}]
       [:div
        {:class ["text-center"]}
        (str @elapsed " / " @limit)]
       [:input
        {:class ["w-full"]
         :type "range"
         :min "10"
         :max "1000"
         :value @limit
         :on-change (fn [e] (reset! limit (-> e .-target .-value)))}]
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
