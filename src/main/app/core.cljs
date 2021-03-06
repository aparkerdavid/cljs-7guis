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
   [:p "Click to increment."]
   [counter]])


(defn temperature-converter-block
  []
  [block
   "Temperature Converter"
   [:p "Convert between Celsius and Fahrenheit as you type."]
   [temperature-converter]])


(defn flight-booker-block
  []
  [block
   "Flight Booker"
   [:<>
    [:p
     "Each input box accepts a date in YYYY-MM-DD format."]
    [:p
     "Input is validated incrementally, and input boxes turn red when an input is incorrect rather than just incomplete. 
      The goal is to avoid telling the user they're 'doing it wrong' unless they've really made a mistake, in which case we want to let them know ASAP."]
    [:p
     "(An even better idea would be to just use date pickers,
              but that might defeat the purpose of the exercise.)"]]
   [flight-booker]])


(defn timer-block
  []
  [block
   "Timer"
   [:p "Try using the slider to adjust the remaining time while the timer is running!"]
   [timer]])


(defn crud-block
  []
  [block
   "CRUD"
   "Entries can be added, modified, or removed from the list, and filtered by last name."
   [crud]])


(defn circles-block
  []
  [block
   "Circles"
   [:<>
    [:p "Click anywhere to draw a circle. Right click on a circle (or long-press on a touch device) to resize it."]]
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
    [:p "This spreadsheet uses a simplified formula syntax, where parentheses are only required where necessary to unambiguously describe nested functions."]
    [:p
     "For example:"]
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
     "The spreadsheet takes up the full browser window. 
      This is a better design than nesting it within the document flow, 
      and avoids the pitfalls of sticky-positioned elements in an overflow container."]
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
