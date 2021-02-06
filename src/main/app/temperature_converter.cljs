(ns app.temperature-converter
  (:require [reagent.core :as r]))

(defn f->c [f]
  (* (- f 32) (/ 5 9)))

(defn c->f [c]
  (+ 32 (* c (/ 9 5))))

(defn valid-float? [s]
  (= s (-> s js/parseFloat str)))

(defn temperature-input [value is-valid-fn]
  (let [valid (r/atom true)]
    (fn []
      [:input {:class
               (concat ["w-full"]
                       (if @valid "valid" "invalid"))
               :type "text"
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
       {:class ["card" "max-w-xs"]}
       [:div
        {:class
         ["mb-4"]}
        [:div "Celsius: "]
        [temperature-input celsius-input #(reset! fahrenheit-input (c->f %))]]
       [:div
        [:div "Fahrenheit: "]
        [temperature-input fahrenheit-input #(reset! celsius-input (f->c %))]]])))
