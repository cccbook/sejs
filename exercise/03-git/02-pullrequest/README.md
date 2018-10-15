## 隨堂練習 -- 雙人合作初體驗 (pull request )

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



完整執行過程參考: ../../../example/03-git/README.md