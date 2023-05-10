/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  //
  let list = nums1.concat(nums2);
  console.log(list)

  //   // console.log(nums1.concat(nums2).splice())
  //   for (let i = 0; i < list.length; i++) {
  //     // Find the name of the sort. - bubble sort
  //
  //
  //   }
  let sortedList = reconstructList(nums1.concat(nums2), []);
  console.log("sortedList")
  console.log(sortedList)
  console.log(sortedList.length)
  if (Number.isInteger(sortedList.length / 2)) {
    console.log(`1 -> ${(sortedList[sortedList.length / 2] + sortedList[(sortedList.length / 2) - 1]) / 2}`)
    return (sortedList[sortedList.length / 2] + sortedList[(sortedList.length / 2) - 1]) / 2;
  } else {
    console.log(`2 -> ${(sortedList.length / 2) + .5}`)
    console.log(`2 -> ${sortedList[(sortedList.length / 2) - .5]}`)
    return sortedList[(sortedList.length / 2) - .5];
  }

};

const reconstructList = (numsList, sortedList) => {
  if (0 === numsList.length) return sortedList;
  let first = numsList[0],
    biggerThanList = [];
  numsList.shift();

  console.log(`first: ${first}, numsList: ${numsList}, sortedList: ${sortedList}`)

  for (let i = 0; i < numsList.length; i++) {
    if (numsList[i] > first) {
      biggerThanList = [...biggerThanList, numsList[i]];
    } else {
      sortedList = [...sortedList, numsList[i]];
    }
  }

  console.log("biggerThanList")
  console.log(biggerThanList)
  console.log("sortedList")
  console.log(sortedList)


  // return reconstructList([...numsList, first], sortedList);
  return reconstructList(biggerThanList, [...sortedList, first]);
}

// findMedianSortedArrays([1, 2, 3, 4], [3, 6, 7])
// findMedianSortedArrays([1, 2, 3, 4], [3, 4, 7, 9])
// findMedianSortedArrays([9, 10, 13, 75], [1, 2, 3, 4, 7, 61])
// findMedianSortedArrays([2, 3], [1])
// findMedianSortedArrays([2, 3], [1])
