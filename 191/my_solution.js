/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  console.log(n)
  // console.log((n))
  // console.log(n & 1)
  // console.log(n >> 1)
  // console.log(n)
  let count = 0;

  while (n) {
    // console.log("??")
    // console.log(n & 1)
    n &= (n - 1);
    count++;
    // n >>= 1;
    console.log("n")
    console.log(n)
  }

  console.log("count")
  console.log(count)
  return count;
}


hammingWeight(00000000000000000000000000000011)
// 00000000000000000000000000000011
// 11 & 10 = 10
// +1 = 1

// 00000000000000000000000000000010
// 10 & 01 = 0
// +1 = 2

// 00000000000000000000000000000000
// -


// hammingWeight(00000000000000000000000000001011)
// hammingWeight(00000000000000000000000000001011)
// hammingWeight(11111111111111111111111111111101)
// hammingWeight(11111111111111111111111111111101)
// hammingWeight(parseInt("11111111111111111111111111111101", 2));
