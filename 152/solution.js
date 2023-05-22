/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let min = nums[0], max = nums[0], result = max;

  for (let i = 1; i < nums.length; i++) {
    if (0 === nums[i]) {
      min = 1;
      max = 1;
      if (result < 0) result = 0;
      continue;
    }

    let tmpMax = max;
    max = Math.max(nums[i] * min, nums[i] * max, nums[i]);
    min = Math.min(nums[i] * min, nums[i] * tmpMax, nums[i])
    if (max > result) result = max;
  }

  return result;
};
