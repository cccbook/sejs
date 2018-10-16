# Flow - 為 javascript 添加型態檢查

* https://flow.org/
  * https://zhenyong.github.io/flowtype/ (讚、中文版 help)
  * [Day 04: Flow - JavaScript靜態類型檢查工具](https://ithelp.ithome.com.tw/articles/10185039) (讚、清楚明白！)

```
$ yarn add --dev babel-cli babel-preset-flow
$ yarn run babel src/ -d lib/
$ yarn init
$ yarn add --dev flow-bin
$ flow init
$ yarn run flow init
$ yarn run flow
PS D:\GoogleDrive\course\se107a\example\03-es6\02-flow> yarn run flow
yarn run v1.6.0
(node:5820) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
warning package.json: No license field
$ D:\GoogleDrive\course\se107a\example\03-es6\02-flow\node_modules\.bin\flow
Error --------------------------------------------------------------------------------------------- src/helloFlow.js:6:8

Cannot call `square` with `"2"` bound to `n` because string [1] is incompatible with number [2].

   src/helloFlow.js:6:8
   6| square("2"); // Error!
             ^^^ [1]

References:
   src/helloFlow.js:2:20
   2| function square(n: number): number {
                         ^^^^^^ [2]



Found 1 error
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
P
```