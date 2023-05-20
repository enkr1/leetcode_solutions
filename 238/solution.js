/**
 * @param {number[]} nums
 * @return {number[]}
*/
const productExceptSelf = (nums) => {
  let map = new Map(), defaultFactor = 1;

  for (let i = 0; i < nums.length; i++) {
    map = new Map(
      Array.from(map, ([key, value]) =>
        [key, value * nums[i]]
      )
    )

    map.set(nums[i], defaultFactor);
    defaultFactor *= nums[i];
  }

  return Array.from(map, ([key, value]) => Math.abs(value));
};
