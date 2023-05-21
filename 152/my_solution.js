/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let h = nums[0], prevH = h;


  for (let i = 1; i < nums.length; i++) {
    prevH = (0 === prevH) ? nums[i] : prevH * nums[i]

    if (prevH > h) h = prevH;
    if (nums[i] > h) h = nums[i];
  }

  console.log(`h:${h}`)

  return h;
};

// maxProduct([2, 3, -2, 4])
// maxProduct([-2, 0, -1])
// maxProduct([0])
// maxProduct([0, 2])
// maxProduct([-2, 3, -4])
// maxProduct([2, 3, -2, 4])
// maxProduct([3, -1, 4]) // 4
maxProduct([2, -5, -2, -4, 3]) // 24
