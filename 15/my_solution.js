/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  console.log(nums)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      console.log("-------------------> !!!! same as prev")
      console.log(nums[i - 1])
      console.log(nums[i])
      continue;
    }

    let l = i + 1, r = nums.length - 1;
    while (r > l) {
      let n = (nums[i] + nums[l] + nums[r]);
      console.log("n")
      console.log(n)

      if (0 === n) {
        console.log(`Pushing ${i}`)
        result.push([nums[i], nums[l], nums[r]]);
        // r--;
        l++;
        while (nums[l] == nums[l - 1] && r > l) {
          l++;
        }
      } else if (n > 0) {
        r--;
      } else { // < 0
        l++;
      }
    }
  }

  console.log("result")
  console.log(result)

  return (result);
};

// threeSum([0, 0, 0])
// threeSum([-1, 0, 1, 2, -1, -4])
threeSum([-2, 0, 0, 2, 2])
