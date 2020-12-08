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
  (println "init!")
  (rd/render
   [:<>
    [counter/main]
    [temperature/main]
    [flight/main]
    [timer/main]
    [crud/main]
    [circles/main]
    [spreadsheet/main]]
   (js/document.getElementById "app")))
