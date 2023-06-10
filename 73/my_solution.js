/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  console.log(`rowL:${matrix.length}, colL:${matrix[0].length}`)
  console.log(matrix)

  const expand = (row, col) => {
    // if (row < 0 || col < 0 || row === matrix.length || col === matrix[0].length) {
    //   console.log(`--> row:${row}, col:${col} - EXIT`)
    //   return;
    // }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    console.log(matrix)

    for (let [r, c] of directions) {
      let factor = 1;
      // while (undefined !== matrix[row + (r * factor)][col + (c * factor)]) {
      // let newR = row + (r * factor);
      // let newC = col + (c * factor);
      while (
        // (newR >= 0) &&
        // (newC >= 0) &&
        // (newR < matrix.length) &&
        // (newC < matrix[0].length)
        ((row + (r * factor)) >= 0) &&
        ((col + (c * factor)) >= 0) &&
        ((row + (r * factor)) < matrix.length) &&
        ((col + (c * factor)) < matrix[0].length)
      ) {
        // console.log(`newR:${newR}, newC:${newC}, matrix[r][c]:${matrix[newR][newC]}`)
        // matrix[newR][newC] = 0;
        matrix[row + (r * factor)][col + (c * factor)] = 0;
        factor++;

        // console.log(`> newR:${newR}, newC:${newC}`)
      }
    }

    // matrix[row][col] = 0;
    // dfs(row, col + 1);
    // dfs(row + 1, col);
    // dfs(row, col - 1);
    // dfs(row - 1, col);
  }

  coordinate = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        coordinate.push([row, col])
        console.log(`> row:${row}, col:${col}`)
      }
    }
  }

  console.log("coordinate")
  console.log(coordinate)

  for (let [row, col] of coordinate) {
    console.log(`-> row:${row}, col:${col}`)
    expand(row, col)
  }

  console.log("matrix")
  console.log(matrix)

};

// setZeroes([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]);

// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]


setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]);

// [
//   [0, 0, 0, 0],
//   [0, 4, 5, 0],
//   [0, 3, 1, 0]
// ]
