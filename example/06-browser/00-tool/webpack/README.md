# 練習 -- 使用 webpack 打包程式給瀏覽器使用

1. 創建 npm 專案
  * npm init
2. 按照 https://webpack.js.org/ 裡的指示操作
  * 創建 src/index.js src/bar.js webpack.config.js page.html
3. 使用 webpack 打包
  * npm run start

```
PS D:\course\se107a\exercise\06-browser\03-webpack> npm run start
npm WARN npm npm does not support Node.js v10.11.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/

> 03-webpack@1.0.0 start D:\course\se107a\exercise\06-browser\03-webpack
> webpack --config webpack.config.js

Hash: 648fa692ddc62ed31f4d
Version: webpack 4.20.2
Time: 1143ms
Built at: 2018-10-09 09:30:38
    Asset       Size  Chunks             Chunk Names
bundle.js  951 bytes       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js + 1 modules 74 bytes {0} [built]
    | ./src/index.js 34 bytes [built]
    | ./src/bar.js 40 bytes [built]
```


