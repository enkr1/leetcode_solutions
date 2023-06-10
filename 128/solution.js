/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let set = new Set(), maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let val of set) {
    if (!set.has(val - 1)) {
      let expand = 0;
      while (set.has(val + expand)) {
        expand++;
      }
      maxCount = Math.max(expand, maxCount);
    }
  }

  return maxCount;
};
