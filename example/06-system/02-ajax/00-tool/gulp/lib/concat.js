/** @module _ */
/**
 * <p>Creates a new array concatenating array with any additional arrays and/or values.</p>
 * <p>Example : 
 *   <li>_.concat([1], 2, [3], [[4]]); // => [1, 2, [3], [[4]]</li>
 * </p>
 * @author: ccc
 * @param {Array} list The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 */
function concat() {
  const clist = arguments[0].slice(0)
  for (let i=1; i<arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}

module.exports = concat