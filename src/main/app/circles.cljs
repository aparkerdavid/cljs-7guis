(ns app.circles
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))


(defonce state (r/atom
                {:circles []
                 :canvas  nil
                 :undo-queue []
                 :redo-queue []
                 :mouse-pos []
                 :editing-circle nil}))


(defn reset-mouse-pos!
  "Update the application state with the current location of the mouse pointer.
   Called on every mouse-move event within the canvas."
  [e]
  (let [rect (.getBoundingClientRect (.-target e))]
    (reset! (r/cursor state [:mouse-pos])
            [(- (.-clientX e) (.-left rect))
             (- (.-clientY e) (.-top rect))])))


(defn create-circle
  [state x y]
  (-> state
      (update :circles #(conj % {:x x :y y :r 50}))
      (update :undo-queue #(conj % :delete-last))
      (assoc :redo-queue [])))


(defn create-circle-at-mouse
  [state]
  (create-circle
   state
   (-> state :mouse-pos (nth 0))
   (-> state :mouse-pos (nth 1))))


(defn distance [x1 y1 x2 y2]
  (js/Math.sqrt
   (+
    (js/Math.pow (- x1 x2) 2)
    (js/Math.pow (- y1 y2) 2))))


(defn get-circle-at-mouse
  [state]
  (let [[mouse-x mouse-y] (:mouse-pos state)
        get-distance (fn [{circle-x :x circle-y :y}]
                       (distance mouse-x mouse-y circle-x circle-y))]
    (->> state
         :circles
         (map-indexed
          (fn [idx circle]
            (conj
             circle
             {:idx idx
              :distance (get-distance circle)})))
         (filter
          (fn
            [{r :r dist :distance}]
            (< dist r)))
         (sort-by
          #(:distance %))
         first)))


(defn edit-circle-at-mouse
  [state]
  (when-let [circle (get-circle-at-mouse state)]
    (assoc state :editing-circle circle)))


(defn resize-circle
  [state idx r]
  (let [old-r (-> state :circles (nth idx) :r)]
    (-> state
        (assoc-in [:circles idx :r] r)
        (update :undo-queue #(conj % {:idx idx :r old-r}))
        (assoc :redo-queue []))))


(defn edit-circle-stop
  [state]
  (assoc state :editing-circle nil))


(defn edit-circle-commit
  [state]
  (let [idx (-> state :editing-circle :idx)
        r (-> state :editing-circle :r)]
    (-> state
        (resize-circle idx r)
        (edit-circle-stop))))


(defn undo
  [state]
  (when-let [op (last (:undo-queue state))]
    (if (= op :delete-last)
      (-> state
          (update :undo-queue pop)
          (update :redo-queue #(conj % (-> state :circles last (dissoc :r))))
          (update :circles pop))
      (let [{idx :idx r :r} (-> state :undo-queue last)]
        (-> state
            (update :undo-queue pop)
            (assoc-in [:circles idx :r] r)
            (update :redo-queue #(conj % {:idx idx :r (-> state :circles (nth idx) :r)})))))))


(defn redo
  [state]
  (when-let [op (-> state :redo-queue last)]
    (if (:x op) ;; A Create op will have an :x key, a Resize op will not.
      (create-circle state (:x op) (:y op))
      (resize-circle state (:idx op) (:r op)))))


(defn mouse-xy [e]
  (let [rect (.getBoundingClientRect (.-target e))]
    [(- (.-clientX e) (.-left rect))
     (- (.-clientY e) (.-top rect))]))


(defn draw-circle! [{x :x y :y r :r} color]
  (let [ctx (.getContext (@state :canvas) "2d")]
    (set! (. ctx -fillStyle) color)
    (.moveTo ctx x y)
    (.beginPath ctx)
    (.arc ctx x y r 0 (* 2 js/Math.PI))
    (.fill ctx)
    (.stroke ctx)))


(defn redraw!
  []
  (let [ctx (-> @state :canvas (.getContext "2d"))
        circle-at-mouse (get-circle-at-mouse @state)
        editing-circle (:editing-circle @state)]
    (set! (. ctx -fillStyle) "#eee")
    (.fillRect ctx 0 0 800 600)
    (->> @state
         :circles
         (map #(draw-circle! % "white"))
         doall)
    (draw-circle! editing-circle "red")
    (when (not= (:idx circle-at-mouse) (:idx editing-circle))
      (draw-circle! circle-at-mouse "#666"))))


(defn editor []
  (let [editing-circle (r/cursor state [:editing-circle])]
    (fn []
      [:div
       {:class ["max-w-sm" "block" "m-auto" "p-4"]
        :style {:margin "0 auto"}}
       (if @editing-circle
         [:div
          [:div
           {:class
            ["max-w-min" "block" "m-auto"]}
           [:div
            "Edit circle radius:"]
           [:input
            {:type "range"
             :min 10
             :max 200
             :value (:r @editing-circle)
             :on-change
             (fn [e]
               (let [v (-> e .-target .-value)]
                 (swap! editing-circle #(assoc % :r v))))}]]
          [:div
           {:class ["flex" "flex-col" "gap-2" "sm:flex-row"]}
           [:button
            {:class ["btn-red" "w-full"]
             :on-click
             #(swap! state edit-circle-stop)}
            "Cancel"]

           [:button
            {:class ["btn-green" "w-full"]
             :on-click
             #(swap! state edit-circle-commit)}
            "Done"]]]
         [:div
          {:class ["flex" "flex-col" "gap-2" "sm:flex-row"]}
          [:button
           {:class ["btn-red" "w-full"]
            :on-click
            #(swap! state undo)}
           "Undo"]
          [:button
           {:class ["btn-blue" "w-full"]
            :on-click
            #(swap! state redo)}
           "Redo"]])])))


(defn main []
  (r/create-class
   {:display-name "circles"

    :component-did-mount
    (fn [this]
      (add-watch state :component-update-state #(r/force-update this))
      (reset! (r/cursor state [:canvas]) (. (rdom/dom-node this) querySelector "#circles-canvas")))
      ;; (let [ctx (.getContext @canvas "2d")]
      ;;   (set! (. ctx -fillStyle) "#eee")
      ;;   (.fillRect ctx 0 0 800 600)))
      ;; (add-watch circles :component-update-circles #(r/force-update this))
      ;; (add-watch mouse-pos :component-update-mouse-pos #(r/force-update this))
      ;; (add-watch editing-circle :component-update-editing-circle #(r/force-update this)))

    :component-did-update
    (fn [this]
      (redraw!))

    :reagent-render
    (fn []
      [:div
       {:class ["p-0" "max-w-min"]}
       [:div
        {:class ["overflow-scroll" "w-full"]}
        [:canvas
         {:id "circles-canvas"
          :width 800
          :height 600

          :on-mouse-move
          #(reset-mouse-pos! %)

          :on-click
          #(swap! state create-circle-at-mouse)

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (swap! state edit-circle-at-mouse))}]]

       [editor]])}))
