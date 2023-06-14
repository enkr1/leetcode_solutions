/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  x = x.toString();
  let processedNum = "#";

  for (let i = 0; i < x.length; i++) {
    processedNum += x[i] + "#";
  }

  for (let i = 0; i < processedNum.length; i++) {
    if (processedNum[i] !== processedNum[processedNum.length - 1 - i]) return false;
  }

  return true;
};
