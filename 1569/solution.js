const cache = new Map();
const factorial = (n) => {
  let sum = 1n;

  if (cache.has(n)) return cache.get(n);
  let tmpN = n;
  while (n > 0n) {
    sum *= n;
    n--;
  }

  cache.set(tmpN, sum);
  return sum;
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
