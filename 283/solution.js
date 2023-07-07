/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length
  let i = 0, visit = 0

  while (visit < len) {
    visit++;
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums[len - 1] = 0;
    } else {
      i++;
    }
  }
};
