/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let h = nums[0], prevH = h;

  for (let i = 1; i < nums.length; i++) {
    prevH = (0 === prevH) ? nums[i] : prevH * nums[i]
    if (prevH > h) h = prevH;
    if (nums[i] > h) h = nums[i];
  }

  return h;
};
