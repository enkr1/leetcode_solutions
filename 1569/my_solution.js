const factorial = (n, sum = 1) => {
  // console.log(`n:${n}, sum:${sum}`)
  if (0 === n) return sum;
  return factorial(n - 1, sum * n)
}

// combination
const getCombination = (n, r) => {
  // C(n + r - 1, r)
  // let n = total + r - 1;
  // let n1 =
  // C(n, r) = n! / (r! * (n - r)!)

  // // nPr - n!/(n - r)!
  // console.log(`${factorial(n)} / ${factorial(n - r)}`)
  // return factorial(n) / factorial(n - r);
  console.log(`${factorial(n)} / (${factorial(r)} * ${factorial(n - r)})`)
  return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const numOfWays = (nums) => {
  console.log(nums)
  //   let numsList = nums, totalPossible = 0;
  //   let root = numsList.shift(), leftList = [], rightList = [], leftCount = 0, rightCount = 0, total = 0;
  //   console.log("_________________ totalPossible:" + totalPossible + ", root:" + root)
  //   console.log("numsList");
  //   console.log(numsList);
  //
  //   while (numsList.length > 0) {
  //     total++;
  //     let curr = numsList.shift();
  //     if (curr < root) {
  //       leftList.push(curr);
  //     } else {
  //       rightList.push(curr);
  //     }
  //   }
  //
  //   leftCount = leftList.length, rightCount = rightList.length;
  //   console.log("total")
  //   console.log(total)
  //
  //   console.log(`n:${total}, r:${leftCount}`)
  //   let leftSum = 0, rightSum = 0;
  //   leftSum = getCombination(total, leftCount);
  //   console.log("> leftSum:" + leftSum)
  //   console.log(`n:${total}, r:${rightCount}`)
  //   rightSum = getCombination(total - leftCount, rightCount);
  //   console.log("> rightSum:" + rightSum)
  //
  //   // console.log((leftSum * rightSum) % ((10 ^ 9) + 7))
  //   totalPossible += leftSum * rightSum;
  //   console.log("totalPossible")
  //   console.log(totalPossible)

  let totalPossible = 1;
  const findPossibleWays = (numsList) => {

    let root = numsList.shift(), leftList = [], rightList = [], leftCount = 0, rightCount = 0, total = 0;
    console.log("_________________ totalPossible:" + totalPossible + ", root:" + root)
    console.log("numsList");
    console.log(numsList);

    if (numsList.length <= 2) return;

    while (numsList.length > 0) {
      total++;
      let curr = numsList.shift();
      if (curr < root) {
        leftList.push(curr);
      } else {
        rightList.push(curr);
      }
    }

    leftCount = leftList.length, rightCount = rightList.length;
    console.log("total")
    console.log(total)

    console.log(`${total}C${leftCount}`)// nCr
    let leftSum = 0, rightSum = 0;
    leftSum = getCombination(total, leftCount);
    console.log("> leftSum:" + leftSum)
    console.log(`${total}C${rightCount}`)// nCr
    rightSum = getCombination(total - leftCount, rightCount);
    console.log("> rightSum:" + rightSum)

    // console.log((leftSum * rightSum) % ((10 ^ 9) + 7))
    totalPossible *= leftSum * rightSum;
    console.log("totalPossible")
    console.log(totalPossible)
    findPossibleWays(leftList);
    findPossibleWays(rightList);
  }


  //     let tmp = [];
  //     const dp = (lIndex, rIndex) => {
  //       console.log(`l1:${lIndex}, l2:${rIndex}, tmp:${tmp}`)
  //       let leftIsDone = leftList.length === lIndex, rightIsDone = rightList.length === rIndex;
  //
  //       // console.log(`A - l1:${lIndex}, l2:${rIndex}`)
  //       if (!leftIsDone) {
  //         tmp.push(leftList[lIndex]);
  //         // tmp.push(rightList[rIndex]);
  //         dp(lIndex + 1, rIndex, tmp);
  //       }
  //       // console.log(`B - l1:${lIndex}, l2:${rIndex}`)
  //       if (!rightIsDone) {
  //         // tmp.push(leftList[lIndex]);
  //         tmp.push(rightList[rIndex]);
  //         dp(lIndex, rIndex + 1, tmp);
  //       }
  //
  //       if (leftIsDone && rightIsDone) {
  //         console.log("Done!")
  //         count++;
  //         tmp = []
  //         return;
  //       }
  //     }
  //
  //     dp(0, 0, []);
  //
  //   // console.log(`>>> count:${count}`)
  //
  //   return (count - 1);
  //   return (count - 1) % (10 ^ 9 + 7);
  findPossibleWays(nums)
  return totalPossible - 1;
  return totalPossible;
  return totalPossible % ((10 ^ 9) + 7);
  return findPossibleWays(nums, 0) % ((10 ^ 9) + 7);
};

// let x = numOfWays([1,2,3]); // 0
// let x = numOfWays([2,1,3]); // 1
// let x = numOfWays([3, 4, 5, 1, 2]); // 5
// let x = numOfWays([3, 1, 2, 5, 4, 6]); // 19
let x = numOfWays([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18]);
// 216212978
// 3216212999
// 11930671871
console.log("Result");
console.log(x);
