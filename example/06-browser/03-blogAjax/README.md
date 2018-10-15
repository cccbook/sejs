# 練習 -- 使用 puppeteer 測試你的 AJAX 程式 (完整)

0. 安裝 koa 相關套件
  * npm i koa-json koa-router ...
1. 請啟動 app ，然後觀看 http://localhost:3000/
2. 使用 mocha + puppeteer 測試
  * mocha --timeout 100000
3. 仔細閱讀 test.js 與 app.js
  * 理解其中的程式碼關係！


```
PS D:\course\se107a\exercise\06-browser\06-blogAjax> npm i koa-json koa-router
npm WARN npm npm does not support Node.js v10.11.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ koa-json@2.0.2
+ koa-router@7.4.0
added 3 packages and updated 1 package in 35.106s
PS D:\course\se107a\exercise\06-browser\06-blogAjax> mocha --timeout 100000
Server run at http://localhost:3000


  blogAjax
    puppeteer
  <-- GET /
  --> GET / 200 190ms 1.04kb
  <-- GET /main.js
  --> GET /main.js 200 22ms 1.96kb
  <-- GET /list/
  --> GET /list/ 200 10ms 2b
      √ GET / should see <p>You have <strong>0</strong> posts!</p> (2191ms)
      √ click createPost link (950ms)
  <-- POST /post
create:id=> 0
create:get=> { title: 'aaa', body: 'aaa' }
create:save=> { title: 'aaa',
  body: 'aaa',
  created_at: 2018-10-09T01:53:42.745Z,
  id: 0 }
  --> POST /post 404 500ms -
  <-- GET /list/
  --> GET /list/ 200 7ms 77b
      √ fill {title:"aaa", body:"aaa"} (3817ms)
      √ should see <p>You have <strong>1</strong> posts!</p> (116ms)
  <-- GET /post/0
  --> GET /post/0 200 4ms 75b
      √ should see <p>You have <strong>1</strong> posts!</p> (673ms)


  5 passing (13s)
```