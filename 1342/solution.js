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
