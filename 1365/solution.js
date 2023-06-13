/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  let bucket = Array(Math.max(...nums) + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    bucket[nums[i]]++;
  }

  for (let i = 1; i < bucket.length; i++) {
    bucket[i] += bucket[i - 1];
  }

  let countList = [];
  for (let i = 0; i < nums.length; i++) {
    countList[i] = bucket[nums[i] - 1] || 0;
  }

  return countList;
};

