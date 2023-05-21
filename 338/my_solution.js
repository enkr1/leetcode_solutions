/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  let result = [];
  //
  //   console.log(n & 1);
  //   n >>= 1;
  //
  //   console.log(n & 1);
  //   n >>= 1;
  //   console.log(n & 1);
  //   n >>= 1;
  //   console.log(n)

  for (let i = 0; i < n + 1; i++) {
    result.push(helper(i))
  }

  console.log("result")
  console.log(result)


  return result;
}

const helper = (n) => {
  let count = 0;

  while (n) {
    n &= n - 1;
    count++;
  }

  return count;
}

countBits(5)
