/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let preF = nums[0], max = preF;

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] * preF, nums[i]);
    preF = nums[i] * nums[i - 1];
  }

  return max;
};
