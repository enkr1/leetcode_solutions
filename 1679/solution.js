/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let l = 0, r = nums.length - 1, operationCount = 0

  nums = nums.sort((a, b) => a - b);
  while (l < r) {
    if ((nums[l] + nums[r]) === k) {
      operationCount++;
      r--;
      l++;
    } else if ((nums[l] + nums[r]) > k) {
      r--;
    } else {
      l++;
    }
  }

  return operationCount;
};
