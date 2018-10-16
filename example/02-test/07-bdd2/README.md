### 練習 -- BDD2

講解： 從 lodash 中再度挑選第三個函數，但是這次採用 BDD 的方式。

BDD : Behavior Driven Development  (行為驅動開發，測試函數的寫法比較像口語)

1. 挑選第三個 lodash 函數。 (上次已完成)
2. 選定後用 mocha + chai 寫測試函數，寫好後直接打 mocha，此時會報錯誤。(上次已完成)
3. 接著再開始寫該函數的實作程式，直到 mocha 沒有報錯為止。 (這次要做這個動作)

範例：

```
csienqu-teacher:01-test csienqu$ cd 07-bdd2/
csienqu-teacher:07-bdd2 csienqu$ mocha

  ccclodash
    chunk
      ✓ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]

  ccclodash
    compact
      ✓ _.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]

  ccclodash
    concat
other= [ 1, 2, [ 3 ], [ [ 4 ] ] ]
      ✓ _.concat(array, 2, [3], [[4]]) equalTo [1, 2, [3], [[4]]]
      ✓ _.concat(array, 2, [3], [[4]]) equalTo [ 1, 2, 3 ]


  6 passing (13ms)

```

