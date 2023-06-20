/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const size = 3, coordinate = [], result = Array.from({ length: grid.length - 2 }, () => []);
  console.log(result)

  for (let r = 0; r < grid.length; r++) {
    if ((r + size) > grid.length) continue;

    for (let c = 0; c < grid[r].length; c++) {
      if ((c + size) > grid[0].length) continue;

      //       console.log(`c:${c}`)
      //
      //       for (let e = c; e < e + 3; e++) {
      //
      //       }
      coordinate.push([r, c])
    }
    // console.log(`r:${r}`)
    // result[r].push(tmpMax);
  }

  while (0 !== coordinate.length) {
    let [r, c] = coordinate.shift();
    console.log(r, c)
    let row = r;
    let tmpMax = 0;
    for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        console.log(`NIHAO: ${grid[i][j]}`)
        tmpMax = Math.max(tmpMax, grid[i][j]);
      }
      console.log(i)
      // result[i][j] = tmpMax;
      console.log(result)
    }
    result[row].push(tmpMax);
  }

  console.log(coordinate)
  console.log(result)
  return result;
};

let x = null;
// [[2,2,2],[2,2,2],[2,2,2]]
// x = largestLocal([
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 2, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1]
// ])

// [[9,9],[8,6]]
// x = largestLocal([
//   [9, 9, 8, 1],
//   [5, 6, 2, 6],
//   [8, 2, 6, 4],
//   [6, 2, 2, 2]
// ])
console.log(x)
console.log("Result")
