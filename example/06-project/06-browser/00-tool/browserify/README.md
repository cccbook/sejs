# 練習 -- browserify

0. 安裝 browserify
  * npm install -g browserify
1. 安裝 uniq 套件
  * npm install uniq
2. 撰寫 main.js 程式
  * 請看 [main.js](main.js)
3. 產生瀏覽器中可以用的程式
  * browserify main.js -o dist/bundle.js
4. 用 chrome 瀏覽器的開發人員工具看 dist/test.html
  * 會看到一個可以展開的 Array(6)

## 安裝

* http://browserify.org/

```
$ npm install -g browserify
```

## 使用

用法很像 gcc， 以下是範例：

```
$ browserify from/file.js -o to/file.js  
```

須注意，只有宣告為全域變數才能在瀏覽器中被使用。

參考專案: https://github.com/se107a/ccclodash/blob/master/package.json


## 執行結果

```
PS D:\course\se107a\exercise\06-browser\01-browserify> npm i uniq
npm WARN npm npm does not support Node.js v10.11.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ uniq@1.0.1
updated 1 package in 25.539s
PS D:\course\se107a\exercise\06-browser\01-browserify> browserify main.js -o dist/bundle.js
```
