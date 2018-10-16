# 軟體品質

## 練習 1 -- 正確排版

針對你的 lodash 專案

1. 請用 StandardJS 檢查你的程式並調整到沒有任何語法問題。
2. 請用 Prettier 對你的程式進行自動排版。

## 練習 2 -- Bug 處理

針對你的 lodash 專案

1. 請找出你程式中的還有甚麼 bug
2. 請用 throw/assert 預防這些 bug，提早警報！
3. 請寫一個程式使用 try .. catch 捕捉檔案開啟失敗的錯誤。 
4. 請查出 strict.js 的錯誤之所在並修正之！

## 練習 3 -- 產生說明

請修改你的 lodash 專案，為你的專案加上 api 文件

1. 為你的專案加上 jsdoc 格式的說明
  * 參考 : http://usejsdoc.org/
  * http://www.css88.com/doc/jsdoc/index.html
  * https://github.com/se107a/ccclodash/blob/master/lib/chunk.js
2. 然後用 jsdoc 自動產生該專案的說明
  * https://github.com/se107a/ccclodash/blob/master/package.json
  * jsdoc index.js lib -r -d docs -t node_modules/docdash
  * 記得安裝 jsdoc 與 docdash (另外你使用到的套件 mocha, chai, ... ) 也要裝好
3. 最後再次用 npm publish 出版你的套件。

完整參考: https://github.com/se107a/ccclodash

## 練習 4 -- 效能分析

1. 請對你的 lodash 專案進行 Profiling 效能地圖分析！
