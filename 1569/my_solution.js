const factorial = (n, sum = 1n) => {
  // console.log(`n:${n}, sum:${sum}`)
  if (0n === n) return sum;
  return factorial(n - 1n, sum * n)
}
// combination
const getCombination = (n, r) => {
  console.log(`n:${n}, r:${r}`)
  // C(n + r - 1, r)
  // let n = total + r - 1;
  // let n1 =
  // C(n, r) = n! / (r! * (n - r)!)

  // // nPr - n!/(n - r)!
  // console.log(`${factorial(n)} / ${factorial(n - r)}`)
  // return factorial(n) / factorial(n - r);
  n = BigInt(n), r = BigInt(r);
  let x = factorial(n) / (factorial(r) * factorial(n - r));
  console.log(`${factorial(n)} / (${factorial(r)} * ${factorial(n - r)}) -> ${x}`)
  console.log(x)
  return x;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const numOfWays = (nums) => {
  console.log(nums)

  // let totalPossible = 1;

  const findPossibleWays = (numsList) => {
    console.log("numsList");
    console.log(numsList);
    if (numsList.length <= 2) return 1n;

    let root = numsList.shift(), leftList = [], rightList = [], leftCount = 0, rightCount = 0, total = 0;
    console.log("_________________ root:" + root)

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
    // console.log("total")
    // console.log(total)
    console.log(`-> ${total}C${leftCount}`) // nCr

    // console.log((leftSum * rightSum) % ((10 ^ 9) + 7))
    // totalPossible *= (leftSum * rightSum) - 1;
    // let a = findPossibleWays(leftList), b = findPossibleWays(rightList), c = getCombination(total, leftCount);
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // // console.log(`${a} * ${b} * ${c} = ${a * b * c}`)
    // return a * b * c;
    return findPossibleWays(leftList) * findPossibleWays(rightList) * getCombination(total, leftCount);
  }
  // console.log("findPossibleWays(nums)")
  // console.log(findPossibleWays(nums))
  // return (findPossibleWays(nums) - 1);
  let x = findPossibleWays(nums) - 1n;
  console.log(`x:${x}`)
  return (x) % BigInt(Math.pow(10, 9) + 7);
  return totalPossible;
  return totalPossible;
  return totalPossible % ((10 ^ 9) + 7);
};

let x = null;
// let x = numOfWays([1,2,3]); // 0
// let x = numOfWays([2,1,3]); // 1
// let x = numOfWays([3, 4, 5, 1, 2]); // 5
// let x = numOfWays([3, 1, 2, 5, 4, 6]); // 19
// x = numOfWays([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18]);
// x = numOfWays([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18]); // 216212978
x = numOfWays([31, 23, 14, 24, 15, 12, 25, 28, 5, 35, 17, 6, 9, 11, 1, 27, 18, 20, 2, 3, 33, 10, 13, 4, 7, 36, 32, 29, 8, 30, 26, 19, 34, 22, 21, 16]); // 936157466
console.log("Result");
console.log(x);
