/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      if (undefined === nums[i - 1]) continue;

      return (nums[i + 1] > nums[i - 1]) || nums[i] < nums[i + 2] || i + 2 == nums.length;
    }
  }

  return true;
};
