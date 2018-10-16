## 練習 -- TDD 完成

講解： 從 lodash 中再度挑選第二個函數，但是這次採用 TDD 的方式。

TDD : Test Driven Development  (先寫測試，再寫程式)

1. 挑選第二個 lodash 函數。 （已於上次完成）
2. 選定後寫測試函數，寫好後直接打 mocha，此時會報錯誤。（已於上次完成）
3. 接著再開始寫該函數的實作程式，直到 mocha 沒有報錯為止。 (這次要做這個動作)

範例

```
csienqu-teacher:01-test csienqu$ cd 05-tdd2/
csienqu-teacher:05-tdd2 csienqu$ mocha


  ccclodash
    chunk
      ✓ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]

  ccclodash
    compact
      ✓ _.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]


  4 passing (9ms)
```
