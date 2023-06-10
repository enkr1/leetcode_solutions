/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const expand = (row, col) => {
    for (let [r, c] of directions) {
      let factor = 1;
      while (
        ((row + (r * factor)) >= 0) &&
        ((col + (c * factor)) >= 0) &&
        ((row + (r * factor)) < matrix.length) &&
        ((col + (c * factor)) < matrix[0].length)
      ) {
        matrix[row + (r * factor)][col + (c * factor)] = 0;
        factor++;
      }
    }
  }

  coordinate = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        coordinate.push([row, col])
      }
    }
  }

  for (let [row, col] of coordinate) {
    expand(row, col)
  }
};
