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


(defn block
  [title desc content]
  [:div {:class ["mt-16"]}
   [:div {:class ["max-w-prose" "mx-auto" "overflow-visible"]}
    [:h2  title]
    [:div {:class ["mt-2"]} desc]
    [:div {:class ["mt-12"]} content]]])



(defn counter-block
  []
  [block
   "Counter"
   "Press the button to increment."
   [counter]])


(defn temperature-converter-block
  []
  [block
   "Temperature Converter"
   "The incremental update only fires when the input is a valid float;
           This prevents flashes of NaN when an input is empty, or while entering a number with a decimal point."
   [temperature-converter]])


(defn flight-booker-block
  []
  [block
   "Flight Booker"
   [:<>
    [:p
     "Each input box accepts a date in YYYY-MM-DD format."]
    [:p
     "Input is validated incrementally. Input boxes turn red when an invalid input is incorrect rather than just incomplete."]
    [:p
     "It would obviously be better to use date pickers here,
              but that might defeat the purpose of the exercise."]]
   [flight-booker]])


(defn timer-block
  []
  [block
   "Timer"
   [timer]])


(defn crud-block
  []
  [block
   "CRUD"
   "Collapses to a single-column layout on mobile."
   [crud]])


(defn circles-block
  []
  [block
   "Circles"
   [:<>
    [:p
     "The prompt calls for the circle size adjustment to appear in a popup window, but that's a bad idea.
             A modal would be close to the original intent, 
             but it makes more sense to repurpose the existing Undo/Redo control area."]
    [:p
     "It also calls for the circles to be drawn unfilled,
             but I think it's a more interesting exercise if they're filled white,
             and can thus occlude one another."]]
   [circles]])


(def spreadsheet-visible
  "The spreadsheet id displayed in full screen. 
   This atom tracks whether the spreadsheet is visible."
  (r/atom false))


(def spreadsheet-loading
  "The spreadsheet takes a second or two to load, so a loading indicator is provided.
   This atom tracks whether the indicator is visible."
  (r/atom false))



(defn spreadsheet-intro-block
  []
  [block
   "Spreadsheet"
   [:<>
    [:p
     "Formula syntax:"]
    [:table {:class "mt-4"}
     [:tr
      [:td [:code "5"]] [:td {:class "px-4"} "→ " [:code "5"]]]
     [:tr
      [:td [:code "+ 1 5"]] [:td {:class "px-4"} "→ " [:code "6"]]]
     [:tr
      [:td [:code "+ 1 10 (* 5 5)"]] [:td {:class "px-4"} "→ " [:code "36"]]]
     [:tr
      [:td [:code "=ROOT 4 2"]] [:td {:class "px-4"} "→ " [:code  "2"]]]
     [:tr
      [:td [:code "+ 5 A1"]] [:td {:class "px-4"} "→ The sum of 5 and the value of cell A1"]]
     [:tr
      [:td [:code "+ A1-E1"]] [:td {:class "px-4"} "→ The sum of the values of cells A1, B1, C1, D1, and E1"]]]

    [:p "The supported operations are: " [:code "+ - * / ** =ROOT =SQRT =AVG"]]
    [:p "All operations and references are case-insensitive."]

    [:p "Cells are color-coded by value type.
                Literal numbers are purple,
                calculated numbers are yellow,
                labels are green,
                and calculation errors are red."]
    [:p
     "The spreadsheet works best in full-screen, both in terms of design and implementation. 
           (The latter due to the vagaries of sticky positioning inside an overflow container.)"]
    [:p
     "Click here to load the spreadsheet:"]]

   [:button
    {:class ["w-72"
             "hover:bg-green-600"
             "hover:border-green-600"
             "hover:text-white"
             "hover:shadow-xl"]
     :on-click (fn [_]
                 (reset! spreadsheet-loading true)
                        ;; This timeout forces the browser to wait until after the loading indicator
                        ;; is displayed to begin loading the spreadsheet.
                 (js/setTimeout #(reset! spreadsheet-visible true) 0))}
    (if @spreadsheet-loading "Loading..." "Spreadsheet →")]])


(defn page
  []
  (if @spreadsheet-visible
    [:div
     [:button
      {:class ["border-2"
               "bg-blue-600"
               "border-blue-600"
               "hover:bg-blue-500"
               "hover:border-blue-500"
               "text-white"
               "fixed"
               "h-12"
               "w-24"
               "z-50"]
       :style {:margin "-1px"}
       :on-click (fn [_] (reset! spreadsheet-loading false) (reset! spreadsheet-visible false))}

      "← Back"]
     [spreadsheet]]
    [:div
     [:div {:class ["my-12" "max-w-prose" "mx-auto"]}
      [:h1 {:class ["mb-2"]}
       "7 GUIs"]
      [:span "in ClojureScript"]]
     [counter-block]
     [temperature-converter-block]
     [flight-booker-block]
     [timer-block]
     [crud-block]
     [circles-block]
     [spreadsheet-intro-block]
     [:footer {:class ["h-48"]}]]))

(defn init []
  (rd/render [page] (js/document.getElementById "app")))
