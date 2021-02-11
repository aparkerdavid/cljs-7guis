(ns spreadsheet-test
  (:require [clojure.test :refer [deftest testing is]]
            [app.spreadsheet :as spreadsheet]))


(deftest get-parents
  (is (= (spreadsheet/get-references "+ a1 b1") '(:a1 :b1)))
  (is (= (spreadsheet/get-references "+ 1 2") '()))
  (is (= (spreadsheet/get-references "foo bar") '())))


(deftest cyclical?
  (is  (spreadsheet/cyclical?
        :a1
        "+ a1 1"
        {}))
  (testing "A non-cyclical input"

    (is (not  (spreadsheet/cyclical?
               :c3
               "+ h1 b5"
               {:a1 {:formula "+ b1 a2"} :b1 {:formula "+ b2 c3"}}))))
  (testing "a cyclical input"
    (is
     (spreadsheet/cyclical?
      :a1
      "+ a1 b1"
      {:a1 {:formula "+ b1 a2"} :b1 {:formula "+ b2 c3"}}))))

(deftest add-child
  (testing "Add a child"
    (is (= (spreadsheet/add-child {} :b1 :a1)
           {:a1 {:children #{:b1}}}))))

(deftest remove-child
  (testing "Remove a child"
    (is
     (->
      (spreadsheet/remove-child {:b1 {:children [:a1]}} :a1 :b1)
      :b1
      :children
      empty?))))


(deftest eval-formula-str
  (is
   (= :error
      (->
       (spreadsheet/eval-formula-str "+ a1 1" :a1 {:b1 {:formula nil, :kind nil, :value nil}, :a1 {:formula nil, :kind nil, :value nil}})
       :kind))))


(deftest update-value
  (testing "Update a cell's value"
    (is (= (spreadsheet/update-value {:a1 {:value 4 :formula "+ 1 2"}} :a1)
           {:a1 {:value 3, :formula "+ 1 2" :kind :derived}})))
  (testing "Update a value with a reference"
    (is (= 5
           (->
            (spreadsheet/update-value
             {:a1 {:value 4 :formula "+ 2 2"}
              :b1 {:value 4 :formula "+ 1 a1"}}
             :b1)
            :b1 :value))))

  (testing "Update value with a circular reference"
    (is (= (-> (spreadsheet/update-value {:a1 {:formula "+ a1 1"}} :a1)
               :a1
               :kind)
           :error)))

  (testing "Update multiple values in order"
    (is (= {:a1 {:value 4, :formula "+ 1 3", :kind :derived :children [:b1]}
            :b1 {:value 9, :formula "+ a1 5" :kind :derived}}
           (spreadsheet/update-values
            {:a1 {:value 6 :formula "+ 1 3" :children [:b1]}
             :b1 {:value 1 :formula "+ a1 5"}}
            [:a1 :b1])))))


(deftest build-value-chain
  (let [build-value-chain spreadsheet/build-value-chain]
    (testing "No references"
      (is (= (build-value-chain {:a1 {:formula "+ 1 2" :children #{}}} :a1)
             [:non-cyclical [:a1]])))
    (testing "Single reference"
      (is (= (build-value-chain {:a1 {:formula "+ 1 2" :children #{:b1}} :b1 {:formula "+ a1 2"}} :a1)
             [:non-cyclical [:b1 :a1]])))
    (testing "Multiple references"
      (is (= (build-value-chain
              {:a1 {:formula "1" :value 1 :children #{:b1 :c1}}
               :b1 {:formula "+ a1 1"}
               :c1 {:formula "+ a1 2"}}
              :a1)
             [:non-cyclical [:c1 :b1 :a1]])))
    (testing "Chained references"
      (is
       (=
        (build-value-chain
         {:a1 {:formula "1" :children #{:b1 :d1}}
          :b1 {:formula "+ a1 1" :children #{:c1}}
          :c1 {:formula "+ b1 1" :children #{:d1}}
          :d1 {:formula "+ a1 c1"}}
         :a1)
        [:non-cyclical :a1 :b1 :c1 :d1])))
    (testing "Cyclical reference"
      (is
       (=
        (build-value-chain
         {:a1 {:formula "+ :b1 2" :children #{:b1}}
          :b1 {:formula "+ a1 2" :children #{:a1}}}
         :a1)
        [:cyclical [:b1 :a1]])))))


(deftest update-value-chain

  (testing "Update a value chain"
    (is (= {:a1 {:value 3 :formula "+ 1 2" :kind :derived :children [:b1]}
            :b1 {:value 5 :formula "+ a1 2" :kind :derived}}
           (spreadsheet/update-value-chain
            {:a1 {:value 4 :formula "+ 1 2" :children [:b1]}
             :b1 {:value 2 :formula "+ a1 2"}}
            :a1))))

  (testing "Update a formula with a circular reference"
    (is (= :error (->
                   (spreadsheet/update-value-chain
                    {:a1 {:formula "+ a1 1"}}
                    :a1)
                   :a1
                   :kind))))

  (testing "Update a formula with a child"
    (is (= {:a1 {:value 4, :formula "+ 1 3", :kind :derived :children [:b1]}
            :b1 {:value 9, :formula "+ a1 5" :kind :derived}}
           (spreadsheet/update-value-chain
            {:a1 {:value 6 :formula "+ 1 3" :children [:b1]}
             :b1 {:value 1 :formula "+ a1 5"}}
            :a1)))))


(deftest update-formula

  (testing "Add a formula"
    (is (= (spreadsheet/update-formula
            :a1 "2" {})
           {:a1 {:value 2 :formula "2" :kind :number}})))

  (testing "Alter an existing formula"
    (is (= (spreadsheet/update-formula
            :a1 "4" {:a1 {:value 2 :formula "2"}})
           {:a1 {:value 4 :formula "4" :kind :number}})))

  (testing "Add a formula with a dependency"
    (is (= (spreadsheet/update-formula
            :b1 "+ a1 2" {:a1 {:value 2 :formula "2"}})
           {:a1 {:value 2 :formula "2" :children #{:b1}}
            :b1 {:value 4 :formula "+ a1 2" :kind :derived}})))

  (testing "Update a formula with a child"
    (is (= (spreadsheet/update-formula
            :a1 "4"
            {:a1 {:value 2 :formula "2" :children #{:b1}}
             :b1 {:value 4 :formula "+ a1 2"}})
           {:a1 {:value 4 :formula "4" :children #{:b1} :kind :number}
            :b1 {:value 6 :formula "+ a1 2" :kind :derived}}))))


(deftest eval-formula

  (is (= 2 (spreadsheet/eval-formula '(+ 1 1) {}))))

