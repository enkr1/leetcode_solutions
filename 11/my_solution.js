/**
 * @param {number[]} height
 * @return {number}
*/
const maxArea = (nums) => {
  // O(n)
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
/*

The space complexity of the given code is O(1) because it uses a constant amount of additional space regardless of the size of the input nums array. The code only declares a few variables (l, r, maxArea, area), but their space usage remains constant.

The time complexity of the code is O(n), where n is the length of the input nums array. The code uses a two-pointer approach to find the maximum area between two lines in the array. It iterates over the array using the two pointers (l and r), and in each iteration, it computes the area and updates the maxArea variable. Since each element in the array is visited once, the time complexity is linear with respect to the size of the input array.

*/
