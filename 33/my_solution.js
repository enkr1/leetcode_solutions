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
    console.log(`l:${l}, r:${r}, m:${m}, target:${target}, nums[m]:${nums[m]}`)
    if (target == nums[m]) {
      console.log(`Returnig: ${m}`)
      return m;
    }

    console.log("??")
    // chunk checking
    if (nums[l] <= nums[m]) {
      // is the target within this chunk

      if (nums[l] > target) {
        l = m + 1;
      } else {
        // r = m;
        // r = (m == r) ? m - 1 : m;
        // l = m;
        console.log("hit here")
      }

      //if (nums[l] <= target && target <= nums[m]) {
      //	r = (m == r) ? m - 1 : r = m;
      //} else {
      //l = m + 1;
      //}
    } else {
      if (nums[l] <= target) {
        r = m - 1;
      } else {
        l = m + 1;
      }
      // if the target >= m, l = m
      // if the target <= m, r = m
      // if (target >= m) l = m;
      //if (target <= m) {
      // 	r = (m == r) ? m - 1 : r = m;
      //}
    }
    // if (nums[l] == nums[r]) return -1;
  }

  console.log(`Returnig: -1`)

  return -1;
};




search([4, 5, 6, 7, 0, 1, 2], 0)
// search([3, 1], 3)
// search([3, 1], 0)
search([1, 3, 5], 5)
