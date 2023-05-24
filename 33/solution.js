/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
const search = (nums, target) => {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let m = Math.ceil((l + r) / 2);

    if (target == nums[m]) return m;

    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m;
      }
    }
  }

  return -1;
};
