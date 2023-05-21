/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
*/
// NOTE THIS IS THE CORRECT SOLUTION BUT I AM STILL QUITE LOST
const reverseBits = (n) => {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    let lastBit = n & 1;
    let revBit = lastBit << (31 - i);
    res = res | revBit;
    n >>>= 1;
  }

  res >>>= 0;
  console.log("res")
  console.log(res)

  return res;
}
