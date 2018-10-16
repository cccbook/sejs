# Prettier -- 自動排版

## 隨堂練習 -- Prettier 自動排版

1. 請安裝 Prettier formatter for Visual Studio Code 然後按下 (CMD + Shift + P 或 Shift-Alt-F) 來排版。
2. 請使用 prettier chunk.js 來排版
3. 請使用 prettier *.js 來排版
4. 請使用 prettier --write chunk.js 來排版
5. 請為你的專案加上使用 prettier 自動排版
6. 請安裝 husky 並設定好 package.json，讓 husky 自動在你 commit 的時候進行排版。

參考: https://github.com/se107a/ccclodash 

## 簡介

* https://prettier.io/

和 github 一起用可搭配 husky 在 commit 前先自動排版。

## VsCode

去 MartketPlace 下載 Prettier formatter for Visual Studio Code

* https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

安裝完成後，可以用 Shift-Alt-F 來重新排版整個檔案或所選擇的區域。

(註：文件上寫的是 CMD + Shift + P ，但這要再額外選 Format-Document，用  Shift-Alt-F 就不用)

## 使用

轉換單檔 (不覆蓋)

```
$ prettier chunk.js
function chunk(array = [], n) {
  const clist = [];
  for (let i = 0; i <= array.length; i += n) {
    clist.push(array.slice(i, i + n));
  }
  return clist;
}

module.exports = chunk;
```

轉換全部 (不覆蓋)

```
$ prettier *.js
```

轉換單檔 (覆蓋)

```
$ prettier --write chunk.js
```

## 對於整個專案進行自動格式

ccclodash : https://github.com/se107a/ccclodash

```
PS D:\course\ccclodash> git add -A
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
PS D:\course\ccclodash> git commit -m "test husky prettier"
husky > pre-commit (node v10.11.0)
25lRunning tasks for lib/*.js [started]
prettier --write [started]
prettier --write [completed]
git add [started]
git add [completed]
Running tasks for lib/*.js [completed]
25h25h[master 46a67a5] test husky prettier
 3 files changed, 2069 insertions(+), 79 deletions(-)
```

## 參考

* [讓 Code review 再也不會出現 Coding Style 的問題](https://dwatow.github.io/2018/09-20-code-review-without-coding-style-worning/)
* [使用 prettier 自動調整 JavaScript 樣式](https://kaddopur.github.io/blog/2017/05/10/prettier/)

## 反例: 不可讀的代碼

* [國際C語言混亂程式碼大賽](https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85C%E8%AF%AD%E8%A8%80%E6%B7%B7%E4%B9%B1%E4%BB%A3%E7%A0%81%E5%A4%A7%E8%B5%9B)
  * http://blog.jobbole.com/93692/ (讚！)
  * http://www0.us.ioccc.org/years.html
  * http://nuccacafe.blogspot.com/2009/04/c-international-obfuscated-c-code.html


