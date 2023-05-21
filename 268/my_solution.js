/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  // if (1 === nums.length) return !nums[0];
  console.log(nums);
  nums.sort((a, b) => (a - b));
  console.log(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      console.log("Missing number")
      console.log(i)

      return i;
    }
  }
  // console.log(nums);

  return;
}

// missingNumber([3, 0, 1]) // 2
// missingNumber([0, 1]) // 2
// missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) // 8
// missingNumber([1]) // 0
missingNumber([0, 1]) // 2
// missingNumber([1, 2]) // 0
missingNumber([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]);
