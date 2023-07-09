/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let occurenceMap = new Map()

  for (let i = 0; i < arr.length; i++) {
    // console.log((arr[i]))
    // console.log(occurenceSet.has(arr[i]))
    // console.log(occurenceSet)
    // if (occurenceMap.has(arr[i])) return true
    occurenceMap.set(arr[i], (occurenceMap.get(arr[i]) ?? 0) + 1)
  }

  let uniqueOccurence = new Set();
  for (let [key, val] of occurenceMap) {
    if (uniqueOccurence.has(val)) return false;
    uniqueOccurence.add(val);
  }

  return true
};


let x =
  uniqueOccurrences([3, 5, -2, -3, -6, -6])

console.log("Res")
console.log(x)
