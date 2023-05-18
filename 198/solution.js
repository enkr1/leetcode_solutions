/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let tmpList = [];

  for (let i = 0; i < nums.length; i++) {
    if (undefined === nums[i - 2]) {
      tmpList.push(nums[i]);
      continue;
    }

    tmpList.push(nums[i] + (Math.max(...tmpList.slice(0, i - 2 + 1))))
  }

  return Math.max(...tmpList);
};
