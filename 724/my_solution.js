/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = [], acc = 0

  for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
    sum[i] = acc;
  }

  for (let i = 0; i < nums.length; i++) {
    console.log((sum[i - 1] ?? 0))
    console.log(acc[sum.length - 1] - sum[i])
    if ((sum[i - 1] ?? 0) === (sum[sum.length - 1] - sum[i])) return i;

  }

  return -1;
};

let x =
  pivotIndex([1, 7, 3, 6, 5, 6])

console.log("Res")
console.log(x)
