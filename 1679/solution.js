/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let complimentMap = new Map(), operationCount = 0

  for (let i = 0; i < nums.length; i++) {
    let compliment = k - nums[i]
    complimentMap.set(compliment, (complimentMap.get(compliment) ?? 0) + 1)
  }

  for (let i = 0; i < nums.length; i++) {
    if (complimentMap.has(nums[i]) && complimentMap.get(nums[i]) > 0) {
      complimentMap.set(nums[i], complimentMap.get(nums[i]) - 1);
      complimentMap.set(k - nums[i], complimentMap.get(k - nums[i]) - 1);
      operationCount++;
    }
  }

  return operationCount;

};
