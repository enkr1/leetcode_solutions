/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  return (x < 0) ? reverseCharList((-x).toString().split(''), 0, 1, null) * -1 : reverseCharList(x.toString().split(''), 0, 1, null);
};

const reverseCharList = (charList, i, factor, result) => {
  if ((2 ** 31) <= result) return 0;
  if (undefined === charList[i]) return result;

  result += (parseInt(charList[i]) * factor);
  factor *= 10;
  i++;

  return reverseCharList(charList, i, factor, result);
}

