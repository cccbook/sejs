(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ccclodash = module.exports = {
  chunk: require('./lib/chunk'),
  compact: require('./lib/compact'),
  concat: require('./lib/concat')
}

},{"./lib/chunk":2,"./lib/compact":3,"./lib/concat":4}],2:[function(require,module,exports){
module.exports = function chunk(list, n) {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}
},{}],3:[function(require,module,exports){
// _.compact([0, 1, false, 2, '', 3]), [ 1, 2, 3]
module.exports = function compact(list) {
  const clist = []
  for (let o of list) {
    if (o) clist.push(o)
  }
  return clist
}
},{}],4:[function(require,module,exports){
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
// other equalTo([1, 2, [3], [[4]]])
module.exports = function concat() {
  const clist = arguments[0].slice(0)
  for (let i=1; i<arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}

},{}]},{},[1]);
