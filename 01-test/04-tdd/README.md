## 練習 -- TDD

講解： 從 lodash 中再度挑選第二個函數，但是這次採用 TDD 的方式。

TDD : Test Driven Development  (先寫測試，再寫程式)

1. 挑選第二個 lodash 函數。
2. 選定後寫測試函數，寫好後直接打 mocha，此時會報錯誤。

範例

```
csienqu-teacher:01-test csienqu$ cd 04-tdd/
csienqu-teacher:04-tdd csienqu$ mocha


  ccclodash
    chunk
      ✓ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]

  ccclodash
    compact
      1) _.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]


  3 passing (34ms)
  1 failing

  1) ccclodash compact _.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]:
     TypeError: _.compact is not a function
      at Context.<anonymous> (test/compactTest.js:7:32)


```
