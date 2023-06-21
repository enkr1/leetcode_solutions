/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(`nums[i]:${nums[i]}, acc:${acc}`)
    let tmpAcc = acc + nums[i];
    nums[i] += acc;
    acc = tmpAcc;
    // console.log(nums[i])
  }
  return nums;
};

let x = null;
x = runningSum([1, 2, 3, 4]);
console.log("Result")
console.log(x)
