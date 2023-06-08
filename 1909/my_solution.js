/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  let prev = -1, nbToRemove = 1;

  for (let i = 0; i < nums.length; i++) {
    console.log(`-> nums[i]:${nums[i]}, prev:${prev}, nbToRemove:${nbToRemove}`);

    if (nums[i] <= prev) {
      console.log(`--> i:${i} -> ${nums[i]} <= ${prev}`);
      if (nbToRemove === 1) {
        console.log(`--> removing -> ${(nums[i - 2] || 0)} > ${(nums[i - 1] || 0)}`);
        nbToRemove--;
        if ((nums[i - 2] || 0) > (nums[i - 1] || 0)) {
          console.log(`--> A`);
          prev = nums[i - 1];
          // prev = nums[i]
        } else {
          console.log(`--> B`);
          prev = nums[i]
          continue;
        }
      } else {
        console.log(`--> false`);
        return false;
      }
    } else {
      prev = nums[i];
    }
  }

  return true;
};


// let x = canBeIncreasing([10, 1, 2, 3]); // true
// let x = canBeIncreasing([20, 10, 1, 2, 3]); // false
// let x = canBeIncreasing([1, 2, 10, 5, 7]); // true
// let x = canBeIncreasing([1, 2, 5, 7]); // true
let x = canBeIncreasing([2, 3, 1, 2]); // false
// let x = canBeIncreasing([1, 1, 1]); // false
// let x = canBeIncreasing([105, 924, 32, 968]); // true
// let x = canBeIncreasing([512, 867, 904, 997, 403]); // true
console.log(x)
