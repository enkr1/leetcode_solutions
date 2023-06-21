/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
const minCost = (nums, cost) => {
  let combined = nums.map((value, index) => ({ value, index }));
  combined.sort((a, b) => a.value - b.value);
  let sortedNums = combined.map(({ value }) => value);
  let sortedCost = combined.map(({ index }) => cost[index]);

  let min = 0, prefixCost = Array.from({ length: nums.length }, () => 0);
  prefixCost[0] = sortedCost[0];

  for (let i = 1; i < sortedNums.length; i++) {
    min += (sortedNums[i] - sortedNums[0]) * sortedCost[i];
  }

  for (let i = 1; i < sortedNums.length; i++) {
    prefixCost[i] = prefixCost[i - 1] + sortedCost[i];
  }

  let tmpMin = min;
  for (let i = 1; i < sortedNums.length; i++) {
    let gap = sortedNums[i] - sortedNums[i - 1];

    tmpMin += prefixCost[i - 1] * gap;
    tmpMin -= (prefixCost[nums.length - 1] - prefixCost[i - 1]) * gap;

    min = Math.min(min, tmpMin);
  }

  return min;
};
