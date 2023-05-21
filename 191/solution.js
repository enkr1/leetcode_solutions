/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let count = 0;

  while (n !== 0) {
    if (n & 0001) {
      count++;
    }
    n >>= 1;
  }

  return count;
}

