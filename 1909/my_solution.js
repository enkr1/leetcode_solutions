/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    console.log(`-> nums[i]:${nums[i]}`)
    if (
      (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) ||
      (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) ||
      (nums[i] === nums[i - 1] && nums[i] < nums[i + 1]) ||
      (nums[i] > nums[i - 1] && nums[i] < nums[i + 1])
    ) {
    } else {
      return false;
    }
  }

  return true;
};


// let x = canBeIncreasing([1, 2, 10, 5, 7]); // true
let x = canBeIncreasing([1, 2, 5, 7]); // true
// let x = canBeIncreasing([2, 3, 1, 2]); // false
// let x = canBeIncreasing([1, 1, 1]); // false
// let x = canBeIncreasing([105, 924, 32, 968]); // true
// let x = canBeIncreasing([512, 867, 904, 997, 403]); // true
console.log(x)
