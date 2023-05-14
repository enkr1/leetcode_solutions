/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let charList = x.toString().split(''), result = null;
  console.log(x);
  // console.log(x >>> 0);
  console.log((2 ** 31) - 1);

  result = reverseCharList(charList, 0, 1, null, false);

  console.log("result")
  console.log(result)
};

const reverseCharList = (charList, i, factor, result, isNeg) => {
  if (undefined === charList[i]) {
    if ((2 ** 31) <= result) return 0;

    return isNeg ? result * -1 : result;
  }
  console.log("charList[i]")
  console.log(charList[i])
  if ("-" === charList[i]) {
    isNeg = true;
    i++;
    return reverseCharList(charList, i, factor, result, isNeg);
  }

  result += (parseInt(charList[i]) * factor);
  factor *= 10;
  console.log("result")
  console.log(result)
  console.log("factor")
  console.log(factor)

  i++;
  return reverseCharList(charList, i, factor, result, isNeg);
}


// reverse(321)
// reverse(120)
// reverse(-123)
reverse(1534236469)
