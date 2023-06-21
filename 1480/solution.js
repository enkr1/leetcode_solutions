/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    let tmpAcc = acc + nums[i];
    nums[i] += acc;
    acc = tmpAcc;
  }
  return nums;
};
