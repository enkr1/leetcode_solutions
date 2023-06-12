/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  let total = 0, prevSum = 1;
  for (let i = 0; i < ratings.length; i++) {
    let curr = ratings[i],
      prev = (undefined === ratings[i - 1]) ? curr : ratings[i - 1],
      next = (undefined === ratings[i + 1]) ? curr : ratings[i + 1];
    let sum = ((curr > prev) || (curr > next)) ? prevSum + 1 : 1;
    total += sum;
    prevSum = sum;
  }
  return total;
};

