/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  return reverseCharList(x.toString().split(''), 0, 1, null, false);
};

const reverseCharList = (charList, i, factor, result, isNeg) => {
  if (undefined === charList[i]) {
    if ((2 ** 31) <= result) return 0;
    return isNeg ? result * -1 : result;
  }

  if ("-" === charList[i]) {
    isNeg = true;
    i++;
    return reverseCharList(charList, i, factor, result, isNeg);
  }

  result += (parseInt(charList[i]) * factor);
  factor *= 10;
  i++;

  return reverseCharList(charList, i, factor, result, isNeg);
}
