/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  let leftList = Array(ratings.length).fill(1),
    rightList = Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i++) {
    let prev = ratings[i - 1];
    if (prev === undefined) continue;
    if (prev < ratings[i]) {
      leftList[i] += leftList[i - 1];
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    let behind = ratings[i + 1];
    if (behind === undefined) continue;
    if (behind < ratings[i]) {
      rightList[i] += rightList[i + 1];
    }
  }

  let result = 0;
  for (let i = 0; i < ratings.length; i++) {
    result += Math.max(leftList[i], rightList[i]);
  }

  return result;
};
