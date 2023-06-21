/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
  let count = 0;

  while (num > 0) {
    count++;
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num--;
    }
  }
  return count;
};

let x = null;
x = numberOfSteps(14);// 6
x = numberOfSteps(8);// 6

console.log("Result")
console.log(x)
