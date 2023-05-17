/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let result = 0;
  console.log("result")
  console.log(result)

  for (let i = 0; i < nums.length; i += 2) {
    console.log("nums[i]")
    console.log(nums[i])
    result += nums[i];
  }
  console.log("result")
  console.log(result)
  return result;
};

rob([1, 2, 3, 1]);
