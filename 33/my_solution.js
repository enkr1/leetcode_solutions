/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
const search = (nums, target) => {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    let m = Math.ceil((l + r) / 2);

    if (target == nums[m]) {
      console.log("Returning " + m)
      return m;
    }

    // chunk checking
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

    // if (nums[l] == nums[r]) return -1;

  }

  console.log("NOt found")
  return -1;
};



search([4, 5, 6, 7, 0, 1, 2], 0)
// search([3, 1], 3)
// search([3, 1], 0)
search([1, 3, 5], 5)
