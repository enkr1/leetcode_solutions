
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  if (k < 1) return [];

  let map = new Map(), kList = Array.from({ length: nums.length + 1 }, () => []);

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }

  for (let [key, value] of map) {
    kList[value].push(key);
  }

  let result = [], tmpK = k;
  while (tmpK > 0) {
    let curr = kList.pop();
    if (0 < curr.length) {
      result.push(curr);
      tmpK -= curr.length;
    }
  }

  return result.flat().slice(0, k);
}
