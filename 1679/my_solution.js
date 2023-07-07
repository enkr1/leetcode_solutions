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
    complimentMap.set(compliment, (complimentMap.get(compliment) ?? 0) + 1)
  }

  // console.log(map)
  // console.log(map.get(1).count)

  for (let i = 0; i < nums.length; i++) {
    if (complimentMap.has(nums[i]) && complimentMap.get(nums[i]) > 0) {
      console.log(nums[i])
      console.log(complimentMap)
      complimentMap.set(nums[i], complimentMap.get(nums[i]) - 1);
      complimentMap.set(k - nums[i], complimentMap.get(k - nums[i]) - 1);
      operationCount++;
    }
  }
  console.log("final")
  console.log(complimentMap)

  return operationCount;
};

let x =
  // maxOperations([1, 2, 3, 4], 5)
  maxOperations([3, 1, 3, 4, 3], 6)

console.log("Result")
console.log(x)
