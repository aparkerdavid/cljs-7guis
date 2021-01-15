(ns crud-test
  (:require [clojure.test :refer [deftest testing is]]
            [app.crud :as crud]))

(deftest get-filtered-names
  (testing "get-filtered-names"
    (is
     (=
      (crud/get-filtered-names
       {:names
        [{:first "Lebbeus"
          :last "Woods"}
         {:first "Bruce"
          :last "Mau"}
         {:first "Christopher"
          :last "Alexander"}
         {:first "Jane" :last "Jacobs"}]
        :filter-str "Ja"
        :selected-id 0
        :first-name-input ""
        :last-name-input ""})
      '([3 {:first "Jane", :last "Jacobs"}])))))

(deftest reset-name-inputs
  (testing "reset-name-inputs"
    (is (=
         (crud/reset-name-inputs
          {:names
           [{:first "Lebbeus"
             :last "Woods"}
            {:first "Bruce"
             :last "Mau"}
            {:first "Christopher"
             :last "Alexander"}
            {:first "Jane" :last "Jacobs"}]
           :filter-str "Ja"
           :selected-id 0
           :first-name-input "Parker"
           :last-name-input "Rueve"})
         {:names
          [{:first "Lebbeus"
            :last "Woods"}
           {:first "Bruce"
            :last "Mau"}
           {:first "Christopher"
            :last "Alexander"}
           {:first "Jane" :last "Jacobs"}]
          :filter-str "Ja"
          :selected-id 0
          :first-name-input "Lebbeus"
          :last-name-input "Woods"}))))

(deftest create
  (testing "create"
    (is (=
         (crud/create {:names [{:first "Lebbeus"
                                :last "Woods"}
                               {:first "Bruce"
                                :last "Mau"}
                               {:first "Christopher"
                                :last "Alexander"}
                               {:first "Jane"
                                :last "Jacobs"}]
                       :filter-str ""
                       :selected-id 0
                       :first-name-input "Foo"
                       :last-name-input "Bar"})
         {:names
          [{:first "Lebbeus", :last "Woods"}
           {:first "Bruce", :last "Mau"}
           {:first "Christopher", :last "Alexander"}
           {:first "Jane", :last "Jacobs"}
           {:first "Foo", :last "Bar"}]
          :filter-str ""
          :selected-id 0
          :first-name-input "Foo"
          :last-name-input "Bar"}))))

(deftest edit
  (testing "edit"
    (is (= (crud/edit
            {:names
             [{:first "Lebbeus"
               :last "Woods"}
              {:first "Bruce"
               :last "Mau"}
              {:first "Christopher"
               :last "Alexander"}
              {:first "Jane"
               :last "Jacobs"}]
             :filter-str ""
             :selected-id 0
             :first-name-input "Lebron"
             :last-name-input "Foods"})
           {:names
            [{:first "Lebron" :last "Foods"}
             {:first "Bruce", :last "Mau"}
             {:first "Christopher", :last "Alexander"}
             {:first "Jane", :last "Jacobs"}]
            :filter-str ""
            :selected-id 0
            :first-name-input "Lebron"
            :last-name-input "Foods"}))))

(deftest dissoc-vec
  (testing "dissoc-vec"
    (is (= (crud/dissoc-vec
            [1 2 3 4 5] 2)
           [1 2 4 5]))))

(deftest delete
  (testing "delete"
    (is (= (crud/delete
            {:names
             [{:first "Lebbeus"
               :last "Woods"}
              {:first "Bruce"
               :last "Mau"}
              {:first "Christopher"
               :last "Alexander"}
              {:first "Jane"
               :last "Jacobs"}]
             :filter-str ""
             :selected-id 2
             :first-name-input "Christopher"
             :last-name-input "Alexander"})
           {:names
            [{:first "Lebbeus"
              :last "Woods"}
             {:first "Bruce"
              :last "Mau"}
             {:first "Jane"
              :last "Jacobs"}]
            :filter-str ""
            :selected-id 1
            :first-name-input "Bruce"
            :last-name-input "Mau"}))))
