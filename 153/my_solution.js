/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  // if (nums[0] < nums[nums.length - 1]) {
  //   console.log("nums.length - 1")
  //   console.log(nums.length - 1)
  //   return nums.length - 1;
  // }

  let l = 0, r = nums.length - 1, count = 0, min = 0;
  // console.log(`l:${l}, r:${r}`)

  while (l < r) {
    console.log(`l:${l}, r:${r}`)
    if (nums[l] < nums[r]) {
      break;
    }

    count++;

    if (nums[l] > nums[r]) {
      l++;
      r--;
    }
  }

  count++;

  console.log("count")
  console.log(count)

  // if l==0 && l < r , count = nums.length
  return count;
};

// findMin([3, 4, 5, 1, 2]) // 3
// findMin([4, 5, 6, 7, 0, 1, 2]) // 4
findMin([11, 13, 15, 17]) // 4
// findMin([3, 4, 5, 6, 7, 0, 1, 2]) // 1
