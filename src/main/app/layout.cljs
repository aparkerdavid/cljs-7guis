(ns app.layout)

(defn block
  [title desc content]
  [:div {:class ["mt-16"]}
   [:div {:class ["max-w-prose" "mx-auto" "overflow-visible"]}
    [:h2  title]
    [:div {:class ["mt-2"]} desc]
    [:div {:class ["mt-12"]} content]]])
