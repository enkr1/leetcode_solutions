/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  while (b != 0) {
    console.log(`--> a:${a}, b:${b}`)
    console.log(`a & b :${a & b}`)

    let tmp = (a & b) << 1; // bit shift
    console.log(`(a & b << 1) :${a & b << 1}`)

    a = a ^ b;
    console.log(`(a ^ b): ${a}`)

    b = tmp;
    console.log(`b:${b}`)
  }

  console.log("a")
  console.log(a)

  return a;
}


// getSum(1, 2)
// getSum(121, 239)
