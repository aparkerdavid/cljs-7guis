(ns app.crud
  (:require [reagent.core :as r]
            [clojure.string :as string]))

(def sample-names
  [{:first "Lebbeus"
    :last "Woods"}
   {:first "Bruce"
    :last "Mau"}
   {:first "Christopher"
    :last "Alexander"}
   {:first "Jane"
    :last "Jacobs"}])

(defonce state (r/atom
                {:names sample-names
                 :filter-str ""
                 :selected-id 0
                 :first-name-input ""
                 :last-name-input ""}))

(defn get-filtered-names
  "Return a list of vectors: each contains an index and the name associated with it.
   Names will be filtered by 'state's :filter-str field.
   Only those names whose :last field starts with the filter-str will be included.
   If the filter-str is empty, no filtration will occur; the full list of names will be returned."
  [state]
  (->> (@state :names)
       (map-indexed
        (fn [idx name] [idx name]))
       (filter
        (fn [[id name]]
          (if (string/blank? (@state :filter-str))
            true
            (string/starts-with?
             (string/lower-case (name :last))
             (string/lower-case (@state :filter-str))))))))

(defn reset-name-inputs!
  "Reset the values of 'state's 'first-name-input' and 'last-name-input' fields.
   The new values will be those associated with the currently selected name.
   This should happen every time the user changes which name is selected."
  [state]
  (reset! (r/cursor state [:first-name-input]) (deref (r/cursor state [:names (@state :selected-id) :first])))
  (reset! (r/cursor state [:last-name-input]) (deref (r/cursor state [:names (@state :selected-id) :last]))))

(defn create!
  "Add a record to the list.
   The first and last names will be the values of 'first-name-input' and 'last-name-input'."
  [state]
  (swap!
   (r/cursor state [:names])
   #(conj % {:first (@state :first-name-input) :last (@state :last-name-input)})))

(defn update!
  "Update the currently-selected record.
   The new first and last names will be the values of 'first-name-input' and 'last-name-input'."
  [state]
  (when (-> (@state :first-name-input) string/blank? not)
    (reset! (r/cursor state [:names (@state :selected-id) :first]) (@state :first-name-input)))
  (when (-> (@state :last-name-input) string/blank? not)
    (reset! (r/cursor state [:names (@state :selected-id) :last]) (@state :last-name-input))))

(defn dissoc-vec
  "Remove item at index 'idx' from vector 'vec'"
  [vec idx]
  (into []
        (concat (subvec vec 0 idx)
                (subvec vec (inc idx)))))

(defn delete!
  "Delete the current-selected record.
   If the deleted record was the first in the list:
   The first record in the list post-deletion will be selected.
   Otherwise:
   The record preceding the deleted record will be selected."
  [state]
  (swap!
   (r/cursor state [:names])
   #(dissoc-vec % (@state :selected-id)))
  (swap!
   (r/cursor state [:selected-id])
   (fn [id] (if (> id 0) (dec id) 0)))
  (reset-name-inputs! state))


(defn main []
  (fn []
    [:div ;; Outermost container
     [:div ;; Top block
      {:class ["flex" "row"]}
      [:div ;; Filter and Namelist

       [:div ;; Filter
        [:div "Filter: "]
        [:input
         {:type "text"
          :value (@state :filter-str)
          :on-change (fn [e] (reset! (r/cursor state [:filter-str]) (-> e .-target .-value)))}]]

       [:ul ;; Namelist
        {:class ["border-gray-900"
                 "border-2"
                 "h-72"
                 "overflow-scroll"]}
        (for [[key name] (get-filtered-names state)]
          [:li
           {:class (concat ["px-1"]
                           (when
                            (= (@state :selected-id) key)
                             ["bg-blue-600" "text-white"]))
            :on-click (fn [_e]
                        (reset! (r/cursor state [:selected-id]) key)
                        (reset-name-inputs! state))
            :key key}
           [:a
            (str (name :first) " " (name :last))]])]]

      [:div
       [:div
        [:div
         "First name:"]
        [:input
         {:type "text"
          :value (@state :first-name-input)
          :on-change
          (fn [e] (reset! (r/cursor state [:first-name-input]) (-> e .-target .-value)))}]]

       [:div
        [:div "Last name: "]
        [:input
         {:type "text"
          :value (@state :last-name-input)
          :on-change (fn [e] (reset! (r/cursor state [:last-name-input]) (-> e .-target .-value)))}]]]]

     [:div

      [:button
       {:class ["hover:bg-green-600"
                "hover:border-green-600"
                "hover:text-white"
                "hover:shadow-xl"
                "active:bg-green-400"
                "active:border-green-400"
                "active:text-white"]
        :on-click #(create! state)}
       "Create"]

      [:button
       {:class ["hover:bg-blue-600"
                "hover:border-blue-600"
                "hover:text-white"
                "hover:shadow-xl"
                "active:bg-blue-400"
                "active:border-blue-400"
                "active:text-white"]
        :on-click #(update! state)}
       "Update"]

      [:button
       {:class ["hover:bg-red-600"
                "hover:border-red-600"
                "hover:text-white"
                "hover:shadow-xl"
                "active:bg-red-400"
                "active:border-red-400"
                "active:text-white"]
        :on-click #(delete! state)}
       "Delete"]]]))
