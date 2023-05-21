/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  let str = "";
  console.log(`check: ${(n)}`)
  // n = (n) >> 1;
  // n = (n) >> 1;
  console.log(`check: ${n}`)
  //
  //   let reversed = 0;
  //   const totalBits = 32;
  //
  //   for (let i = 0; i < totalBits; i++) {
  //     reversed = (reversed << 1) | (n & 1);
  //     n = n >> 1;
  //   }
  //   console.log(`check: ${reversed}`)

  while (n != 0) {
    console.log(`before: ${n}`)
    str += (n & 1) ? "1" : "0";
    n = n >> 1;
    console.log(`after: ${n}`)
    // n = 0;
  }

  console.log("str")
  console.log(str)

  return;
}

reverseBits(00000010100101000001111010011100) // 43261596 -> 964176192
// reverseBits(11111111111111111111111111111101)
