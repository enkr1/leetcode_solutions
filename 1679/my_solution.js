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
    // map.set(nums[i], { comp: k - nums[i], count: (map.get(nums[i]) ?? 0) + 1 })
    if (compliment > 0) complimentMap.set(compliment, (complimentMap.get(compliment) ?? 0) + 1)
  }

  console.log("k")
  console.log(k)
  console.log("complimentMap")
  console.log(complimentMap)
  console.log("____________________________________")
  // console.log(complimentMap.get(1).count)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) continue;

    let x = (nums[i] === (k - nums[i])) ? 1 : 0;
    console.log(`nums[i]: ${nums[i]}, x: ${x}`)

    console.log(complimentMap.has(nums[i]))
    console.log(complimentMap.get(nums[i]))
    console.log(complimentMap.get(k - nums[i]))
    if (complimentMap.has(nums[i]) && complimentMap.get(nums[i]) > x && (complimentMap.get(k - nums[i])) > x) {
      console.log("-> Has comp")
      console.log(complimentMap)
      complimentMap.set(nums[i], complimentMap.get(nums[i]) - 1);
      complimentMap.set(k - nums[i], complimentMap.get(k - nums[i]) - 1);
      operationCount++;
      console.log(complimentMap)
    }
  }

  // for (let [key, value] of complimentMap) {
  //   let x = (key === (k - key)) ? 1 : 0;
  //   console.log(`key: ${key}, value: ${value}, x: ${x}`)
  //   if (complimentMap.has(key) && complimentMap.get(key) > x) {
  //     operationCount++;
  //     complimentMap.set(key, complimentMap.get(key) - 1);
  //     complimentMap.set(k - key, complimentMap.get(k - key) - 1);
  //   }
  // }

  console.log("final")
  console.log(complimentMap)
  return operationCount;
};


let x =
  // maxOperations([1, 2, 3, 4], 5) // 2
// maxOperations([3, 1, 3, 4, 3], 6) // 1
// maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2) // 2
// maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4) // 2
maxOperations([63, 10, 28, 31, 90, 53, 75, 77, 72, 47, 45, 6, 49, 13, 77, 61, 68, 43, 33, 1, 14, 62, 55, 55, 38, 54, 8, 79, 89, 14, 50, 68, 85, 12, 42, 57, 4, 67, 75, 6, 71, 8, 61, 26, 11, 20, 22, 3, 70, 52, 82, 70, 67, 18, 66, 79, 84, 51, 78, 23, 19, 84, 46, 61, 63, 73, 80, 61, 15, 12, 58, 3, 21, 66, 42, 55, 7, 58, 85, 60, 23, 69, 41, 61, 35, 64, 58, 84, 61, 77, 45, 14, 1, 38, 4, 8, 42, 16, 79, 60, 80, 39, 67, 10, 24, 15, 6, 37, 68, 76, 30, 53, 63, 87, 11, 71, 86, 82, 77, 76, 37, 21, 85, 7, 75, 83, 80, 8, 19, 25, 11, 10, 41, 66, 70, 14, 23, 74, 33, 76, 35, 89, 68, 85, 83, 57, 6, 72, 34, 21, 57, 72, 79, 29, 65, 3, 67, 8, 24, 24, 18, 26, 27, 68, 78, 64, 57, 55, 68, 28, 9, 11, 38, 45, 61, 37, 81, 89, 38, 43, 45, 26, 84, 62, 22, 37, 51, 15, 30, 67, 75, 24, 66, 40, 81, 74, 48, 43, 78, 14, 33, 19, 73, 5, 1, 2, 53, 29, 49, 73, 23, 5], 59) // 42
// maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3) // 4

console.log("Result")
console.log(x)
