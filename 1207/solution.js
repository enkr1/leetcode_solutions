/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let occurenceMap = new Map()

  for (let i = 0; i < arr.length; i++) {
    occurenceMap.set(arr[i], (occurenceMap.get(arr[i]) ?? 0) + 1)
  }

  let uniqueOccurence = new Set();
  for (let [key, val] of occurenceMap) {
    if (uniqueOccurence.has(val)) return false;
    uniqueOccurence.add(val);
  }

  return true
};
