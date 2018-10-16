# Git 與 Github

## 練習 1 -- Github 基礎

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

## 練習 2 -- 雙人合作初體驗 (pull request)

請延續 《上一個練習》，試著用一人分飾兩角的方式，採用 organization + pull request 自己與自己合作！

0. 在 github 中創造一個 organization
  * https://github.com/settings/organizations
1. 在該 organization 上為你的套件開一個專案
  * 參考 ： https://github.com/se107a/ccclodash
2. 將該專案 fork 到自己的身分帳號下 (非 organization)
  * 主導者: https://github.com/se107a/ccclodash
  * 貢獻者: https://github.com/ccckmit/ccclodash
3. 貢獻者分支專案，例如叫 develop1，然後發一個 pull request 給主導者，說要新增一個稱為 xxx 的函數
  * 主導者在 pull request 上回應是否允許，或者給許意見想法！
4. 貢獻者新增完成 xxx 的函數與測試，並且 push 回自己的專案，然後再發送 pull request 給主導者，請求合併
  * 
5. 主導者透過下列指令下載貢獻者的提交版本
  * git remote add 來源名稱(例如 ccckmit) 來源專案網址(例如 https://github.com/ccckmit/ccclodash)
  * git fetch 來源名稱(例如 ccckmit)
6. 主導者用 marge 合併該版本並測試是否正常
  * git checkout -b 測試分支名稱(例如 ccckmit-develop1)     // 這個動作會從 master 分支出 ccckmit-develop1
  * git merge -b ccckmit/develop1
  * 執行 mocha 指令測試
7. 測試沒問題後，有兩個方法接受 pull request ，請擇一使用
  * a. 使用 git checkout master; git merge ccckmit/develop1; git push origin master 將合併後的版本推回
  * b. 回到主導者 github 專案，去接收 pull request 核可之。(這時貢獻者的版本就合併進來了)

## 練習 3 -- 雙人合作 (Master/Slave 的方式)

請重複上一個練習，但這次不再一人扮演兩角，而是採用兩個人合作的方式。

1. 兩個人一組，其中一個扮演 master，另一個扮演 slave。
2. Slave 先 fork master 的先前專案。
3. Slave clone 該 fork 版本，將自己的函數加入到專案當中
4. Slave 測試沒問題後，將專案 push 回自己 fork 的版本中。
5. Slave 發送 pull request 請求給 master ，請 master 收取新功能。
6. Master 接收並測試，確認沒問題後接受 pull request.


完整執行過程參考: [example/03-git/README.md](../../../example/03-git/README.md)

專案請參考： https://github.com/se107a/ccclodas；

完整執行過程參考: ../../../example/03-git/README.md
