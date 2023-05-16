/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1, r = nums.length - 1;

    while (r > l) {
      let n = (nums[i] + nums[l] + nums[r]);

      if (0 === n) {
        result.push([nums[i], nums[l], nums[r]]);

        l++;
        while (nums[l] == nums[l - 1] && r > l) {
          l++;
        }
      } else if (n > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return result;
};
