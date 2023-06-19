/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  let left = 0, right = matrix[0].length, top = 0, bot = matrix.length, spiralList = [];

  while (left < right && top < bot) {
    for (let i = left; i < right; i++) {
      spiralList.push(matrix[top][i]);
    }
    top += 1;

    for (let i = top; i < bot; i++) {
      spiralList.push(matrix[i][right - 1]);
    }
    right -= 1;

    if (left >= right || top >= bot) break;

    for (let i = right - 1; i >= left; i--) {
      spiralList.push(matrix[bot - 1][i]);
    }
    bot -= 1;

    for (let i = bot - 1; i >= top; i--) {
      spiralList.push(matrix[i][left]);
    }
    left += 1;
  }

  return spiralList;
};
