(ns app.core
  (:require
   [app.counter :refer [counter]]
   [app.temperature-converter :refer [temperature-converter]]
   [app.flight-booker :refer [flight-booker]]
   [app.timer :refer [timer]]
   [app.crud :refer [crud]]
   [app.circles :refer [circles]]
   [app.spreadsheet :refer [spreadsheet]]
   [reagent.dom :as rd]))

(defn init []
  (rd/render
   [:div
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
     [spreadsheet]]]
   (js/document.getElementById "app")))
