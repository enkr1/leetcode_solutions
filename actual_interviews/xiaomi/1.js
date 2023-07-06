const findTarget = (nums, target) => {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    let mid = Math.ceil((l + r) / 2);
    console.log(`l: ${l}, r: ${r}, mid: ${mid} - nums[mid]:${nums[mid]}`)
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }


  return -1;
}
let x =
  // findTarget([-1, 0, 3, 4, 6, 10, 13, 14], 13);
  // findTarget([-1, 0, 3, 4, 6, 10, 13, 14], 6);
  findTarget([-1, 0, 3, 4, 6, 10, 13, 14], 16);
// 8 = 4, 6 < 13
// [-1, 0, 3, 4, 6, 10, 13, 14] // 0 + 7
// [6, 10, 13, 14]

// [-1, 0, 3, 4, 6, 10, 13, 14, 18] // 18
// [6, 10, 13, 14, 18]
// [14, 18]

// [-1, 0, 3, 4, 6, 10, 13, 14]
// [-1, 0, 3, 4]
// [4]


console.log("Result")
console.log(x)
