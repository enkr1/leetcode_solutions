/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let nums1Set = new Set(), nums2Set = new Set()

  for (let i = 0; i < nums1.length; i++) {
    nums1Set.add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    nums2Set.add(nums2[i])
  }

  // {1,2,3} , {1,2}

  let result = [[], []] // 0 nums1, 1 nums2
  for (let key of nums1Set) {
    if (!(nums2Set.has(key))) result[0].push(key)
  }

  for (let key of nums2Set) {
    if (!(nums1Set.has(key))) result[1].push(key)
  }

  return result;
};
