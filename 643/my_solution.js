/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let l = 0, len = nums.length, max = -Infinity

  while ((l + k) <= len) {
    let tmpMax = 0;
    for (let i = l; i < (l + k); i++) {
      tmpMax += nums[i]
    }

    console.log("tmpMax")
    console.log(tmpMax)

    max = Math.max(max, tmpMax);

    l++;
  }

  console.log("max")
  console.log(max)

  return max / k;
};

let x =
  // findMaxAverage([1, 12, -5, -6, 50, 3], 4)
  findMaxAverage([-1], 1)


console.log("Result")
console.log(x)
