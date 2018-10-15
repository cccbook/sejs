# 隨堂練習

請延續 《上一個練習》，將你的套件出版在 npm 上

1. 使用 npm init 建立你的專案檔 (package.json)
  * 參考 ： https://docs.npmjs.com/cli/init
2. 將《上一個練習》的程式加到你的資料夾中，記得設好 main 欄位！
  * https://docs.npmjs.com/files/package.json
3. 將測試指令 mocha 加入 package.json 中，並用 npm run test 測試。
  * https://docs.npmjs.com/misc/scripts
4. 將相關套件加入你的 package.json 當中，讓使用者可以用 npm i 安裝所有相關套件。
  * https://docs.npmjs.com/files/package.json
5. 上 npm 網站申請帳號
  * https://www.npmjs.com/login
6. 然後用 npm login (或 npm adduser) 確認你可以用該帳號登入。
  * https://docs.npmjs.com/cli/adduser
7. 上 npm 網站查詢，選定一個可用的套件名稱
  * https://www.npmjs.com/
8. 然後用 npm publish 指令發布你的套件。
  * https://docs.npmjs.com/cli/publish
9. 看看你發布的套件是否成功，檢查下列網址 (此時你會發現你的套件沒有說明)
  * https://www.npmjs.com/package/你的套件名稱
10. 撰寫你 npm 套件的 README.md 檔案，為套件加上說明。
  * 參考 : https://zh.wikipedia.org/wiki/Markdown (markdown 語法的參考)
11. 再次用 npm publish 發布你的套件，檢查下列網址
  * https://www.npmjs.com/package/你的套件名稱
  * npm 套件的發布常常會延時，要過比較久才看得到，您可以在 yarn 看看該套件是否發布完成
  * (yarn 比較快，算是 npm 的競爭對手 ....)
  * https://yarnpkg.com/zh-Hans/package/你的套件名稱
12. 用 npm i 你的套件名稱 安裝並寫一個測試程式，看看你的套件是否正常運作。

完整參考: https://github.com/se107a/ccclodash
