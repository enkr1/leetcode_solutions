/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let tmpMax = nums[0], max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (tmpMax < 0) tmpMax = 0;
    tmpMax += nums[i];
    if (tmpMax > max) max = tmpMax;
  }

  return max;
};

/*

2nd approach

Time Complexity:
The code uses a loop to iterate over the input array nums, starting from index 1. Inside the loop, there are some conditional statements and arithmetic operations that take constant time. Therefore, the time complexity of the code is determined by the loop itself.

The loop iterates through the array once, from index 1 to the end. Hence, the time complexity is O(n-1), which simplifies to O(n), where n is the length of the input array nums.

Space Complexity:
The code uses a constant amount of additional space to store variables tmpMax and max. Regardless of the size of the input array, the space complexity remains constant. Therefore, the space complexity of the code is O(1).

In summary, the time complexity of the code is O(n), and the space complexity is O(1).

*/

/*

1st approach

Time Complexity:
The code uses a loop to iterate over the input array nums. Inside the loop, there are some conditional statements and arithmetic operations. Since the operations inside the loop take constant time, the time complexity of the code is determined by the loop itself. Therefore, the time complexity of the code is O(n), where n is the length of the input array nums.

Space Complexity:
The code uses a constant amount of additional space to store variables tmpMax and max. Regardless of the size of the input array, the space complexity remains constant. Therefore, the space complexity of the code is O(1).

In summary, the time complexity of the code is O(n), and the space complexity is O(1).

*/
