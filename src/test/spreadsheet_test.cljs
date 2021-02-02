(ns spreadsheet-test
  (:require [clojure.test :refer [deftest testing is]]
            [app.spreadsheet :as spreadsheet]))


(deftest get-parents
  (is (= (spreadsheet/get-parents "+ a1 b1") '(:a1 :b1)))
  (is (= (spreadsheet/get-parents "+ 1 2") '()))
  (is (= (spreadsheet/get-parents "foo bar") '())))


(deftest non-cyclical?
  (testing "A non-cyclical input"
    (is (spreadsheet/non-cyclical?
         :c3
         "+ h1 b5"
         {:a1 {:formula "+ b1 a2"} :b1 {:formula "+ b2 c3"}})))
  (testing "a cyclical input"
    (is (not
         (spreadsheet/non-cyclical?
          :c3
          "+ a1 b1"
          {:a1 {:formula "+ b1 a2"} :b1 {:formula "+ b2 c3"}})))))

(deftest add-child
  (testing "Add a child"
    (is (= (spreadsheet/add-child {} :b1 :a1)
           {:a1 {:children [:b1]}}))))

(deftest remove-child
  (testing "Remove a child"
    (is
     (->
      (spreadsheet/remove-child {:b1 {:children [:a1]}} :a1 :b1)
      :b1
      :children
      empty?))))


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

  (testing "Update multiple values in order"
    (is (= {:a1 {:value 4, :formula "+ 1 3", :kind :derived :children [:b1]}
            :b1 {:value 9, :formula "+ a1 5" :kind :derived}}
           (spreadsheet/update-values
            {:a1 {:value 6 :formula "+ 1 3" :children [:b1]}
             :b1 {:value 1 :formula "+ a1 5"}}
            [:a1 :b1])))))


(deftest update-value-chain

  (testing "Update a value chain"
    (is (= {:a1 {:value 3 :formula "+ 1 2" :kind :derived :children [:b1]}
            :b1 {:value 5 :formula "+ a1 2" :kind :derived}}
           (spreadsheet/update-value-chain
            {:a1 {:value 4 :formula "+ 1 2" :children [:b1]}
             :b1 {:value 2 :formula "+ a1 2"}}
            :a1))))

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
           {:a1 {:value 2 :formula "2" :children [:b1]}
            :b1 {:value 4 :formula "+ a1 2" :kind :derived}})))

  (testing "Update a formula with a child"
    (is (= (spreadsheet/update-formula
            :a1 "4"
            {:a1 {:value 2 :formula "2" :children [:b1]}
             :b1 {:value 4 :formula "+ a1 2"}})
           {:a1 {:value 4 :formula "4" :children [:b1] :kind :number}
            :b1 {:value 6 :formula "+ a1 2" :kind :derived}}))))

