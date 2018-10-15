## 隨堂練習 -- Github 基礎

1. 延續《上一個練習》在 github 上為你的專案創造一個 repository
2. 修改你的 package.json 欄位，加入 repository 欄位
  * https://github.com/se107a/ccclodash/blob/master/package.json
3. 用 git remote add origin 專案網址 的指令，設定好 origin 網址
  * 參考 ： [Git 基礎 - 與遠端協同工作](https://git-scm.com/book/zh-tw/v1/Git-%E5%9F%BA%E7%A4%8E-%E8%88%87%E9%81%A0%E7%AB%AF%E5%8D%94%E5%90%8C%E5%B7%A5%E4%BD%9C)
4. 用 git add -A, git commit -m 訊息, git push origin master 將套件出版在 github 上。
  *  [Git 基礎 - 與遠端協同工作](https://git-scm.com/book/zh-tw/v1/Git-%E5%9F%BA%E7%A4%8E-%E8%88%87%E9%81%A0%E7%AB%AF%E5%8D%94%E5%90%8C%E5%B7%A5%E4%BD%9C)
5. 再次用 npm publish 發布你的套件，檢查下列網址
  * https://www.npmjs.com/package/你的套件名稱
  * npm 套件的發布常常會延時，要過比較久才看得到，您可以在 yarn 看看該套件是否發布完成
  * (yarn 比較快，算是 npm 的競爭對手 ....)

