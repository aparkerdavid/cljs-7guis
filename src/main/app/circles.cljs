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
  "Add a circle  at the specified X and Y coordinates.
   This adds a delete op to the undo queue."
  [state x y]
  (-> state
      (update :circles #(conj % {:x x :y y :r 50}))
      (update :undo-queue #(conj % :delete-last))))


(defn create-circle-at-mouse
  "Create a circle at the current location of the mouse pointer.
   This clears the redo queue."
  [state]
  (let [[mouse-x mouse-y] (:mouse-pos state)]
    (-> state
        (create-circle mouse-x mouse-y)
        (assoc :redo-queue []))))


(defn distance
  "Get the distance between two points."
  [x1 y1 x2 y2]
  (js/Math.sqrt
   (+ (js/Math.pow (- x1 x2) 2)
      (js/Math.pow (- y1 y2) 2))))


(defn get-circle-at-mouse
  "Determine which circle the mouse pointer is currently inside.
   If the pointer is inside multiple circles, get the one whose center the pointer is closest to."
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
          (fn [{r :r dist :distance}]
            (< dist r)))
         (sort-by
          #(:distance %))
         first)))


(defn resize-circle
  "Change the radius of a given circle.
   This adds a resize op to the undo queue."
  [state idx r]
  (let [old-r (-> state :circles (nth idx) :r)]
    (-> state
        (assoc-in [:circles idx :r] r)
        (update :undo-queue #(conj % {:idx idx :r old-r})))))



(defn edit-circle-at-mouse
  "Begin editing the circle the mouse pointer is currently inside.
   This does not actually change the circle, but allows for a prospective change to be previewed."
  [state]
  (if-let [circle (get-circle-at-mouse state)]
    (assoc state :editing-circle circle)
    state))


(defn edit-circle-stop
  "If editing a circle, stop."
  [state]
  (assoc state :editing-circle nil))


(defn edit-circle-commit
  "If editing a circle, commit the change and stop editing.
   This clears the redo queue."
  [state]
  (let [idx (-> state :editing-circle :idx)
        r (-> state :editing-circle :r)]
    (-> state
        (resize-circle idx r)
        (assoc :redo-queue [])
        (edit-circle-stop))))


(defn undo
  "Perform an operation determined by the last operation in the undo queue.
   This removes the last item from the undo queue, add a corresponding item to the redo queue."
  [state]
  (let [op (last (:undo-queue state))]
    (cond
      (= op :delete-last)
      (-> state
          (update :undo-queue pop)
          (update :redo-queue #(conj % (-> state :circles last (dissoc :r))))
          (update :circles pop))
      (:r op) ;; A Resize op will have an :r key
      (let [{idx :idx r :r} (-> state :undo-queue last)]
        (-> state
            (update :undo-queue pop)
            (assoc-in [:circles idx :r] r)
            (update :redo-queue #(conj % {:idx idx :r (-> state :circles (nth idx) :r)}))))
      :else state)))


(defn redo
  "Perform an operation determined by the last operation in the redo queue.
   This removes the last item from the redo queue, add a corresponding item to the undo queue."
  [state]
  (let [op (-> state :redo-queue last)]
    (->
     (cond
       (:x op) ;; A Create op will have an :x key
       (create-circle state (:x op) (:y op))
       (:r op) ;; A Resize op will have an :r key
       (resize-circle state (:idx op) (:r op))
       :else state)
     (update :redo-queue pop))))


(defn draw-circle!
  "Draw a circle to the canvas with the specified geometry and color."
  [{x :x y :y r :r} color]
  (let [ctx (.getContext (@state :canvas) "2d")]
    (set! (. ctx -fillStyle) color)
    (.moveTo ctx x y)
    (.beginPath ctx)
    (.arc ctx x y r 0 (* 2 js/Math.PI))
    (.fill ctx)
    (.stroke ctx)))


(defn redraw!
  "Primary drawing function. This fires every time the application state changes.
   Fill the background with #eee.
   Draw each circle in white, unless it is being edited.
   In that case, replace it with a preview of the prospective change.
   Circles are drawn in stacking order.
   If the cursor is inside a circle other than the one being edited, redraw it in #666
   If the cursor is in side the circle being edited, redraw it in red."
  []
  (let [ctx (-> @state :canvas (.getContext "2d"))
        circle-at-mouse (get-circle-at-mouse @state)
        editing-circle (:editing-circle @state)]
    (set! (. ctx -fillStyle) "#eee")
    (.fillRect ctx 0 0 640 640)
    (->> @state
         :circles
         (map-indexed
          (fn [idx circle]
            (if (= idx (:idx editing-circle))
              (draw-circle! editing-circle "red")
              (draw-circle! circle "white"))))
         doall)
    (if (= (:idx circle-at-mouse) (:idx editing-circle))
      (draw-circle! editing-circle "red")
      (draw-circle! circle-at-mouse "#bbb"))))


(defn editor []
  (let [editing-circle (r/cursor state [:editing-circle])]
    (fn []
      [:div
       {:class ["max-w-sm" "block" "m-auto" "p-4"]
        :style {:margin "0 auto"}}
       (if @editing-circle
         [:<>
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
           {:class ["flex" "flex-col" "sm:flex-row"]}
           [:button
            {:class ["btn-red" "my-1" "sm:mx-1" "w-full"]
             :on-click
             #(swap! state edit-circle-stop)}
            "Cancel"]

           [:button
            {:class ["btn-green" "my-1" "sm:mx-1" "w-full"]
             :on-click
             #(swap! state edit-circle-commit)}
            "Done"]]]
         [:div
          {:class ["flex" "flex-col" "sm:flex-row"]}
          [:button
           {:class ["btn-red" "my-1" "sm:mx-1" "w-full"]
            :on-click
            #(swap! state undo)}
           "Undo"]
          [:button
           {:class ["btn-blue" "my-1" "sm:mx-1" "w-full"]
            :on-click
            #(swap! state redo)}
           "Redo"]])])))


(defn circles []
  (r/create-class
   {:display-name "circles"

    :component-did-mount
    (fn [this]
      (add-watch state :component-update-state #(r/force-update this))
      (reset! (r/cursor state [:canvas]) (. (rdom/dom-node this) querySelector "#circles-canvas")))

    :component-did-update
    #(redraw!)

    :reagent-render
    (fn []
      [:div
       {:class ["p-0" "max-w-min" "card"]}
       [:div
        {:class ["overflow-scroll" "bg-green-100" "w-full"]}
        [:canvas
         {:id "circles-canvas"
          :width 640
          :height 640

          :on-mouse-move
          #(reset-mouse-pos! %)

          :on-click
          #(swap! state create-circle-at-mouse)

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (swap! state edit-circle-at-mouse))}]]

       [editor]])}))
