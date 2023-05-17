/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }

  return result;
};

