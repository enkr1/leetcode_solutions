/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = (nums) => {
  let nbToRemove = 1;

  let curr = -Infinity, tmpList = [];
  console.log(curr)
  // tmpList.push(curr);

  while (0 < nums.length) {
    let next = nums.shift();
    console.log(`-> curr:${curr}, next:${next}, nbToRemove:${nbToRemove}`);
    // [2, 3, 1, 2]
    // curr = 2, next = 3
    // curr = 3, next = 1
    // [2, 3, 1, 2]
    // [2, 3, 1, 2]
    if (curr >= next) {
      console.log(`curr >= next`)
      nbToRemove--;
      if (nbToRemove < 0) return false;
      // curr = next;
      // tmpList.pop();
    } else {
      console.log(`tmping`)
      // tmpList.push(next);
      curr = next;
    }

  }

  console.log(tmpList)

  return true;
};


let x = canBeIncreasing([10, 1, 2, 3]); // true
// let x = canBeIncreasing([2, 3, 1, 2]); // false
// let x = canBeIncreasing([20, 10, 1, 2, 3]); // false
// let x = canBeIncreasing([1, 2, 10, 5, 7]); // true
// let x = canBeIncreasing([1, 2, 5, 7]); // true
// let x = canBeIncreasing([1, 1, 1]); // false
// let x = canBeIncreasing([105, 924, 32, 968]); // true
// let x = canBeIncreasing([512, 867, 904, 997, 403]); // true
console.log(x)
