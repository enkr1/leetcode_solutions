/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
*/
const maxProfit = (prices, fee) => {
  let l = 0, r = 0, cost = 0, prevSm = Infinity;

  while (r < prices.length) {
    if (prices[r + 1] === undefined || prices[r] > prices[r + 1]) {
      cost = Math.max(cost, ((prices[r] - prevSm - fee)), ((prices[r] - prices[l] - fee) + cost));
      l = r + 1;
    }

    r++;
    prevSm = Math.min(prices[l], prevSm);
  }

  return cost;
};
