(ns app.core
  (:require
   [app.counter :refer [counter]]
   [app.temperature-converter :refer [temperature-converter]]
   [app.flight-booker :refer [flight-booker]]
   [app.timer :refer [timer]]
   [app.crud :refer [crud]]
   [app.circles :refer [circles]]
   [app.spreadsheet :refer [spreadsheet]]
   [reagent.core :as r]
   [reagent.dom :as rd]))


(defn guis
  []
  (let [spreadsheet-visible (r/atom false)
        spreadsheet-loading (r/atom false)]
    (fn []
      (if @spreadsheet-visible
        [spreadsheet (fn [_] (reset! spreadsheet-loading false) (reset! spreadsheet-visible false))]
        [:div
         {:class ["flow"]}
         [:h1
          {:class ["my-12" "text-6xl" "text-center"]}
          "7 GUIs"]
         [counter]
         [temperature-converter]
         [flight-booker]
         [timer]
         [crud]
         [circles]
         [:div
          {:class ["mx-auto" "max-w-xs"]}
          [:button
           {:class ["w-full"
                    "hover:bg-green-600"
                    "hover:border-green-600"
                    "hover:text-white"
                    "hover:shadow-xl"]
            :on-click (fn [_]
                        (reset! spreadsheet-loading true)
                        ;; This timeout forces the browser to wait until after the loading indicator
                        ;; is displayed to begin loading the spreadsheet.
                        (js/setTimeout #(reset! spreadsheet-visible true) 0))}
           (if @spreadsheet-loading "Loading..." "Spreadsheet →")]]]))))



(defn init []
  (rd/render [guis] (js/document.getElementById "app")))


(comment
  (defn init []
    (rd/render
     [:div
      {:class ["flow"]}
      [:h1
       {:class ["text-6xl" "text-center"]}
       "7 GUIs"]
      [counter]
      [temperature-converter]
      [flight-booker]
      [timer]
      [crud]
      [circles]
      [spreadsheet]]
     (js/document.getElementById "app"))))
