(ns app.circles
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce circles (r/atom (sorted-map)))
(defonce canvas (r/atom nil))
(defonce undo-queue (r/atom []))
(defonce redo-queue (r/atom []))
(defonce mouse-pos (r/atom []))
(defonce current-id (r/atom 0))
(def editing-circle (r/atom nil))

(defn add-circle [[x y]]
  (swap! circles #(assoc % @current-id {:x x :y y :r 50}))
  (swap! undo-queue #(conj % [@current-id nil]))
  (swap! current-id inc)
  (reset! redo-queue []))

(defn resize-circle [id r]
  (let [old-r (@circles id :r)]
    (swap! circles #(assoc-in % [id :r] r))
    (swap! undo-queue #(conj % [id old-r]))
    (reset! redo-queue [])))

(defn undo []
  (when (last @undo-queue)
    (let [[id op] (last @undo-queue)
          circle [id (@circles id)]]
      (if (nil? op)
        (do
          (swap! circles #(dissoc % id))
          (swap! undo-queue pop)
          (swap! redo-queue #(conj % circle)))
        (do
          (swap! circles #(conj % {id op}))
          (swap! undo-queue pop)
          (swap! redo-queue #(conj % circle)))))))

(defn redo []
  (when (last @redo-queue)
    (let [[id op] (last @redo-queue)]
      (swap! undo-queue #(conj % [id (@circles id)]))
      (swap! circles #(assoc % id op))
      (swap! redo-queue pop))))

(defn mouse-xy [e]
  (let [rect (.getBoundingClientRect (.-target e))]
    [(- (.-clientX e) (.-left rect))
     (- (.-clientY e) (.-top rect))]))

(defn distance [x1 y1 x2 y2]
  (js/Math.sqrt
   (+
    (js/Math.pow (- x1 x2) 2)
    (js/Math.pow (- y1 y2) 2))))

(defn selected-circle [mouse-pos]
  (let [[mouse-x mouse-y] mouse-pos
        distance (fn [{circle-x :x circle-y :y}]
                   (distance mouse-x mouse-y circle-x circle-y))]
    (->> @circles
         (filter (fn [[k v]] (< (distance v) (:r v))))
         (sort-by (fn [[k v]] (distance v)))
         first)))

(defn draw-circle [{x :x y :y r :r} color]
  (let [ctx (.getContext @canvas "2d")]
    (set! (. ctx -fillStyle) color)
    (.moveTo ctx x y)
    (.beginPath ctx)
    (.arc ctx x y r 0 (* 2 js/Math.PI))
    (.fill ctx)
    (.stroke ctx)))

(defn redraw [mouse-pos]
  (let [ctx (.getContext @canvas "2d")
        current-selected-circle (selected-circle mouse-pos)]
    (set! (. ctx -fillStyle) "#eee")
    (.fillRect ctx 0 0 800 600)
    (doall (map

            (fn [[k v]]

              (if (= k (:id @editing-circle))
                (draw-circle (assoc v :r (:r @editing-circle)) "red")
                (draw-circle v "white")))

            @circles))

    (if
     (= (first current-selected-circle) (:id @editing-circle))
      (draw-circle (assoc (last current-selected-circle) :r (:r @editing-circle)) "red")
      (draw-circle (last current-selected-circle) "#666"))))

(defn handle-right-click [e]
  (let [current-selected-circle (selected-circle (mouse-xy e))]
    (.preventDefault e)
    (when current-selected-circle
      (reset! editing-circle {:id (first current-selected-circle)
                              :r (:r (last current-selected-circle))}))))

(defn editor []
  (fn []
    (if @editing-circle
      [:div
       [:input
        {:class ["block"]
         :type "range"
         :min 10
         :max 200
         :value (:r @editing-circle)
         :on-change
         (fn [e]
           (let [v (-> e .-target .-value)]
             (swap! editing-circle #(assoc % :r v))))}]

       [:button
        {:class ["hover:bg-red-600"
                 "hover:border-red-600"
                 "hover:text-white"
                 "hover:shadow-xl"
                 "active:bg-red-400"
                 "active:border-red-400"
                 "active:text-white"]
         :on-click
         (fn [e]
           (reset! editing-circle nil))}
        "Cancel"]

       [:button
        {:class ["hover:bg-green-600"
                 "hover:border-green-600"
                 "hover:text-white"
                 "hover:shadow-xl"
                 "active:bg-green-400"
                 "active:border-green-400"
                 "active:text-white"]
         :on-click
         (fn [e]
           (let [{id :id r :r} @editing-circle]
             (resize-circle id r)
             (reset! editing-circle nil)))}
        "Done"]]
      [:div
       [:button
        {:class ["hover:bg-red-600"
                 "hover:border-red-600"
                 "hover:text-white"
                 "hover:shadow-xl"
                 "active:bg-red-400"
                 "active:border-red-400"
                 "active:text-white"]
         :on-click
         undo}
        "Undo"]
       [:button
        {:class ["hover:bg-blue-600"
                 "hover:border-blue-600"
                 "hover:text-white"
                 "hover:shadow-xl"
                 "active:bg-blue-400"
                 "active:border-blue-400"
                 "active:text-white"]

         :on-click
         redo}
        "Redo"]])))

(defn ^:export main []
  (let [mouse-pos (r/atom [])
        current-id (r/atom 0)]

    (r/create-class

     {:display-name "circles"

      :component-did-mount
      (fn [this]
        (reset! canvas (. (rdom/dom-node this) querySelector "#circles-canvas"))
        (let [ctx (.getContext @canvas "2d")]
          (set! (. ctx -fillStyle) "#eee")
          (.fillRect ctx 0 0 800 600))
        (add-watch circles :component-update-circles #(r/force-update this))
        (add-watch mouse-pos :component-update-mouse-pos #(r/force-update this))
        (add-watch editing-circle :component-update-editing-circle #(r/force-update this)))

      :component-did-update
      (fn [this]
        (let [ctx (.getContext @canvas "2d")]
          (redraw @mouse-pos)))

      :reagent-render
      (fn []
        [:div
         [:canvas
          {:id "circles-canvas"
           :width 800
           :height 600
           :on-mouse-move
           (fn [e]
             (reset! mouse-pos (mouse-xy e)))
           :on-context-menu
           handle-right-click
           :on-click
           (fn [e]
             (when (nil? @editing-circle)
               (add-circle (mouse-xy e))))}]
         [editor]])})))
