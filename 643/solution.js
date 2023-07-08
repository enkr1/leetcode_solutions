/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let l = 0, len = nums.length, max = -Infinity

  while ((l + k) <= len) {
    let tmpMax = 0;
    for (let i = l; i < (l + k); i++) {
      tmpMax += nums[i]
    }

    max = Math.max(max, tmpMax);

    l++;  
  }

  return max / k;
};
