// My approach: sort the list and find by comparing with the i.
/**
 * @param {number[]} nums
 * @return {number}
 */
const myMissingNumber = (nums) => {
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

// Approach 1: XOR
/**

  In this approach, we use the fact that XORing a number with itself results in 0. By XORing all the indices and the elements of the input array, and finally XORing the result with the length of the array, the missing number will remain.

  This updated code has a time complexity of O(n), as it iterates through the input array once. The space complexity remains O(1) since it does not use any additional data structures that grow with the input size.

 * @param {number[]} nums
 * @return {number}
*/
const missingNumber1 = (nums) => {
  let missing = nums.length;

  for (let i = 0; i < nums.length; i++) {
    console.log(`i:${i} ^ nums[i]:${nums[i]} ^ missing:${missing}`)
    missing ^= i ^ nums[i];
    console.log(`missing:${missing}`)
  }
  console.log(`FINAL missing:${missing}`)

  return missing;
}

// Approach 2: Sum(length) - Sum(nums) = missing number
/**
 * @param {number[]} nums
 * @return {number}
*/
const missingNumber = (nums) => {
  return Array.from({ length: nums.length }, (_, index) => index + 1).reduce((a, b) => a + b) - nums.reduce((a, b) => a + b);
}


// missingNumber([3, 0, 1]) // 2
// missingNumber([0, 1]) // 2
// missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) // 8
// missingNumber([1]) // 0
// missingNumber([0, 1]) // 2
// missingNumber([1, 2]) // 0
missingNumber([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]); // 18
