/** @module _ */

/**
 * <p>Creates an array of elements split into groups the length of size.</p>
 * <p>If array can't be split evenly, the final chunk will be the remaining elements.</p>
 * <p>Example : 
 *   <li>_.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]</li>
 *   <li>_.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]</li>
 * </p>
 * @author: ccc
 * @param {Array} list The array to process.
 * @param {number} n The length of each chunk.
 */
export function chunk(list, n) {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}

/**
 * <p>Creates an array with all falsey values removed. </p>
 * <p>The values false, null, 0, "", undefined, and NaN are falsey.</p>
 * <p>Example : _.compact([0, 1, false, 2, '', 3]) // [ 1, 2, 3]</p>
 * @author: ccc
 * @param {Array} list The array to compact.
 */
export function compact(list) {
  const clist = []
  for (let o of list) {
    if (o) clist.push(o)
  }
  return clist
}

/**
 * <p>Creates a new array concatenating array with any additional arrays and/or values.</p>
 * <p>Example : 
 *   <li>_.concat([1], 2, [3], [[4]]); // => [1, 2, [3], [[4]]</li>
 * </p>
 * @author: ccc
 * @param {Array} list The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 */
export function concat() {
  const clist = arguments[0].slice(0)
  for (let i=1; i<arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}

export default {
  compact,
  concat,
  chunk
}