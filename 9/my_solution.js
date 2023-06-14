/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  x = x.toString();
  let length = x.length, processedNum = "#";

  for (let i = 0; i < x.length; i++) {
    processedNum += x[i] + "#";
  }

  console.log(length);
  // console.log(processedNum);
  // console.log(processedNum.length);
  // console.log(Math.ceil(processedNum.length / 2));

  // while ()
  for (let i = 0; i < processedNum.length; i++) {
    console.log(`${processedNum[i]} ===? ${processedNum[processedNum.length - 1 - i]}`)
    if (processedNum[i] !== processedNum[processedNum.length - 1 - i]) return false;
  }

  return true;
};

let x = isPalindrome(121);
console.log(x);
