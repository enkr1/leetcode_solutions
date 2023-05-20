/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (1 === prices.length) return 0;

  let l = 0, r = 0, max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (r === prices.length) return max;

    if (prices[l] < prices[r]) {
      if ((prices[r] - prices[l] > max) || 0 === max) {
        max = prices[r] - prices[l];
      }
    } else {
      l = r;
    }

    r++;
  }

  return max;
};


/**

Space Complexity:
The function uses a constant amount of extra space, regardless of the input size. It only declares a few variables (l, r, and max) to store indices and the maximum profit. Therefore, the space complexity is O(1), indicating constant space usage.

Time Complexity:
The function uses a single loop to iterate over the prices array. Within each iteration, it performs a constant number of operations.

In the worst case scenario, where the prices array has 'n' elements, the loop will iterate 'n' times. Each iteration consists of a constant number of operations, such as comparisons and updates. Therefore, the time complexity of the function is O(n), indicating a linear relationship between the input size and the time taken to execute the function.

To summarize:

Space Complexity: O(1) - constant space usage.
Time Complexity: O(n) - linear time complexity.

Space complexity refers to the amount of memory or space required by an algorithm or function to perform its operations. It measures the additional space used by an algorithm beyond the input itself.

In the updated function, the space complexity is O(1), which means that the amount of memory used by the function remains constant, regardless of the input size.

Let's examine the variables used in the function:

prices: This is the input array of prices, which is not counted towards the space complexity because it is part of the function's input.
l, r, and max: These variables are used to keep track of indices and the maximum profit. They take up a constant amount of memory, regardless of the size of the input array. No matter how large the input array is, the number of variables used in the function remains the same.
Since the function uses only a fixed number of variables, the space complexity is considered constant, denoted as O(1). It means that the space used by the function does not grow with the input size.

*/
