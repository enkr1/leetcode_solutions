/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let tmpList = [...nums];
    tmpList.splice(i, 1);

    let b = (0 === nums[i]) ? 0 : -nums[i];
    let c = nums[i] + b;

    result = findGroup(Math.min(...nums), Math.max(...nums), nums[i], b, c, tmpList, result);
  }

  return removeDuplicates(result);
};

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function removeDuplicates(list) {
  let uniqueSet = new Set();
  let uniqueList = [];

  for (let i = 0; i < list.length; i++) {
    let isUnique = true;
    let array = list[i];

    for (let j = 0; j < uniqueList.length; j++) {
      if (compareArrays(array, uniqueList[j])) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueSet.add(JSON.stringify(array));
      uniqueList.push(array);
    }
  }

  return uniqueList;
}

const findGroup = (min, max, a, b, c, list, result) => {
  if (b > max || c < min) return result;

  let tmpList = [...list], tmp = [a];

  if (tmpList.includes(b)) {
    tmp = [...tmp, b];
    tmpList.splice(tmpList.indexOf(b), 1)

    if (tmpList.includes(c)) {
      result.push([...tmp, c])
      tmpList.splice(tmpList.indexOf(c), 1)
    }
  }

  return findGroup(min, max, a, b + 1, c - 1, list, result);

}
