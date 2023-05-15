/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.every((num) => num === 0)) return [[0, 0, 0]];

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let tmpList = [...nums], tmpMap = {};
    tmpList.splice(i, 1);

    for (let j = 0; j < tmpList.length; j++) {
      tmpMap[tmpList[j]] = tmpList[j]
    }

    result = findGroup(Math.min(...nums), Math.max(...nums), nums[i], -nums[i], nums[i] + (-nums[i]), tmpMap, result);
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

const findGroup = (min, max, a, b, c, map, result) => {
  if (b > max || c < min) return result;
  let tmpMap = { ...map }, tmp = [a];

  if (tmpMap[b]) {
    tmp = [...tmp, tmpMap[b]];
    delete tmpMap[b];

    if (tmpMap[c]) {
      result.push([...tmp, tmpMap[c]])
      delete tmpMap[c];
    }
  }

  return findGroup(min, max, a, b + 1, c - 1, map, result);

}
