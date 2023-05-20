/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let rob1 = 0, rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let tmp = Math.max(rob1 + nums[i], rob2);
    rob1 = rob2;
    rob2 = tmp;
  }

  console.log("rob2")
  console.log(rob2)

  return rob2;
};

// rob([1, 2])
// rob([2, 1, 1, 2])
// rob([2, 3, 1, 2, 1, 1, 2])
rob([2, 7, 9, 3, 1])
// rob([1, 2, 3, 1])
// rob([1, 2, 3])
// rob([0])
