/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let tmpMax = 0, max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (0 === i) {
      tmpMax = nums[i];
      max = tmpMax;
      continue;
    }

    if (0 >= tmpMax && nums[i] > tmpMax) {
      if ((tmpMax + nums[i]) > max) {
        tmpMax = nums[i];
        max = tmpMax;
      } else {
        tmpMax = nums[i];
        if (tmpMax > max) max = tmpMax;
      }
    } else {
      tmpMax += nums[i];
      if (tmpMax > max) max = tmpMax;
    }
  }

  return max;
};
