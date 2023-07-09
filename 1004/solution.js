/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0, tmpMax = 0, l = 0, r = 0

  while (r < nums.length) {
    tmpMax++;

    if (nums[r] === 0) {
      k--;

      if (k < 0) {

        while (k < 0) {
          if (nums[l] === 0) {
            l++; // the next one
            k++;
            break;
          }

          l++;
        }

        tmpMax = r - l + 1 // the new tmpMax will be r - l + 1 that is the size of the window
      }
    }

    max = Math.max(max, tmpMax)
    r++;
  }

  return max;
};
