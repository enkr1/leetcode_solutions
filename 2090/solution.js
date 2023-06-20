/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = (nums, k) => {
  if (k === 0) return nums;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < k || i + k >= nums.length) {
      result.push(-1);
      continue;
    }

    let tmpSum = 0;
    console.log(`> ${i} `)
    for (let j = i - k; j < i + k + 1; j++) {
      tmpSum += nums[j];
    }

    result.push(Math.floor(tmpSum / ((k * 2) + 1)));
  }

  return result;
};
