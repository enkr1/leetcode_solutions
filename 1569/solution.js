const factorial = (n, sum = 1n) => {
  if (0n === n) return sum;
  return factorial(n - 1n, sum * n)
}

const getCombination = (n, r) => {
  n = BigInt(n), r = BigInt(r);
  return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const numOfWays = (nums) => {
  const findPossibleWays = (numsList) => {
    if (numsList.length <= 2) return 1n;

    let root = numsList.shift(), leftList = [], rightList = [], leftCount = 0, rightCount = 0, total = 0;

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
    return findPossibleWays(leftList) * findPossibleWays(rightList) * getCombination(total, leftCount);
  }

  return (findPossibleWays(nums) - 1n) % BigInt(Math.pow(10, 9) + 7);
};
