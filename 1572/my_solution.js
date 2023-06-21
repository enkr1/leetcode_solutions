/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0, l = 0, r = mat[0].length - 1;

  for (let row = 0; row < mat.length; row++) {
    // for (let c = 0; c < mat[r].length; c++) {
    console.log(`mat[row][l]:${mat[row][l]}, mat[row][r]:${mat[row][r]}`)
    if (l === r) { // intersect
      sum += mat[row][l];
    } else {
      sum += mat[row][l] + mat[row][r];
    }

    l++;
    r--;
    // }
  }

  return sum;
};

let x = null;
x = diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])


console.log("Result");
console.log(x);
