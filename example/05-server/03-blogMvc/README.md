# 練習 -- koa server 測試案例

0. 請先安裝相關套件
  * npm i koa koa-logger koa-router koa-body --save
1. 請執行 app.js 後，查看 http://localhost:3000/
  * node app.js
2. 請安裝 mocha, supertest 後，用 mocha 對 app.js 進行測試。
  * npm i mocha --global
  * npm i supertest
  * mocha tddTest.js

## 執行結果

```
PS D:\course\se107a\exercise\05-server\02-blogEs6> npm i koa-logger koa-router koa-body --save
npm WARN npm npm does not support Node.js v10.11.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ koa-body@4.0.4
+ koa-logger@3.2.0
+ koa-router@7.4.0
added 30 packages in 40.86s
PS D:\course\se107a\exercise\05-server\02-blogEs6> mocha
Warning: Could not find any test files matching pattern: test
No test files found
PS D:\course\se107a\exercise\05-server\02-blogEs6> mocha tddTest.js


  Blog
    GET /
  <-- GET /
  --> GET / 200 48ms 1.11kb
      √ should see title "Posts" (145ms)
  <-- GET /
  --> GET / 200 13ms 1.11kb
      √ should see 0 post
    POST /post/new
  <-- POST /post
  --> POST /post 302 204ms 33b
      √ should create post and redirect to / (214ms)
    GET /post/0
  <-- GET /post/0
  --> GET /post/0 200 5ms 1.01kb
      √ should see post


  4 passing (440ms)
```