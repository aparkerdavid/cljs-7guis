(ns app.components
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

(defn counter []
  (let [cnt (r/atom 0)]
    (fn []
      [:div
       (str @cnt)
       [:button {:on-click #(swap! cnt inc)} "Increment!"]])))

(defn f->c [f]
  (* (- f 32) (/ 5 9)))

(defn c->f [c]
  (+ 32 (* c (/ 9 5))))

(defn valid-float? [s]
  (= s (-> s js/parseFloat str)))

(defn temperature-input [value is-valid-fn]
  (let [valid (r/atom true)]
    (fn []
      [:input {:class (if @valid "valid" "invalid")
               :value @value
               ;; You shouldn't have to manually delete the whole contents of the input
               :on-click (fn [e]
                           (. (.-target e) focus)
                           (. (.-target e) select))
               :on-change (fn [e]
                            (let [v (-> e .-target .-value)]
                              (reset! value v)
                              (if (valid-float? v)
                                (do
                                  (reset! valid true)
                                  (is-valid-fn v))
                                (reset! valid false))))}])))

(defn temperature-converter []
  (let [celsius-input (r/atom 0)
        fahrenheit-input (r/atom (c->f @celsius-input))]
    (fn []
      [:div
       [:div "Celsius: "
        [temperature-input celsius-input #(reset! fahrenheit-input (c->f %))]]
       [:div "Fahrenheit: "
        [temperature-input fahrenheit-input #(reset! celsius-input (f->c %))]]])))

(defn date-str-valid? [s]
  (let [js-date (js/Date. s)]
    (when (not-every? js/Number.isNaN [(.getMonth js-date) (.getDay js-date) (.getYear js-date)])
      js-date)))

(defn flight-type-input [state]
  [:select {:value (@state :flight-type)
            :on-change
            (fn [e]
              (swap! state #(assoc % :flight-type (-> e .-target .-value))))}
   [:option {:value "one-way"} "One-Way"]
   [:option {:value "round-trip"} "Round-Trip"]])

(defn flight-date-input [{:keys [context value invalid-when complete-when disabled-when]}]
  (let [validity (r/atom :incomplete)]
    (fn []
      [:input {:class
               (cond
                 (= @validity :invalid) "invalid"
                 (= @validity :complete) "complete")
               :disabled (when
                          (and disabled-when
                               (disabled-when @context))
                           true)
               :value (@context value)
               :on-change (fn [e]
                            (let [v (-> e .-target .-value)]
                              (swap! context #(assoc % value v))))}])))

(defn flight-submit-button [{:keys [context disabled-when]}]
  [:button
   {:disabled (when
               (and disabled-when
                    (disabled-when @context))
                true)
    :on-click (fn [e] (js/console.log (@context :departure-date)))}
   "Submit"])

(defn flight-booker []
  (let [state (r/atom {:flight-type "one-way"
                       :departure-date ""
                       :return-date ""})]
    (fn []
      [:div
       [flight-type-input state]
       [flight-date-input {:context state
                           :value :departure-date
                           :invalid-when nil}]
       [flight-date-input {:context state
                           :value :return-date
                           :invalid-when nil
                           :disabled-when (fn [ctx] (= (:flight-type ctx) "one-way"))}]
       [flight-submit-button {:context state
                              :disabled-when
                              (fn [ctx]
                                (some nil?
                                      (map validate-date-str
                                           [(:departure-date ctx)
                                            (:return-date ctx)])))}]])))

