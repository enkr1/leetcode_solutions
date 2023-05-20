/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (1 === prices.length) return 0;
  // let max = findMax(0, 1, prices, 0);
  let l = 0, r = 0, max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (r === prices.length) return max;

    console.log("new max - prices[r] - prices[l]")
    console.log(prices[r] - prices[l])
    console.log("old max")
    console.log(max)
    // if (prices[l] < prices[r] && (prices[r] - prices[l] > max)) {
    if (prices[l] < prices[r]) {
      if ((prices[r] - prices[l] > max) || 0 === max) {
        max = prices[r] - prices[l];
      }
    } else {
      l = r;
    }

    console.log("max")
    console.log(max)

    r++;
  }

  console.log(">> max")
  console.log(max)

  return max;
};

// maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([1, 3])
// maxProfit([1])
maxProfit([4, 3, 9])
