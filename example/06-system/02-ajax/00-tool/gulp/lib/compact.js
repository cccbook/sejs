/** @module _ */
/**
 * <p>Creates an array with all falsey values removed. </p>
 * <p>The values false, null, 0, "", undefined, and NaN are falsey.</p>
 * <p>Example : _.compact([0, 1, false, 2, '', 3]) // [ 1, 2, 3]</p>
 * @author: ccc
 * @param {Array} list The array to compact.
 */
function compact(list) {
  const clist = []
  for (let o of list) {
    if (o) clist.push(o)
  }
  return clist
}

module.exports = compact