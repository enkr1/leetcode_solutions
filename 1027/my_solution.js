/**
 * @param {number[]} nums
 * @return {number}
 */
const longestArithSeqLength = (nums) => {
  let dp = [], max = 0;

  for (let right = 0; right < nums.length; right++) {
    dp.push(new Map());
    for (let left = 0; left < right; left++) {
      let diff = nums[left] - nums[right];

      let newScore = (dp[left].get(diff) || 0) + 1;
      dp[right].set(diff, newScore);
      max = Math.max(max, newScore);
    }
  }

  console.log(dp)

  return max + 1;
};

let x = null;

// x = longestArithSeqLength([3, 6, 9, 12]) // 4
x = longestArithSeqLength([9, 4, 7, 2, 10]) // 3
// x = longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]) // 4
x = longestArithSeqLength([83, 20, 17, 43, 52, 78, 68, 45]) // 3

console.log("Result")
console.log(x)
