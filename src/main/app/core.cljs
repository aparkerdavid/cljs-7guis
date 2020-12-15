(ns app.core
  (:require
   ;; [app.components :as components]
   [app.counter :as counter]
   [app.temperature :as temperature]
   [app.flight :as flight]
   [app.timer :as timer]
   [app.crud :as crud]
   [app.circles :as circles]
   [app.spreadsheet :as spreadsheet]
   [reagent.core :as r]
   [reagent.dom :as rd]))

(defn init []
  (rd/render

   [:div
    {:class ["flex" "justify-center"]}
    [:div
     {:class ["max-w-5xl" "flow"]}
     [:h1
      {:class ["text-6xl"]}
      "7 GUIs"]
     [counter]
     [temperature-converter]
     [flight-booker]
     [timer]
     [crud]
     [circles/main]
     [spreadsheet/main]]]
   (js/document.getElementById "app")))
