const _ = (module.exports = {})

// _.chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
// _.chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
_.chunk = function (list, n) {
  const clist = []
  for (let i = 0; i < list.length; i += n) {
    clist.push(list.slice(i, i + n))
  }
  return clist
}

// _.compact([0, 1, false, 2, '', 3]), [ 1, 2, 3]
_.compact = function (list) {
  const clist = []
  for (let o of list) {
    if (o) clist.push(o)
  }
  return clist
}

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
// other equalTo([1, 2, [3], [[4]]])
_.concat = function () {
  const clist = arguments[0].slice(0)
  for (let i = 1; i < arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}
