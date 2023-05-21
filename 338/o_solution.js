/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  let dp = [0], bit = 1;
  for (let i = 1; i < n + 1; i++) {
    if (i === bit * 2) bit = i;
    dp[i] = (1 + dp[i - bit]);
  }

  console.log("dp")
  console.log(dp)

  return dp;
}

countBits(5)
