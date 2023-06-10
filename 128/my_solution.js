/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let maxCount = 0, sequenceMap = new Map();
  for (let val of set) {
    console.log(`val:${val}`)
    // NOTE: Only get the start of a sequence
    if (!set.has(val - 1)) {
      let nextVal = val + 0; // curr / next
      while (set.has(nextVal)) {
        sequenceMap.set(val, (sequenceMap.get(val) || 0) + 1);
        maxCount = Math.max(sequenceMap.get(val), maxCount);
        nextVal++;
      }
    }
  }

  console.log(set)
  console.log(sequenceMap)
  return maxCount;
};

let x = longestConsecutive([100, 4, 200, 1, 3, 2]);

console.log("Result")
console.log(x)
