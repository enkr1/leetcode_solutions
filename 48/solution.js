/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let maxWidth = matrix[0].length;
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < maxWidth; j++) {
      matrix[j].splice(maxWidth + (maxWidth - i), 0, (matrix[i][j]));
    }

    if (i === 0) {
      for (let k = 0; k < maxWidth; k++) {
        matrix[k].splice(0, maxWidth);
      }
    }
  }
};
