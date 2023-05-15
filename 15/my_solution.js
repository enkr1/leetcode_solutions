/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let tmpList = [...nums];
    // , tmpMap = {};
    tmpList.splice(i, 1);

    let b = (0 === nums[i]) ? 0 : -nums[i];
    let c = nums[i] + b;
    console.log(`i: ${i}, nums[i]: ${nums[i]}, b: ${b}, c: ${c}`);
    console.log(tmpList)

    // // Build a hash map except the current item in order to find the other 2 group mates.
    // for (let j = 0; j < tmpList.length; j++) {
    //   tmpMap[tmpList[j]] = tmpList[j]
    // }
    // console.log(tmpMap)

    result = findGroup(Math.min(...nums), Math.max(...nums), nums[i], b, c, tmpList, result);
  }

  // console.log("result")
  // console.log(result)
  console.log(removeDuplicates(result))
  // console.log([...new Set(result.map(JSON.stringify))].map(JSON.parse));

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

  console.log(`-> min: ${min}, max: ${max}, a: ${a}, b: ${b}, c: ${c}, result: ${result}`);
  // let tmpMap = { ...map }, tmp = [a];
  let tmpList = [...list], tmp = [a];

  if (tmpList.includes(b)) {
    console.log("--> tmpList[b] Exist!")
    console.log(b)
    tmp = [...tmp, b];

    tmpList.splice(tmpList.indexOf(b), 1)

    if (tmpList.includes(c)) {
      console.log("---> tmpList[c] Exist!")
      console.log(c)

      result.push([...tmp, c])
      tmpList.splice(tmpList.indexOf(c), 1)

      console.log("----> result");
      console.log(result);
    }
  }

  return findGroup(min, max, a, b + 1, c - 1, list, result);

}

threeSum([0, 0, 0])
// threeSum([-1,0,1,2,-1,-4])
