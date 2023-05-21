/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  // TODO: OK TOTALLY DONT GET IT ...
  while (b != 0) {
    console.log(`a & b :${a & b}`)
    let tmp = (a & b) << 1;
    a = a ^ b;
    console.log(`a:${a}, b:${b}, tmp:${tmp}`)
    b = tmp;
  }
  console.log("a")
  console.log(a)

  return a;
}

// getSum(1, 2)
getSum(121, 239)
