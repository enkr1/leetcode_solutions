/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  console.log(x);
  return (x < 0) ? reverseCharList((-x).toString().split(''), 0, 1, null) * -1 : reverseCharList(x.toString().split(''), 0, 1, null);
};

const reverseCharList = (charList, i, factor, result) => {
  if ((2 ** 31) <= result) return 0;
  if (undefined === charList[i]) {
    console.log("Returning: " + result)
    return result;
  }

  console.log("charList[i]")
  console.log(charList[i])
  // if ("-" === charList[i]) {
  //   isNeg = true;
  //   i++;
  //   return reverseCharList(charList, i, factor, result, isNeg);
  // }

  result += (parseInt(charList[i]) * factor);
  factor *= 10;
  console.log("result")
  console.log(result)
  console.log("factor")
  console.log(factor)

  i++;
  return reverseCharList(charList, i, factor, result);
}


// reverse(321)
// reverse(120)
reverse(-123)
// reverse(1534236469)
