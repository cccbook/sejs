## 練習 -- BDD

講解： 從 lodash 中再度挑選第三個函數，但是這次採用 BDD 的方式。

BDD : Behavior Driven Development  (行為驅動開發，測試函數的寫法比較像口語)

1. 挑選第三個 lodash 函數。
2. 選定後用 mocha + chai 寫測試函數，寫好後直接打 mocha，此時會報錯誤。

安裝 chai

```
$ cd 06-bdd

$ npm i chai --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ccclodash@0.0.1 No repository field.

+ chai@4.1.2
added 7 packages in 7.539s
```

開始測試 (因為還沒寫 concat 函數，所以會報錯)

```
csienqu-teacher:06-bdd csienqu$ npm i chai
+ chai@4.2.0
added 8 packages in 2.197s
csienqu-teacher:06-bdd csienqu$ mocha
/Users/csienqu/Desktop/ccc/se107a/example/01-test/06-bdd/test/concatTest.js:6
  var other = _.concat(array, 2, [3], [[4]]);
                ^

TypeError: _.concat is not a function
    at Suite.<anonymous> (/Users/csienqu/Desktop/ccc/se107a/example/01-test/06-bdd/test/concatTest.js:6:17)
    at Object.create (/usr/local/lib/node_modules/mocha/lib/interfaces/common.js:114:19)
    at context.describe.context.context (/usr/local/lib/node_modules/mocha/lib/interfaces/bdd.js:44:27)
    at Object.<anonymous> (/Users/csienqu/Desktop/ccc/se107a/example/01-test/06-bdd/test/concatTest.js:4:1)
    at Module._compile (module.js:649:30)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
    at Module.require (module.js:593:17)
    at require (internal/module.js:11:18)
    at /usr/local/lib/node_modules/mocha/lib/mocha.js:231:27
    at Array.forEach (<anonymous>)
    at Mocha.loadFiles (/usr/local/lib/node_modules/mocha/lib/mocha.js:228:14)
    at Mocha.run (/usr/local/lib/node_modules/mocha/lib/mocha.js:514:10)
    at Object.<anonymous> (/usr/local/lib/node_modules/mocha/bin/_mocha:480:18)
    at Module._compile (module.js:649:30)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
    at Function.Module.runMain (module.js:690:10)
    at startup (bootstrap_node.js:194:16)
    at bootstrap_node.js:666:3
```

