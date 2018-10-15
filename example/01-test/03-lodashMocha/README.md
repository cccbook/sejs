# 練習 -- 用 mocha 進行單元測試

1. 用 mocha 的方式撰寫你的單元測試函數 （例如 chunkTest.js) 放在 test 資料夾下
2. 打入 mocha 指令開始測試。

範例

```
csienqu-teacher:01-test csienqu$ cd 03-lodashMocha/
csienqu-teacher:03-lodashMocha csienqu$ mocha


  ccclodash
    chunk
      ✓ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
      ✓ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]


  3 passing (8ms)
```
