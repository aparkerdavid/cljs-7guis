(ns app.flight-booker
  (:require [reagent.core :as r]))


(defonce state (r/atom {:flight-type "one-way"
                        :departure-date ""
                        :return-date ""
                        :validity nil}))


(defn validate-date-str
  "Check if a string 's' resolves to a valid date.
   Because input is handled as it is typed, we distinguish between invalid and incomplete results.
   The user's input will technically be invalid until it is done.
   We want to avoid telling the user they're 'doing it wrong' unless we think there's been a mistake."
  [date-str]
  (let [js-date (js/Date. date-str)]
    (cond
       ;; Check for invalid year, day, or month numeric value
      (and (re-matches #"^[0-9]{4}(-[0-9]{2}|$)?(-[0-9]{2}|$)?" date-str)
           (some js/Number.isNaN [(.getMonth js-date) (.getDay js-date) (.getYear js-date)]))
      :invalid
       ;; Check for invalid formatting
      (not (re-matches #"^(?:[0-9]|$){4}(?:-|$)(?:[0-1]|$)(?:[0-9]|$)(?:-|$)(?:[0-3]|$)(?:[0-9]|$)" date-str))
      :invalid
      (re-matches #"^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$" date-str)
      (if (= date-str
             (subs (.toISOString js-date) 0 10))
        :complete
        :invalid))))


(defn time-traveling-date-pair?
  "Given two valid dates, return true if the second date is earlier than the first."
  [departure-date-str return-date-str]
  (and
   (= :complete (validate-date-str departure-date-str) (validate-date-str return-date-str))
   (> (js/Date. departure-date-str) (js/Date. return-date-str))))


(defn past-date?
  "Given a valid date, return true if it is in the past."
  [date-str]
  (and
   (= :complete (validate-date-str date-str))
   (< (.parse js/Date date-str)
      (js/Date.now))))


(defn check-validity
  "Given the current state, determine the validity of inputs.
   May be:
   - :invalid-date
   - :too-late
   - :time-travel
   ... in the event of an error,
   - :valid
   If the inputs are valid and ready to submit,
   nil otherwise."
  [state]
  (let [departure-date (state :departure-date)
        return-date (state :return-date)
        departure-date-status (validate-date-str departure-date)
        return-date-status (validate-date-str return-date)]
    (cond

      (or (= :invalid departure-date-status)
          (= :invalid return-date-status))
      :invalid-date

      (or
       (past-date? departure-date)
       (past-date? return-date))
      :too-late

      (time-traveling-date-pair? departure-date return-date)
      :time-travel

      (and (= :complete departure-date-status)
           (or (= :complete return-date-status)
               (= (state :flight-type) "one-way")))
      :valid)))


(defn update-validity!
  []
  (swap! state assoc :validity (check-validity @state)))


(defn success!
  []
  (swap! state assoc :validity :success))


(defn message
  [state]
  (case (state :validity)
    :invalid-date
    [:div {:class ["text-red-900" "bg-red-100" "border-2" "border-red-600" "px-2" "py-1"]}
     [:span "Invalid date input."]]
    :too-late
    [:div {:class ["text-red-900" "bg-red-100" "border-2" "border-red-600" "px-2" "py-1"]}
     [:span "Your flight must leave in the future."]]
    :time-travel
    [:div {:class ["text-red-900" "bg-red-100" "border-2" "border-red-600" "px-2" "py-1"]}
     [:span "Your return date cannot be before your departure date."]]
    :success
    [:div
     {:class ["text-green-900" "bg-green-100" "border-2" "border-green-600" "px-2" "py-1"]}
     [:h3
      {:class ["font-bold" "italic" "mb-1"]}
      "Flight booked!"]
     [:p
      "Your flight leaves on " [:span.whitespace-nowrap (state :departure-date)] "."]
     (when (some? (state :return-date))
       [:p
        {:class ["mt-1"]}
        "Your return flight leaves on " [:span.whitespace-nowrap (state :return-date)] "."])]
    ""))


(defn flight-type-input
  []
  [:div
   {:class ["dropdown" "w-full"]}
   [:select {:class ["w-full"]
             :value (@state :flight-type)
             :on-change
             (fn [e]
               (swap! state #(assoc % :flight-type (-> e .-target .-value)))
               (when (= (-> e .-target .-value) "one-way")
                 (reset! (r/cursor state [:return-date]) ""))
               (update-validity!))}
    [:option {:value "one-way"} "One-Way"]
    [:option {:value "round-trip"} "Round-Trip"]]])


(defn departure-date-input []
  (let [departure-date (r/cursor state [:departure-date])]
    (fn []
      [:input
       {:type "text"
        :class
        (concat ["w-full"]
                (case (validate-date-str @departure-date)
                  :invalid ["invalid"]
                  :complete ["complete"]
                  nil))
        :value @departure-date
        :on-change (fn [e]
                     (let [v (-> e .-target .-value)]
                       (reset! departure-date v)
                       (update-validity!)))}])))


(defn return-date-input []
  (let [return-date (r/cursor state [:return-date])
        flight-type (r/cursor state [:flight-type])]
    (fn []
      [:input
       {:type "text"
        :class
        (concat ["w-full"]
                (case (validate-date-str @return-date)
                  :invalid ["invalid"]
                  :complete ["complete"]
                  nil))
        :disabled (= @flight-type "one-way")
        :value @return-date
        :on-change (fn [e]
                     (let [v (-> e .-target .-value)]
                       (reset! return-date v)
                       (update-validity!)))}])))


(defn flight-submit-button []
  (let [validity (r/cursor state [:validity])]
    (fn []
      [:button
       {:class ["btn-green" "w-full"]
        :disabled (not (contains? #{:valid :success} @validity))
        :on-click
        success!}
       "Book!"])))


(defn flight-booker []
  [:div
   {:class ["card" "max-w-xs"]}
   [:div
    {:class
     ["mb-4"]}
    [:div "Flight Type:"]
    [flight-type-input state]]

   [:div
    {:class
     ["mb-4"]}
    [:div "Departure Date:"]
    [departure-date-input]]

   [:div
    {:class
     ["mb-4"]}
    [:div "Return Date:"]
    [return-date-input]]

   [:div
    {:class
     ["mb-4"]}
    [flight-submit-button]]
   [message @state]])
