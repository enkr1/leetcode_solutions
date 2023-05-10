/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let sortedList = reconstructList(nums1.concat(nums2), []);
  return Number.isInteger(sortedList.length / 2) ?
    (sortedList[sortedList.length / 2] + sortedList[(sortedList.length / 2) - 1]) / 2
    : sortedList[(sortedList.length / 2) - .5];

}

const reconstructList = (numsList, sortedList) => {
  if (0 === numsList.length) return sortedList;

  let first = numsList[0],
    biggerThanList = [];

  numsList.shift();

  for (let i = 0; i < numsList.length; i++) {
    if (numsList[i] > first) {
      biggerThanList = [...biggerThanList, numsList[i]];
    } else {
      sortedList = [...sortedList, numsList[i]];
    }
  }

  return reconstructList(biggerThanList, [...sortedList, first]);
}
