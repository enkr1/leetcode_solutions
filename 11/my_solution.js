/**
 * @param {number[]} height
 * @return {number}
*/
const maxArea = (nums) => {
  let l = 0, r = nums.length - 1, maxArea = 0;

  while (l < r) {
    console.log(`__________ l:${l}, r:${r}, min:${Math.min(nums[l], nums[r])}`)
    let area = ((r - l) * Math.min(nums[l], nums[r]));
    console.log("area")
    console.log(area)
    maxArea = Math.max(area, maxArea);
    console.log("maxArea")
    console.log(maxArea)

    if (nums[l] >= nums[r]) {
      r--;
    } else {
      l++;
    }
  }

  console.log("maxArea")
  console.log(maxArea)

  return maxArea;
}

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
maxArea([1, 1])
maxArea([1, 201, 3, 400, 30, 30, 1394])
