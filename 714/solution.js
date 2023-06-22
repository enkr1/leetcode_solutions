/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
*/
const maxProfit = (prices, fee) => {
  let free = 0, hold = -prices[0];

  for (let i = 0; i < prices.length; i++) {
    tmp = hold;
    hold = Math.max(hold, free - prices[i])
    free = Math.max(free, tmp + prices[i] - fee)
  }

  return free;
};
