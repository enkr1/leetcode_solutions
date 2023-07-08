// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxOperations = function (nums, k) {
//   let l = 0, r = nums.length - 1, operationCount = 0
//
//   nums = nums.sort((a, b) => a - b);
//   while (l < r) {
//     if ((nums[l] + nums[r]) === k) {
//       operationCount++;
//       r--;
//       l++;
//     } else if ((nums[l] + nums[r]) > k) {
//       r--;
//     } else {
//       l++;
//     }
//   }
//
//   return operationCount;
// };
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxOperations = function (nums, k) {
//   let l = 0, r = nums.length - 1, operationCount = 0, visited = new Set();
//
//   console.log(nums)
//   console.log(nums.sort((a, b) => a - b))
//   // [1, 1, 1, 2, 2, 2, 3, 4]
//   nums = nums.sort((a, b) => a - b);
//   while (l < r) {
//     console.log(`l: ${l}, r: ${r}`)
//     console.log(`nums[l]: ${nums[l]}, nums[r]: ${nums[r]}`)
//
//     if ((nums[l] + nums[r]) > k) {
//       r--;
//       console.log("~> this is > k")
//       continue;
//     }
//
//     if ((nums[l] + nums[r]) === k) {
//       operationCount++;
//       r--;
//       l++;
//     } else {
//       l++;
//     }
//   }
//
//   return operationCount;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let complimentMap = new Map(), operationCount = 0


  for (let i = 0; i < nums.length; i++) {
    let compliment = k - nums[i]
    if (compliment > 0) complimentMap.set(compliment, (complimentMap.get(compliment) ?? 0) + 1)
  }


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) continue;

    let x = (nums[i] === (k - nums[i])) ? 1 : 0;

    if (complimentMap.has(nums[i]) && complimentMap.get(nums[i]) > x && complimentMap.get(k - nums[i]) > x) {
      complimentMap.set(nums[i], complimentMap.get(nums[i]) - 1);
      complimentMap.set(k - nums[i], complimentMap.get(k - nums[i]) - 1);
      operationCount++;
    }
  }

  return operationCount;
};
