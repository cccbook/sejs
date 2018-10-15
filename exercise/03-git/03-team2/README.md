## 隨堂練習 -- 雙人合作 (Master/Slave 的方式)

請重複上一個練習，但這次不再一人扮演兩角，而是採用兩個人合作的方式。

1. 兩個人一組，其中一個扮演 master，另一個扮演 slave。
2. Slave 先 fork master 的先前專案。
3. Slave clone 該 fork 版本，將自己的函數加入到專案當中
4. Slave 測試沒問題後，將專案 push 回自己 fork 的版本中。
5. Slave 發送 pull request 請求給 master ，請 master 收取新功能。
6. Master 接收並測試，確認沒問題後接受 pull request.


完整執行過程參考: [example/03-git/README.md](../../../example/03-git/README.md)

專案請參考： https://github.com/se107a/ccclodas；