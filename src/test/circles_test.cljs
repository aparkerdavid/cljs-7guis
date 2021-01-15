(ns circles-test
  (:require [clojure.test :refer [deftest testing is]]
            [app.circles :as circles]))


(deftest create-circle

  (testing "Create circle"
    (is (= (circles/create-circle
            {:circles []
             :undo-queue []
             :redo-queue []}
            50 50)
           {:circles [{:x 50 :y 50 :r 50}]
            :undo-queue [:delete-last]
            :redo-queue []})))

  (testing "Create circle at mouse"
    (is (= (circles/create-circle-at-mouse
            {:circles []
             :undo-queue []
             :redo-queue []
             :mouse-pos [50 50]})
           {:circles [{:x 50 :y 50 :r 50}]
            :undo-queue [:delete-last]
            :redo-queue []
            :mouse-pos [50 50]}))))

(deftest circle-at-mouse

  (testing "Get the right circle"
    (is (= (circles/get-circle-at-mouse
            {:circles [{:x 100 :y 100 :r 20} {:x 50 :y 50 :r 20}]
             :mouse-pos [50 50]})
           {:x 50, :y 50, :r 20, :idx 1, :distance 0})))

  (testing "Get the right circle when two overlap"
    (is (= (circles/get-circle-at-mouse
            {:circles [{:x 50 :y 100 :r 100} {:x 100 :y 100 :r 200}]
             :mouse-pos [50 100]})
           {:x 50, :y 100, :r 100, :idx 0, :distance 0})))

  (testing "Return nil when no circle is selected"
    (is (nil? (circles/get-circle-at-mouse
               {:circles [{:x 100 :y 100 :r 20}]
                :mouse-pos [200 200]})))))

(deftest resize-circle

  (testing "resize-circle"
    (is (= (circles/resize-circle
            {:circles [{:x 50 :y 50 :r 20}]
             :canvas  nil
             :undo-queue []
             :redo-queue []
             :mouse-pos []}
            0 50)
           {:circles [{:x 50, :y 50, :r 50}]
            :canvas nil
            :undo-queue [{:idx 0 :r 20}]
            :redo-queue []
            :mouse-pos []}))))

(deftest undo

  (testing "Undo circle creation"
    (is (= (circles/undo
            {:circles [{:x 50 :y 50 :r 50}]
             :undo-queue [:delete-last]
             :redo-queue []})

           {:circles []
            :undo-queue []
            :redo-queue [{:x 50 :y 50}]})))

  (testing "Undo circle resize"
    (is (= (circles/undo
            {:circles [{:x 50, :y 50, :r 50} {:x 100 :y 100 :r 20}]
             :undo-queue [{:idx 0 :r 20}]
             :redo-queue []})

           {:circles [{:x 50, :y 50, :r 20} {:x 100 :y 100 :r 20}]
            :undo-queue []
            :redo-queue [{:idx 0 :r 50}]}))))


(deftest redo

  (testing "Redo circle creation"
    (is (= (circles/redo
            {:circles []
             :undo-queue []
             :redo-queue [{:x 50 :y 50}]})

           {:circles [{:x 50 :y 50 :r 50}]
            :undo-queue [:delete-last]
            :redo-queue []})))

  (testing "Redo circle resize"
    (is (= (circles/redo
            {:circles [{:x 50, :y 50, :r 20} {:x 100 :y 100 :r 20}]
             :undo-queue []
             :redo-queue [{:idx 0 :r 50}]})

           {:circles [{:x 50, :y 50, :r 50} {:x 100 :y 100 :r 20}]
            :undo-queue [{:idx 0 :r 20}]
            :redo-queue []}))))
