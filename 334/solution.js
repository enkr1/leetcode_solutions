/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let minToRight = [], maxToLeft = [];
  for (let i = 0; i < nums.length; i++) {
    minToRight[i] = Math.min((minToRight[i - 1] ?? Infinity), nums[i])
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    maxToLeft[i] = Math.max((maxToLeft[i + 1] ?? -Infinity), nums[i])
  }

  for (let i = 0; i < nums.length; i++) {
    if (minToRight[i] < nums[i] && nums[i] < maxToLeft[i]) return true;
  }

  return false;
};
