# 練習 -- 使用 puppeteer 測試你的 AJAX 程式

1. 請啟動 app ，然後觀看 http://localhost:3000/
2. 使用 mocha + puppeteer 測試
  * mocha --timeout 100000
3. 仔細閱讀 test.js 與 app.js
  * 理解其中的程式碼關係！

## 執行結果

```
$ node app
// 然後觀看 http://localhost:3000/
$ mocha -t 100000 test.js
listening on port 3000


  helloAjax
    puppeteer
      √ GET / should see fetchReadme()" (3875ms)
      √ click fetchReadme() should see helloAjax" (1369ms)
      √ click fetchJson() should see ccckmit@gmail.com" (687ms)


  3 passing (14s)
```

## 參考

* AJAX -- https://www.w3schools.com/js/js_ajax_intro.asp 
* Fetch API -- https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch
* https://github.com/mdn/fetch-examples/
