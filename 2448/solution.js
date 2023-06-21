/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
const minCost = (nums, cost) => {
  let minCost = Infinity, diffList = [];

  for (let i = 0; i < nums.length; i++) {
    let tmpList = [];
    for (let j = 0; j < nums.length; j++) {
      let curr = nums[i], comp = nums[j]
      if (i === j || curr === comp) continue;
      tmpList.push((curr > comp) ? curr - comp : comp - curr);
    }
    diffList.push(tmpList);
  }

  let idx = 0;
  while (0 < diffList.length) {
    let curr = diffList.shift(), tmpCostList = [...cost], tmpCostCount = 0;
    tmpCostList.splice(idx, 1);

    for (let i = 0; i < curr.length; i++) {
      tmpCostCount += curr[i] * tmpCostList[i];
    }

    minCost = Math.min(minCost, tmpCostCount);
    idx++;
  }

  return minCost;
};
