(ns app.core
  (:require
   [app.counter :refer [counter]]
   [app.temperature-converter :refer [temperature-converter]]
   [app.flight-booker :refer [flight-booker]]
   [app.timer :refer [timer]]
   [app.crud :refer [crud]]
   [app.circles :refer [circles]]
   [app.spreadsheet :refer [spreadsheet]]
   [app.layout :refer [block]]
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
         [:div {:class ["my-12"  "text-center"]}
          [:h1 {:class ["mb-2"]}
           "7 GUIs"]
          [:span "in ClojureScript"]]
         [block
          "Counter"
          "Press the button to increment."
          [counter]]
         [block
          "Temperature Converter"
          "Once again, fairly simple."
          [temperature-converter]]
         [block
          "Flight Booker"
          [:<>
           [:p
            "Each input box accepts a date in YYYY-MM-DD format."]
           [:p
            "Incremental validation attempts to show a red box only when the input is known to be invalid rather than just incomplete."]
           [:p
            "It would obviously be better to use date pickers here,
              but that might defeat the purpose of the exercise."]]
          [flight-booker]]
         [block
          "Timer"
          "Once again, fairly simple."
          [timer]]
         [block
          "CRUD"
          "Once again, fairly simple. Collapses to a single-column layout on mobile."
          [crud]]
         [block
          "Circles"
          [:<>
           [:p
            "The prompt calls for the circle size adjustment to appear in a popup window, but that's a bad idea.
             An alert might be close to the original intent, 
             but it makes more sense to repurpose the same control area that contains Undo and Redo"]
           [:p
            "It also calls for the circles to be drawn unfilled,
             but I think it's a more interesting exercise if they're filled white,
             and can thus occlude one another."]]
          [circles]]
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
             [:td [:code "ROOT 4 2"]] [:td {:class "px-4"} "→ " [:code  "2"]]]
            [:tr
             [:td [:code "+ 5 A1"]] [:td {:class "px-4"} "→ The sum of 5 and the value of cell A1"]]
            [:tr
             [:td [:code "+ A1-E1"]] [:td {:class "px-4"} "→ The sum of the values of cells A1, B1, C1, D1, and E1"]]]

           [:p "The supported operations are: " [:code "+ - * / ** ROOT SQRT AVG"]]
           [:p "Cell references are case-insensitive,
                function calls are only case-sensitive in the leading position.
                This requirement enables the spreadsheet to distinguish between e.g.
                a call to the AVG function from a label with the value 'Avg.'"]

           [:p "Cells are color-coded by value type.
                Hand-entered numbers are purple,
                calculated numbers are yellow,
                labels are green,
                and calculation errors are red."]
           [:p
            "The spreadsheet works best in full-screen, both in terms of design and implementation. 
           (The latter due to the vagaries of sticky positioning inside an overflow container.)"]
           [:p
            "Click here to load the spreadsheet."]]

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
           (if @spreadsheet-loading "Loading..." "Spreadsheet →")]]
         [:footer {:class ["h-48"]}]]))))





(defn init []
  (rd/render [guis] (js/document.getElementById "app")))
