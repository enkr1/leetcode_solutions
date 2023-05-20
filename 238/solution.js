/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  if (1 === nums.length) return [0];

  let factorList = [], defaultFactor = 1;

  for (let i = 0; i < nums.length; i++) {
    factorList[i] = defaultFactor;
    defaultFactor *= nums[i];
  }

  defaultFactor = 1;

  for (let j = 0; j < nums.length; j++) {
    factorList[nums.length - (j + 1)] *= defaultFactor;
    defaultFactor *= nums[nums.length - (j + 1)];
  }

  return factorList;
};
