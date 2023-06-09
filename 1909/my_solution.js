/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  let credit = 1, maxEdge = 0;
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      if (0 === credit) return false;
      let tmpMaxEdge = nums[i];
      credit--;
      console.log(`-> nums[i]:${nums[i]}, nums[i + 1]:${nums[i + 1]}, credit:${credit}, maxEgde:${maxEdge}`);
      // new edge is lower means it is going down
      if (tmpMaxEdge <= maxEdge) return false;

      // if my within is not incline.
      if (nums[i - 1] >= nums[i + 1]) {
        if (undefined === nums[i + 2]) {
          console.log("No more to iterate")
          continue;
          // return false; // No more to iterate
        }
        if (nums[i] >= nums[i + 2]) {
          return false;
        } else {
          i++; // Skip the next one.
        }
      }
    }
  }

  return true;
};


// let x = canBeIncreasing([10, 1, 2, 3]); // true
// let x = canBeIncreasing([2, 3, 1, 2]); // false
// let x = canBeIncreasing([20, 10, 1, 2, 3]); // false
// let x = canBeIncreasing([1, 2, 10, 5, 7]); // true
// let x = canBeIncreasing([1, 2, 5, 7]); // true
let x = canBeIncreasing([1, 1, 1]); // false
// let x = canBeIncreasing([105, 924, 32, 968]); // true
// let x = canBeIncreasing([512, 867, 904, 997, 403]); // true
// let x = canBeIncreasing([541, 783, 433, 744]); // false
console.log(x)
