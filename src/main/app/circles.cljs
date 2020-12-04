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

(defn selected-circle [circles mouse-pos]
  (let [[mouse-x mouse-y] mouse-pos
        distance (fn [{circle-x :x circle-y :y}]
                   (distance mouse-x mouse-y circle-x circle-y))]
    (->> circles
         (sort-by (fn [[k v]] (distance v)))
         first
         ((fn [[k v]]
            (when (< (distance v) (:r v))
              v))))))

(defn selected-circle-2 [mouse-pos]
  (let [[mouse-x mouse-y] mouse-pos
        distance (fn [{circle-x :x circle-y :y}]
                   (distance mouse-x mouse-y circle-x circle-y))]
    (->> @circles
         (sort-by (fn [[k v]] (distance v)))
         first
         ((fn [[k v]]
            (when (< (distance v) (:r v))
              v))))))

(defn draw-circle-2 [{x :x y :y r :r} color]
  (let [ctx (.getContext @canvas "2d")]
    (set! (. ctx -fillStyle) color)
    (.moveTo ctx x y)
    (.beginPath ctx)
    (.arc ctx x y r 0 (* 2 js/Math.PI))
    (.fill ctx)
    (.stroke ctx)))

(defn draw-circle [{x :x y :y r :r} ctx]
  (set! (. ctx -fillStyle) "#fff")
  (.moveTo ctx x y)
  (.beginPath ctx)
  (.arc ctx x y r 0 (* 2 js/Math.PI))
  (.fill ctx)
  (.stroke ctx))

(defn draw-selected-circle [{x :x y :y r :r} ctx]
  (set! (. ctx -fillStyle) "#666")
  (.moveTo ctx x y)
  (.beginPath ctx)
  (.arc ctx x y r 0 (* 2 js/Math.PI))
  (.fill ctx)
  (.stroke ctx))

(defn redraw [mouse-pos]
  (let [ctx (.getContext @canvas "2d")
        selected-circle (selected-circle-2 mouse-pos)]
    (set! (. ctx -fillStyle) "#eee")
    (.fillRect ctx 0 0 800 600)
    (doall (map #(draw-circle-2 % "#fff") (vals @circles)))
    (draw-circle-2 selected-circle "#666")))

(defn draw-all-circles [circles ctx & mouse-pos]
  (set! (. ctx -fillStyle) "#eee")
  (.fillRect ctx 0 0 800 600)
  (doall (map #(draw-circle % ctx) (vals circles)))
  (draw-selected-circle (selected-circle circles (first mouse-pos)) ctx))

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
        (add-watch mouse-pos :component-update-mouse-pos #(r/force-update this)))

      :component-did-update
      (fn [this]
        (let [ctx (.getContext @canvas "2d")]
          (redraw @mouse-pos)
          ;; (draw-all-circles @circles ctx @mouse-pos)
          ))

      :reagent-render
      (fn []
        [:div
         [:canvas
          {:id "circles-canvas"
           :width 800
           :height 600
           :on-mouse-move
           (fn [e]
             (reset! mouse-pos (xy e)))

           :on-click
           (fn [e]
             (add-circle (xy e)))}]
         [:button {:on-click undo} "Undo"]
         [:button {:on-click redo} "Redo"]])})))
