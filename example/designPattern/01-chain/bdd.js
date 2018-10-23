const O = {}

const expect = function (obj) {
  O.obj = obj
  return O
}

O.to = O
O.be = O
O.a = O

O.include = function (child) { return O.obj.indexOf(child) >= 0 }
O.html = function () { return O.obj.indexOf('<html>') >= 0 }

console.log(expect('<html><body><body></html>').to.be.a.html())
console.log(expect('<html><body>hello!<body></html>').to.include('hello'))
console.log(expect('<html><body>hello!<body></html>').to.include('world'))
