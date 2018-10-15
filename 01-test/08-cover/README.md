# 練習 -- instanbul (nyc)

* 參考: https://istanbul.js.org/docs/tutorials/mocha/

Coverage Test

```
csienqu-teacher$ cd 08-cover

csienqu-teacher:08-cover csienqu$ npm i -g nyc
/usr/local/bin/nyc -> /usr/local/lib/node_modules/nyc/bin/nyc.js
+ nyc@13.0.1
added 176 packages in 6.468s
csienqu-teacher:08-cover csienqu$ nyc mocha


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
      ✓ _.concat(array, 2, [3], [[4]]) equalTo [1, 2, [3], [[4]]]
      ✓ _.concat(array, 2, [3], [[4]]) equalTo [ 1, 2, 3 ]


  6 passing (12ms)

-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |      100 |      100 |      100 |      100 |                   |
 08-cover        |      100 |      100 |      100 |      100 |                   |
  ccclodash.js   |      100 |      100 |      100 |      100 |                   |
 08-cover/lib    |      100 |      100 |      100 |      100 |                   |
  chunk.js       |      100 |      100 |      100 |      100 |                   |
  compact.js     |      100 |      100 |      100 |      100 |                   |
  concat.js      |      100 |      100 |      100 |      100 |                   |
 08-cover/test   |      100 |      100 |      100 |      100 |                   |
  chunkTest.js   |      100 |      100 |      100 |      100 |                   |
  compactTest.js |      100 |      100 |      100 |      100 |                   |
  concatTest.js  |      100 |      100 |      100 |      100 |                   |
-----------------|----------|----------|----------|----------|-------------------|
```

