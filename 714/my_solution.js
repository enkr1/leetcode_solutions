/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
*/
const maxProfit = (prices, fee) => {
  let l = 0, r = 0,
    cost = 0, prevSm = Infinity;

  console.log(prices)
  while (r < prices.length) {
    console.log(`> l:${l}, r:${r}, prices[l]:${prices[l]}, prices[r]:${prices[r]}, prevSm:${prevSm}`)
    if (prices[r + 1] === undefined || prices[r] > prices[r + 1]) {
      console.log(`1. ${((prices[r] - prevSm - fee))}`)
      console.log(`2. ${((prices[r] - prices[l] - fee) + cost)}`)
      cost = Math.max(cost, ((prices[r] - prevSm - fee)), ((prices[r] - prices[l] - fee) + cost));
      console.log("cost")
      console.log(cost)
      l = r + 1;
    }

    r++;
    prevSm = Math.min(prices[l], prevSm);
  }

  return cost;
};

let x = 0;
// x = maxProfit([1, 3, 2, 8, 4, 9], 2) // 8
x = maxProfit([1, 3, 7, 5, 10, 3], 3) // 6
console.log("Result")
console.log(x)
