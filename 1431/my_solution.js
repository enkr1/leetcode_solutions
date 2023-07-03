/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies), result = Array.from({ length: candies.length }).fill(false);

  for (let i = 0; i < candies.length; i++) {
    if ((candies[i] + extraCandies) >= max) result[i] = true;
  }

  return result;
};
