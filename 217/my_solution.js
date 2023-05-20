/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  // nums = [1, 2, 3, 1]
  let map = {}, l = 0, r = nums.length - 1;
  // const map = new Map(nums.map((value, index) => [value, index]));
  // console.log(map)

  for (let i = 0; i < nums.length; i++) {
    if (undefined === map[nums[i]]) {
      map[nums[i]] = i;
      continue;
    }

    return true;
  }
  console.log("??")
  console.log(map)

  return false;
}

// containsDuplicate([1, 2, 3, 1])
containsDuplicate([1, 2, 3, 4])
// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
// containsDuplicate()

// 2 pointer solution
// const containsDuplicate = (nums) => {
//   // nums = [1, 2, 3, 1]
//   let isDuplicated = false, l = 0, r = nums.length - 1;
//   const map = new Map(nums.map((value, index) => [value, index]));
//   console.log(map)
//
//   // for
//   // think about other edge cases ...
//   // for (let i = 0; i < nums.length; i++) {
//   //   if (l == r) {
//   //
//   //   }
//
//   while (r >= l) {
//     if (l === r) {
//       l++;
//       r = nums.length - 1;
//       continue;
//     }
//
//     if (nums[l] === nums[r]) {
//       isDuplicated = true;
//       break;
//     } else {
//       r--;
//     }
//   }
//
//   return isDuplicated;
// }
