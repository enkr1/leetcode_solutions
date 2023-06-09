/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  let credit = 1, maxEdge = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      if (0 === credit) return false;
      let tmpMaxEdge = nums[i];
      credit--;

      if (tmpMaxEdge <= maxEdge) return false;

      // if my within is not incline.
      if (nums[i - 1] >= nums[i + 1]) {
        if (undefined === nums[i + 2]) {
          continue;
        }

        if (nums[i] >= nums[i + 2]) {
          return false;
        } else {
          i++; // Skip the next one.
        }
      }
    }
  }

  return true;
};
