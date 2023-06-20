/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let maxWidth = matrix[0].length;
  for (let i = matrix.length - 1; i >= 0; i--) {
    // console.log(i)
    // console.log(matrix[i])
    for (let j = 0; j < maxWidth; j++) {
      // console.log(matrix[j][maxWidth + (maxWidth - i)])
      // matrix[j][maxWidth + (maxWidth - i)].push(matrix[i][j]);
      matrix[j].splice(maxWidth + (maxWidth - i), 0, (matrix[i][j]));
      // matrix[j].splice(maxWidth + (maxWidth - i), 0,  (matrix[i][j]));
    }

    if (i === 0) {
      console.log("maxWidth")
      console.log(maxWidth)
      for (let k = 0; k < maxWidth; k++) {
        console.log(matrix)
        matrix[k].splice(0, maxWidth);
        // matrix[j].splice(maxWidth + (maxWidth - i), 0,  (matrix[i][j]));
      }
    }
  }

  console.log("Result")
  console.log(matrix)
};

// rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
