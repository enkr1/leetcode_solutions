/**
 * @param {number[]} height
 * @return {number}
*/
const maxArea = (nums) => {
  // O(n)
  let l = 0, r = nums.length - 1, maxArea = 0;

  while (l < r) {
    let area = ((r - l) * Math.min(nums[l], nums[r]));
    maxArea = Math.max(area, maxArea);

    if (nums[l] >= nums[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxArea;
}

/*

The space complexity of the given code is O(1) because it uses a constant amount of additional space regardless of the size of the input nums array. The code only declares a few variables (l, r, maxArea, area), but their space usage remains constant.

The time complexity of the code is O(n), where n is the length of the input nums array. The code uses a two-pointer approach to find the maximum area between two lines in the array. It iterates over the array using the two pointers (l and r), and in each iteration, it computes the area and updates the maxArea variable. Since each element in the array is visited once, the time complexity is linear with respect to the size of the input array.

*/
