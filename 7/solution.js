/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  return reverseCharList(x.toString().split(''), 0, 1, null);
};

const reverseCharList = (charList, i, factor, result) => {
  if (undefined === charList[i]) return result;

  result += (parseInt(charList[i]) * factor);
  factor *= 10;
  i++;

  return reverseCharList(charList, i, factor, result);
}

