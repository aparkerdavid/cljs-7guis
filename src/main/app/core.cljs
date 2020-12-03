(ns app.core
  (:require
   ;; [app.components :as components]
   [app.counter :refer [counter]]
   [app.temperature :refer [temperature-converter]]
   [app.flight :refer [flight-booker]]
   [app.timer :refer [timer]]
   [app.crud :refer [crud]]
   [app.circles :refer [main]]
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
    [main]]
   (js/document.getElementById "app")))
