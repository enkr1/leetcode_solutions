/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i] && (prices[j] - prices[i]) > max) {
        max = prices[j] - prices[i];
      }
    }
  }

  return max;
};

maxProfit([7, 1, 5, 3, 6, 4])

/**

The given function calculates the maximum profit that can be obtained by buying and selling a stock, represented by an array of prices. Let's analyze its space and time complexity.

Space Complexity:
The function uses a constant amount of extra space, regardless of the input size. It only declares a single variable max to store the maximum profit. Therefore, the space complexity is O(1), indicating constant space usage.

Time Complexity:
The function uses nested loops to compare each pair of prices in the array. The outer loop iterates from 0 to prices.length - 1, and the inner loop iterates from i + 1 to prices.length - 1. As a result, the function compares each price with all the following prices in the array.

The number of comparisons made by the inner loop depends on the size of the input array. If the input array has 'n' elements, the outer loop runs 'n' times, and the inner loop runs approximately (n-1) + (n-2) + ... + 2 + 1 times. This sum can be simplified to n*(n-1)/2, which is proportional to n^2.

Therefore, the time complexity of the function is O(n^2), indicating a quadratic relationship between the input size and the time taken to execute the function.

*/
