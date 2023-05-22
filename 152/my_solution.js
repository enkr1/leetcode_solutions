/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let preF = nums[0], max = 0;

  // console.log((undefined || 1) * 1)
  for (let i = 1; i < nums.length; i++) {
    console.log(`nums[i]:${nums[i]}, preF:${preF}, max:${max}, nums[i] * preF:${nums[i] * preF} - max:${Math.max(max, nums[i] * preF, nums[i])}`)
    max = Math.max(max, nums[i] * preF, nums[i]);
    preF = nums[i] * nums[i - 1];
    console.log("preF")
    console.log(preF)
  }

  console.log(`max:${max}`)

  return max;
};

// maxProduct([2, 3, -2, 4])
// maxProduct([-2, 0, -1])
// maxProduct([0])
// maxProduct([0, 2])
// maxProduct([-2, 3, -4])
// maxProduct([2, 3, -2, 4])
// maxProduct([3, -1, 4]) // 4
// maxProduct([2, -5, -2, -4, 3]) // 24
// maxProduct([-2])
maxProduct([-1, -2, -9, -6])
