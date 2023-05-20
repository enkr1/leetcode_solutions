/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let map = new Map(), defaultFactor = 1;

  console.log(map)

  for (let i = 0; i < nums.length; i++) {
    map = new Map(
      Array.from(map, ([key, value]) =>
        [key, value * nums[i]]
      )
    )

    map.set(nums[i], defaultFactor);
    defaultFactor *= nums[i];
  }

  console.log(map)
  console.log(Array.from(map, ([key, value]) => Math.abs(value)))

  return;
};

// productExceptSelf([1, 2, 3, 4])
productExceptSelf([-1, 1, 0, -3, 3])
