/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0, l = 0, r = mat[0].length - 1;

  for (let row = 0; row < mat.length; row++) {
    if (l === r) {
      sum += mat[row][l];
    } else {
      sum += mat[row][l] + mat[row][r];
    }

    l++;
    r--;
  }

  return sum;
};

