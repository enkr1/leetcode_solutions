/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length
  let i = 0, visit = 0
  // console.log()
  console.log(nums)
  while (visit < len) {
    visit++;
    console.log(`~> i: ${i}, nums[i]: ${nums[i]}`)
    if (nums[i] === 0) {
      console.log();
      nums.splice(i, 1);
      console.log("b4");
      console.log(nums);
      nums[len - 1] = 0;
      console.log("afyer");
      console.log(nums);
    } else {
      i++;
    }
  }
  console.log(nums)
};

// moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0, 0, 1])
