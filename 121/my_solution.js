/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  console.log(prices.slice(0, 1))

  for (let i = 1; i < prices.length; i++) {
    let min = Math.min(...prices.slice(0, i))

    console.log(`i:${i}, prices[0]:${prices[0]}, prices[i]:${prices[i]}, min:${min}`)
    if (min < prices[i] && ((prices[i] - min) > max)) {
      console.log("smaller than yes")
      console.log(min)
      max = prices[i] - min;
    } else {
      console.log("no shit")
      console.log(min)

    }
    console.log("-<> max")
    console.log(max)
  }

  console.log("l max")
  console.log(max)

  return max;
};

maxProfit([7, 1, 5, 3, 6, 4])
