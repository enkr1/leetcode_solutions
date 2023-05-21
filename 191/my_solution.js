/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  console.log(n)
  console.log(n >> 1)
  console.log(n & 0001)
  let count = 0;

  while (n !== 0) {
    if (n & 0001) {
      count++;
    }
    n >>= 1;
  }

  console.log("count")
  console.log(count)
  return;
}

// hammingWeight(00000000000000000000000000001011)
hammingWeight(11111111111111111111111111111101)
