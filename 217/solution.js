/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (undefined === map[nums[i]]) {
      map[nums[i]] = i;
      continue;
    }

    return true;
  }

  return false;
}

// const containsDuplicate = (nums) => {
//   let l = 0, r = nums.length - 1;
//
//   while (r >= l) {
//     if (l === r) {
//       l++;
//       r = nums.length - 1;
//       continue;
//     }
//
//     if (nums[l] === nums[r]) {
//       return true
//     } else {
//       r--;
//     }
//   }
//
//   return false;
// }
