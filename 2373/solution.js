/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const size = 3, coordinate = [], result = Array.from({ length: grid.length - 2 }, () => []);

  for (let r = 0; r < grid.length; r++) {
    if ((r + size) > grid.length) continue;

    for (let c = 0; c < grid[r].length; c++) {
      if ((c + size) > grid[0].length) continue;

      coordinate.push([r, c])
    }
  }

  while (0 !== coordinate.length) {
    let [r, c] = coordinate.shift(), row = r, tmpMax = 0;
    for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        tmpMax = Math.max(tmpMax, grid[i][j]);
      }
    }
    result[row].push(tmpMax);
  }

  return result;
};
