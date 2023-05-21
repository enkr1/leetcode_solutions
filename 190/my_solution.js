/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  let res = 0
  console.log(`check: ${(n)}`)
  console.log(`check: ${n >> 1}`)
  console.log(`check: ${0 & 1}`)

  // while (0 !== n) {
  for (let i = 0; i < 32; i++) {
    // console.log(`before: ${n}`)
    // str += (n & 1) ? "0" : "1";
    // n = n << 1;
    // console.log(`after: ${n}`)
    let lastBit = n & 1;
    let revBit = lastBit << (31 - i);
    res = res | revBit;
    n >>>= 1;
  }

  res >>>= 0;
  console.log("res")
  console.log(res)

  return;
}

// reverseBits(00000010100101000001111010011100) // 43261596 -> 964176192
reverseBits(11111111111111111111111111111101)
