(ns app.timer
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:interval nil
    :elapsed 0
    :limit 500}))


(defn reset-timer!
  []
  (swap! state assoc :elapsed 0))


(defn stop-timer!
  []
  (js/clearInterval (@state :interval))
  (swap! state assoc :interval nil))


(defn tick!
  []
  (if (>= (@state :elapsed) (@state :limit))
    (do  (stop-timer!)
         (reset-timer!))
    (swap! state update :elapsed inc)))


(defn start-timer!
  []
  (swap! state assoc :interval (js/setInterval tick! 20)))


(defn seconds-str
  "Convert a integer count of 20ms intervals to a string indicating the corresponding number of seconds.
   Single-decimal point precision.
   eg:
   500 => 10.0s"
  [n]
  (str (. (* 0.02 n) toFixed 1) "s"))


(defn timer []
  [:div
   {:class ["max-w-xs"]}
   [:input ;; A disabled input slider serves as our elapsed time readout.
    {:class ["w-full"]
     :type "range"
     :disabled true
     :min "0"
     :max "1000"
     :value (* 1000 (/ (@state :elapsed) (@state :limit)))}]
   [:div
    {:class ["text-center"]}
    (str (seconds-str (@state :elapsed)) " / " (seconds-str (@state :limit)))]
   [:input
    {:class ["w-full"]
     :type "range"
     :min "10"
     :max "1000"
     :value (@state :limit)
     :on-change
     (fn [e] (swap! state assoc :limit (-> e .-target .-value)))}]
   [:div

    (if (@state :interval)
      [:button
       {:class
        ["w-full"
         "mb-4"
         "btn-red"
         "text-red-600"
         "font-bold"
         "border-red-600"]
        :on-click stop-timer!}
       "Stop"]
      [:button
       {:class
        ["w-full"
         "mb-4"
         "btn-green"]
        :on-click start-timer!}
       "Start"])

    [:button
     {:class
      ["w-full"
       "btn-blue"]
      :on-click reset-timer!}
     "Reset"]]])
