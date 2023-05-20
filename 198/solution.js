/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let tmpList = [];

  for (let i = 0; i < nums.length; i++) {
    if (undefined === nums[i - 2]) {
      tmpList.push(nums[i]);
      continue;
    }

    tmpList.push(nums[i] + (Math.max(...tmpList.slice(0, i - 2 + 1))))
  }

  return Math.max(...tmpList);
};

/**

The time and space complexities of the provided code are as follows:

Time Complexity: O(n)
The code uses a loop to iterate over the input array nums. For each element, it performs some operations such as finding the maximum value in a slice of tmpList and pushing values into tmpList. The time complexity of finding the maximum value in a slice is O(k), where k is the length of the slice. Since the size of the slice (i - 2 + 1) is limited to a constant value (3), the maximum value operation can be considered constant time.

Therefore, the dominant factor in the time complexity is the loop that iterates over nums. Hence, the time complexity of the code is O(n), where n is the length of the input array nums.

Space Complexity: O(n)
The code uses an additional array called tmpList to store intermediate results. The size of tmpList grows with the input size (nums). Therefore, the space complexity of the code is O(n), where n is the length of the input array nums.

In summary, the time complexity of the code is O(n), and the space complexity is also O(n).

*/
