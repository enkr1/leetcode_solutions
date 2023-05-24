/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let l = 0, r = nums.length - 1, min = nums[0];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l])
      break;
    }

    let p = Math.ceil((r + l) / 2);

    min = Math.min(min, nums[p]);

    if (nums[l] <= nums[p]) {
      l = p + 1;
    } else {
      r = p - 1;
    }
  }

  return min;
};
