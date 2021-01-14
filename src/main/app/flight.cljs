(ns app.flight
  (:require [reagent.core :as r]))

(defonce state (r/atom {:flight-type "one-way"
                        :departure-date ""
                        :return-date ""
                        :message nil}))

(defn validate-date-str
  "Check if a string 's' resolves to a valid date.
   Because input is handled as it is typed, we distinguish between invalid and incomplete results.
   The user's input will technically be invalid until it is done.
   We want to avoid telling the user they're 'doing it wrong' unless we think there's been a mistake.
   This is not an exhaustive test.
   It catches the most common errors, which makes it good enough this demo."
  [s]
  (let [js-date (js/Date. s)]
    (cond
      (some js/Number.isNaN [(.getMonth js-date) (.getDay js-date) (.getYear js-date)])
      :invalid
      (re-matches #"^[0-9]{4}-[0-9]{2}-[0-9]{2}$" s)
      (if (= s
             (subs (.toISOString js-date) 0 10))
        :complete
        :invalid))))

(defn success-message
  "Generate a message box indicating successful flight booking.
   Takes a departure date and a return date.
   The return date may be nil."
  [departure-date return-date]
  [:div
   {:class ["text-green-900" "bg-green-100" "border-2" "border-green-600" "px-2" "py-1"]}
   [:h2
    {:class ["font-bold" "italic" "mb-1"]}
    "Flight booked!"]
   [:p
    "Your flight leaves on " [:span.whitespace-nowrap departure-date] "."]
   (when (some? return-date)
     [:p
      {:class ["mt-1"]}
      "Your return flight leaves on " [:span.whitespace-nowrap return-date] "."])])

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

(defn flight-date-input [{:keys [state value invalid-when complete-when disabled-when]}]
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
                    (disabled-when @state))
        :value (@state value)
        :on-change (fn [e]
                     (let [v (-> e .-target .-value)]
                       (swap! state #(assoc % value v))
                       (reset! validity (validate-date-str v))))}])))

(defn flight-submit-button [state]
  [:button
   {:class ["btn-green" "w-full"]
    :disabled (or
               (-> @state :departure-date validate-date-str (not= :complete))
               (and
                (-> @state :flight-type (= "round-trip"))
                (or
                 (-> @state :return-date validate-date-str (not= :complete))
                 (> (-> @state :departure-date js/Date.) (-> @state :return-date js/Date.)))))
    :on-click
    (fn [_e]
      (reset! (r/cursor state [:message])
              (success-message
               (@state :departure-date)
               (when (= (@state :flight-type) "round-trip")
                 (@state :return-date)))))}
   "Book!"])

(defn main []
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
    [flight-date-input {:state state
                        :value :departure-date
                        :invalid-when #(= (validate-date-str %) :invalid)
                        :complete-when #(= (validate-date-str %) :complete)}]]

   [:div
    {:class
     ["mb-4"]}
    [:div "Arrival Date:"]
    [flight-date-input {:state state
                        :value :return-date
                        :invalid-when #(= (validate-date-str %) :invalid)
                        :complete-when #(= (validate-date-str %) :complete)
                        :disabled-when (fn [ctx] (= (:flight-type ctx) "one-way"))}]]

   [:div
    {:class
     ["mb-4"]}
    [flight-submit-button state]]
   (@state :message)])
