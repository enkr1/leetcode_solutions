/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let min = nums[0], max = nums[0], result = max;

  for (let i = 1; i < nums.length; i++) {
    console.log(`i:${i}, nums[i]:${nums[i]}, max:${max}, min:${min}`)

    if (0 === nums[i]) {
      min = 1;
      max = 1;
      if (result < 0) result = 0;
      continue;
    }

    let tmpMax = max;
    max = Math.max(nums[i] * min, nums[i] * max, nums[i]);
    min = Math.min(nums[i] * min, nums[i] * tmpMax, nums[i])
    console.log(`max:${max}, min:${min} -- result:${result}`)

  }

  console.log(`result:${result}`)

  return result;
};

// maxProduct([2, 3, -2, 4])
maxProduct([-2, 0, -1])
// maxProduct([0])
// maxProduct([0, 2])
// maxProduct([-2, 3, -4])
// maxProduct([2, 3, -2, 4])
// maxProduct([3, -1, 4]) // 4
// maxProduct([2, -5, -2, -4, 3]) // 24
// maxProduct([-2])
// maxProduct([-1, -2, -9, -6])
