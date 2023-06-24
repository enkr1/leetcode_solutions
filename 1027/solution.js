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

  return max + 1;
};
