/**
 * @param {number[]} height
 * @return {number}
*/
const maxArea = (nums) => {
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
