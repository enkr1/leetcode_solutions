/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let sortedList = nums1.concat(nums2).sort((a, b) => { return a - b });
  return Number.isInteger(sortedList.length / 2) ? (sortedList[sortedList.length / 2] + sortedList[(sortedList.length / 2) - 1]) / 2 : sortedList[(sortedList.length / 2) - .5];
};
