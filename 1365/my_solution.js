/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  console.log((nums))
  console.log(Math.max(...nums))
  let bucket = Array(Math.max(...nums) + 1).fill(0);
  console.log(bucket)

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


// let x = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
let x = smallerNumbersThanCurrent([5, 0, 10, 0, 10, 6]);
console.log(x)
