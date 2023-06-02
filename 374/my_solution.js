
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  // [1,1,1,2,2,3]
  if (k < 1) return [];

  // a map of the appear nb, a list of nums length to store the list based on appr nb
  let map = new Map(), kList = Array.from({ length: nums.length + 1}, () => []);
  // Array(nums.length).fill([]); - This will fill the array with empty arrays but it has the same references to each item (array).
  // you are actually pushing values into the same array instance across all indices.


  // process the map
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }

  // i will have a k list then to get from behind, (pop) if empty, nth, otherwise, K--; ⇒ 0
  // [[], …]
  console.log(map)
  console.log(kList)
  for (let [key, value] of map) {
    console.log(value)
    console.log(kList[value])
    kList[value].push(key);
    console.log("kList")
    console.log(kList)
  }

  // [[],[3],[2],[1], …]
  let result = [], tmpK = k;

  while (tmpK > 0) {
    let curr = kList.pop();
    if (0 < curr.length) {
      result.push(curr);
      tmpK -= curr.length;
    }
  }
  // [[1,2], [3]]


  console.log("result")
  console.log(k)
  console.log(result.flat())
  console.log(result.flat().slice(0, k))

  return result.flat().slice(0, k);
}
// topKFrequent([1, 1, 1, 2, 2, 2, 3], 2)
// topKFrequent([1], 1)
// topKFrequent([1,2], 2)
