/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const DELETE_COUNT = 1
  let l = 0, r = 0, max = 0, tmpMax = 0, k = 1

  while (r < nums.length) {
    tmpMax++;

    if (nums[r] === 0) {
      k--;

      if (k < 0) {

        while (l < r) {
          if (nums[l] === 0) {
            l++;
            break;
          }

          l++;
        }

        k++;
        tmpMax = r - l + 1
      }
    }

    max = Math.max(max, tmpMax)
    r++;
  }

  return max - DELETE_COUNT;
};
