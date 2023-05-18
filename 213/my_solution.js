/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (1 === nums.length) return nums[0];

  let l2 = [...nums];
  nums.pop();
  l2.shift();
  let r1 = determineToRob(nums), r2 = determineToRob(l2);

  console.log("RES")
  console.log(r1 > r2 ? r1 : r2)

  return r1 > r2 ? r1 : r2;
  // console.log("tmpList")
  // console.log(Math.max(...tmpList))
  // console.log(tmpList[tmpList.length - 1])
  // console.log(Math.max(...[...tmpList, nums[nums.length - 1]]))

  // return Math.max(...[...tmpList, nums[nums.length - 1]]);
};

const determineToRob = (list) => {
  let tmpList = [];
  for (let i = 0; i < list.length; i++) {
    console.log(`------> i:${i}, list[i]:${list[i]}, list[i-2]:${list[i - 2]}`)
    if (undefined === list[i - 2]) {
      console.log("-2 UNDEFINED")
      tmpList.push(list[i]);
      continue;
    }

    console.log("- MAX")
    console.log(tmpList)
    console.log(tmpList.slice(0, i - 2 + 1)) // inclusive
    console.log(Math.max(...tmpList.slice(0, i - 2 + 1))) // inclusive
    // console.log(Math.max(tmpList[0], tmpList[i - 2]))
    tmpList.push(list[i] + (Math.max(...tmpList.slice(0, i - 2 + 1))))
    console.log("tmpList")
    console.log(tmpList)
  }

  console.log("-> MAX")
  console.log(Math.max(...[...tmpList, list[list.length - 1]]))

  return Math.max(...[...tmpList, list[list.length - 1]]);
}
// rob([1, 2])
// rob([2, 1, 1, 2])
// rob([2, 3, 1, 2, 1, 1, 2])
// rob([2, 7, 9, 3, 1])
// rob([1, 2, 3, 1])
// rob([1, 2, 3])
rob([0])

// [2,1,1,2]
// Use Testcase
// Output
// 3
// Expected
// 4

// [2,3,2] // 3
// [1,2,3,1] // 4
// [1,2,3] // 3
