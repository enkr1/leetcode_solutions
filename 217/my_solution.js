/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  // nums = [1, 2, 3, 1]
  let isDuplicated = false, l = 0, r = nums.length - 1;

  // for
  // think about other edge cases ...
  // for (let i = 0; i < nums.length; i++) {
  //   if (l == r) {
  //
  //   }

  while (r >= l) {
    if (l === r) {
      l++;
      r = nums.length - 1;
      continue;
    }

    if (nums[l] === nums[r]) {
      isDuplicated = true;
      break;
    } else {
      r--;
    }
  }

  return isDuplicated;
}

containsDuplicate([1, 2, 3, 1])
containsDuplicate([1, 2, 3, 4])
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
// containsDuplicate()
