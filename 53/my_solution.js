/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let tmpMax = nums[0], max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (tmpMax < 0) tmpMax = 0;
    tmpMax += nums[i];
    if (tmpMax > max) max = tmpMax;
  }

  console.log("max")
  console.log(max)

  return max;
};

const maxSubArrayOld = (nums) => {
  let tmpMax = nums[0], max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // if c > m, restart m
    if (0 >= tmpMax && nums[i] > tmpMax) {
      // console.log(nums[i] + " is nbiggger!")
      // console.log(tmpMax)
      // console.log(tmpMax + nums[i])

      // when pre max and curr value sum is more than max, we restart max
      if ((tmpMax + nums[i]) > max) { // c + m > max - restart the max
        tmpMax = nums[i];
        max = tmpMax;
      } else { // but in the case where pre = -2 and current = - 1 and they are smaller than max, we reset the max if curr (tmpMax) is bigger than max, in this case -1 > -2, so replace.
        console.log("WTF?")
        tmpMax = nums[i];
        if (tmpMax > max) max = tmpMax;

      }
    } else {
      tmpMax += nums[i];
      if (tmpMax > max) max = tmpMax;
    }
  }

  console.log("max")
  console.log(max)

  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// maxSubArray([5, 4, -1, 7, 8])
// maxSubArray([2, 5, 9, 2, 6, 8, -10])
// maxSubArray([-2, -1])
// maxSubArray([1, -1])
// maxSubArray([-11, -1])
// maxSubArray([3, -3, 2, -3]) // 3
