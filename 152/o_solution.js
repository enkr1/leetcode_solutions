/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let min = 1, max = 1, result = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    let tmpMax = max;
    max = Math.max(nums[i] * min, nums[i] * max, nums[i]);
    min = Math.min(nums[i] * min, nums[i] * tmpMax, nums[i])
    result = Math.max(result, max)
  }

  console.log(">")
  console.log(result)
  // console.log(max)
  // console.log(Math.max(result, max))

  return result;
};

maxProduct([2, 3, -2, 4])
// maxProduct([-2, 0, -1])
// maxProduct([0])
// maxProduct([0, 2])
// maxProduct([-2, 3, -4])
// maxProduct([2, 3, -2, 4])
// maxProduct([3, -1, 4]) // 4
// maxProduct([2, -5, -2, -4, 3]) // 24
// maxProduct([-2])
// maxProduct([-1, -2, -9, -6])
