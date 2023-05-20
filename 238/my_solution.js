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

  // [1, 4, 12, 24]
  for (let j = 0; j < nums.length; j++) {
    console.log(factorList[nums.length - (j + 1)]);
    factorList[nums.length - (j + 1)] *= defaultFactor;
    defaultFactor *= nums[nums.length - (j + 1)];
  }

  console.log(factorList)
  //   console.log(Array.from(map, ([key, value]) => Math.abs(value)))
  //
  //   return;
};



// productExceptSelf([1, 2, 3, 4])
// productExceptSelf([1, 2, 3, 4, 2])
// productExceptSelf([-1, 1, 0, -3, 3])
// productExceptSelf([0, 0])
productExceptSelf([0])
