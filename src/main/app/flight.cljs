(ns app.flight
  (:require [reagent.core :as r]
            [clojure.string :as string]))

(defn validate-date-str [s]
  (let [js-date (js/Date. s)]
    (cond
      (some js/Number.isNaN [(.getMonth js-date) (.getDay js-date) (.getYear js-date)])
      :invalid
      (re-matches #"^[0-9]{4}-[0-9]{2}-[0-9]{2}$" s)
      (if
       (= s
          (subs (.toISOString js-date) 0 10))
        :complete
        :invalid))))

(defn flight-type-input [state]
  [:div
   {:class ["dropdown" "w-full"]}
   [:select {:class ["w-full"]
             :value (@state :flight-type)
             :on-change
             (fn [e]
               (swap! state #(assoc % :flight-type (-> e .-target .-value))))}
    [:option {:value "one-way"} "One-Way"]
    [:option {:value "round-trip"} "Round-Trip"]]])

(defn flight-date-input [{:keys [context value invalid-when complete-when disabled-when]}]
  (let [validity (r/atom :incomplete)]
    (fn []
      [:input
       {:type "text"
        :class
        (concat ["w-full"]
                (cond
                  (= @validity :invalid) ["invalid"]
                  (= @validity :complete) ["complete"]))
        :disabled (when disabled-when
                    (disabled-when @context))
        :value (@context value)
        :on-change (fn [e]
                     (let [v (-> e .-target .-value)]
                       (swap! context #(assoc % value v))
                       (reset! validity (validate-date-str v))))}])))

(defn flight-submit-button [context]
  [:button
   {:class ["btn-green" "w-full"]
    :disabled (or
               (-> @context :departure-date validate-date-str (not= :complete))
               (and
                (-> @context :flight-type (= "round-trip"))
                (or
                 (-> @context :return-date validate-date-str (not= :complete))
                 (> (-> @context :departure-date js/Date.) (-> @context :return-date js/Date.)))))
    :on-click
    (fn [e]
      (swap!
       context
       #(assoc % :message
               (str
                "Booked a flight departing on "
                (@context :departure-date)
                (when
                 (-> @context :flight-type (= "round-trip"))
                  (str ", returning on " (@context :return-date)))))))}
   "Book!"])

(defn main []
  (let [state (r/atom {:flight-type "one-way"
                       :departure-date ""
                       :return-date ""
                       :message ""})]
    (fn []
      [:div
       {:class ["max-w-xs"]}
       [:div
        {:class
         ["mb-4"]}
        [:div "Flight Type:"]
        [flight-type-input state]]

       [:div
        {:class
         ["mb-4"]}
        [:div "Departure Date:"]
        [flight-date-input {:context state
                            :value :departure-date
                            :invalid-when #(= (validate-date-str %) :invalid)
                            :complete-when #(= (validate-date-str %) :complete)}]]

       [:div
        {:class
         ["mb-4"]}
        [:div "Arrival Date:"]
        [flight-date-input {:context state
                            :value :return-date
                            :invalid-when #(= (validate-date-str %) :invalid)
                            :complete-when #(= (validate-date-str %) :complete)
                            :disabled-when (fn [ctx] (= (:flight-type ctx) "one-way"))}]]

       [:div
        {:class
         ["mb-4"]}
        [flight-submit-button state]]
       (when ((complement string/blank?) (@state :message))
         [:div
          {:class ["bg-green-100" "border-2" "border-green-600" "p-1"]}
          (@state :message)])])))
