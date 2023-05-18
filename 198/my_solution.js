/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let tmpList = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(`------> i:${i}, nums[i]:${nums[i]}, nums[i-2]:${nums[i - 2]}`)
    if (undefined === nums[i - 2]) {
      console.log("-2 UNDEFINED")
      tmpList.push(nums[i]);
      continue;
    }

    console.log("- MAX")
    console.log(tmpList)
    console.log(tmpList.slice(0, i - 2 + 1)) // inclusive
    console.log(Math.max(...tmpList.slice(0, i - 2 + 1))) // inclusive
    // console.log(Math.max(tmpList[0], tmpList[i - 2]))
    tmpList.push(nums[i] + (Math.max(...tmpList.slice(0, i - 2 + 1))))
    console.log("tmpList")
    console.log(tmpList)
  }

  console.log("tmpList")
  console.log(Math.max(...tmpList))
  console.log(tmpList[tmpList.length - 1])
  return;
};
// rob([1, 2])
// rob([2, 1, 1, 2])
// rob([2, 3, 1, 2, 1, 1, 2])
// rob([2, 7, 9, 3, 1])
rob([1, 2, 3, 1])

// [2,1,1,2]
// Use Testcase
// Output
// 3
// Expected
// 4
