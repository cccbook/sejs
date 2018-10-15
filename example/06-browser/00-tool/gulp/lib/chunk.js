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
function chunk(list, n) {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}

module.exports = chunk
