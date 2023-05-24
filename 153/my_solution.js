/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => { // O(log n)
  // if (nums[0] < nums[nums.length - 1]) {
  //   console.log("nums.length - 1")
  //   console.log(nums.length - 1)
  //   return nums.length - 1;
  // }
  // let p = Math.ceil(nums.length / 2) - 1, l = 0, r = nums.length - 1, min = nums[p];
  let l = 0, r = nums.length - 1, min = nums[0];
  // console.log(`l:${l}, r:${r}`)

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l])
      break;
    }

    let p = Math.ceil((r + l) / 2);

    console.log(`l:${l}, r:${r}, p:${p}, nums[p]:${nums[p]}`)
    // L <= mid = they are the same chunk
    min = Math.min(min, nums[p]);

    if (nums[l] <= nums[p]) {
      // Set L to the most right.
      l = p + 1;
    } else {
      // L > Mid, mid is in the R chunk
      r = p - 1;
    }
    // // Find the mid of the new chunk
    // p = Math.ceil(((r - l) / 2) + l) - 1;
  }

  console.log("min")
  console.log(min)

  // if l==0 && l < r , count = nums.length
  return min;
};

// findMin([3, 4, 5, 1, 2]) // 3
// findMin([4, 5, 6, 7, 0, 1, 2]) // 4
// findMin([11, 13, 15, 17]) // 4
// findMin([3, 4, 5, 6, 7, 0, 1, 2]) // 1
// findMin([1]) // 1
// findMin([3, 1, 2]) // 1

findMin([2, 1]) // 1
