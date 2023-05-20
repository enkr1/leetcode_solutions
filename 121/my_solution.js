/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      console.log(prices[j])
      if (prices[j] > prices[i] && (prices[j] - prices[i]) > max) {
        console.log(`MAX - j:${prices[j]}, prices[i]:${prices[i]}`)
        console.log(prices[j] - prices[i])

        max = prices[j] - prices[i];
        console.log("max")
        console.log(max)
      }
    }
  }

  console.log("l max")
  console.log(max)

  return max;
};

maxProfit([7, 1, 5, 3, 6, 4])
