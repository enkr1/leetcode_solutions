/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
const search = (nums, target) => {
  let l = 0, r = nums.length - 1;

  // odd 5,7 => [2,0,1]
  while (l <= r) {
    let m = Math.ceil((l + r) / 2);

    if (target == nums[m]) return m;

    // chunk checking
    if (nums[l] <= nums[m]) {

      if (nums[l] <= target) {
        r = m;
      } else {
        l = m + 1;
      }
    } else {
      if (nums[m] <= target) {
        l = m;
      } else {
        r = m - 1;
      }
    }

    // if (nums[l] == nums[r]) return -1;

  }

  // return -1;
};



search([4, 5, 6, 7, 0, 1, 2], 0)
// search([3, 1], 3)
// search([3, 1], 0)
search([1, 3, 5], 5)
