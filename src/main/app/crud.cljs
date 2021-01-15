(ns app.crud
  (:require [reagent.core :as r]
            [clojure.string :as string]))

(defonce state
  (r/atom
   {:names [{:first "Lebbeus"
             :last "Woods"}
            {:first "Bruce"
             :last "Mau"}
            {:first "Christopher"
             :last "Alexander"}
            {:first "Jane"
             :last "Jacobs"}]
    :filter-str ""
    :selected-id 0
    :first-name-input ""
    :last-name-input ""}))

(defn get-filtered-names
  "Return a list of vectors: each contains an index and the name associated with it.
   Names will be filtered by the content of 'state's :filter-str field.
   Only those names whose :last field starts with the filter-str will be included.
   If the filter-str is empty, no filtration will occur; the full list of names will be returned."
  [state]
  (->> (state :names)
       (map-indexed
        (fn [idx name] [idx name]))
       (filter
        (fn [[_id name]]
          (if (string/blank? (state :filter-str))
            true
            (string/starts-with?
             (string/lower-case (name :last))
             (string/lower-case (state :filter-str))))))))


(defn reset-name-inputs
  "Reset the values of 'state's 'first-name-input' and 'last-name-input' fields.
   The new values will be those associated with the currently selected name.
   This should happen every time the user changes which name is selected."
  [state]
  (let [selected-id (:selected-id state)
        selected-first (-> state :names (nth selected-id) :first)
        selected-last (-> state :names (nth selected-id) :last)]
    (assoc state
           :first-name-input selected-first
           :last-name-input selected-last)))


(defn create
  "Add a record to the list.
   The first and last names will be the values of 'first-name-input' and 'last-name-input'."
  [state]
  (update
   state
   :names
   #(conj % {:first (state :first-name-input) :last (state :last-name-input)})))

(defn edit
  "Update the currently-selected record.
   The new first and last names will be the values of 'first-name-input' and 'last-name-input'."
  [state]
  (cond-> state
    (-> (state :first-name-input) string/blank? not)
    (assoc-in [:names (state :selected-id) :first] (state :first-name-input))
    (-> (state :last-name-input) string/blank? not)
    (assoc-in [:names (state :selected-id) :last] (state :last-name-input))))


(defn dissoc-vec
  "Remove item at index 'idx' from vector 'vec'"
  [vec idx]
  (into []
        (concat (subvec vec 0 idx)
                (subvec vec (inc idx)))))


(defn delete
  "Delete the current-selected record.
   If the deleted record was the first in the list:
   The first record in the list post-deletion will be selected.
   Otherwise:
   The record preceding the deleted record will be selected."
  [state]
  (-> state
      (update :names #(dissoc-vec % (state :selected-id)))
      (update :selected-id #(if (> % 0) (dec %) 0))
      (reset-name-inputs)))


(defn main []
  (fn []
    [:div ;; Outermost container
     {:class ["max-w-xs" "sm:max-w-lg"]}
     [:div ;; Top block
      {:class ["w-full"
               "flex"
               "flex-col"
               "md:flex-row"
               "justify-evenly"
               "gap-2"
               "mb-4"]}
      [:div ;; Filter and Namelist


       [:div ;; Filter
        {:class ["mb-4"]}
        [:div "Filter: "]
        [:input
         {:class ["w-full" "sm:w-auto"]
          :type "text"
          :value (@state :filter-str)
          :on-change (fn [e] (reset! (r/cursor state [:filter-str]) (-> e .-target .-value)))}]]

       [:ul ;; Namelist
        {:class ["border-gray-900"
                 "border-2"
                 "h-48"
                 "overflow-scroll"]}
        (doall
         (for [[key name] (get-filtered-names @state)]
           [:li
            {:class (concat
                     ["px-1"]
                     (when (= (@state :selected-id) key)
                       ["bg-blue-600" "text-white"]))
             :on-click (fn [_e]
                         (reset! (r/cursor state [:selected-id]) key)
                         (swap! state reset-name-inputs))
             :key key}
            [:a
             (str (name :first) " " (name :last))]]))]]

      [:div ;; First and Last Name Fields

       [:div
        {:class ["mb-4"]}
        [:div
         "First name:"]
        [:input
         {:class ["w-full"]
          :type "text"
          :value (@state :first-name-input)
          :on-change
          (fn [e] (reset! (r/cursor state [:first-name-input]) (-> e .-target .-value)))}]]

       [:div
        [:div "Last name: "]
        [:input
         {:class ["w-full"]
          :type "text"
          :value (@state :last-name-input)
          :on-change
          (fn [e] (reset! (r/cursor state [:last-name-input]) (-> e .-target .-value)))}]]]]

     [:div ;; Buttons block
      {:class ["w-full"
               "flex"
               "flex-col"
               "sm:flex-row"
               "gap-2"]}

      [:button
       {:class ["w-full"
                "btn-green"]
        :on-click #(swap! state create)}
       "Create"]

      [:button
       {:class ["w-full"
                "btn-blue"]
        :on-click #(swap! state edit)}
       "Update"]

      [:button
       {:class ["w-full"
                "btn-red"]
        :on-click #(swap! state delete)}
       "Delete"]]]))
