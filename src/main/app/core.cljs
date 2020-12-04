(ns app.core
  (:require
   ;; [app.components :as components]
   [app.counter :refer [counter]]
   [app.temperature :refer [temperature-converter]]
   [app.flight :refer [flight-booker]]
   [app.timer :refer [timer]]
   [app.crud :refer [crud]]
   [app.circles :as circles]
   [reagent.core :as r]
   [reagent.dom :as rd]))

(defn init []
  (println "init!")
  (rd/render
   [:<>
    [counter]
    [temperature-converter]
    [flight-booker]
    [timer]
    [crud]
    [circles/main]]
   (js/document.getElementById "app")))
