/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let rowMap = new Map(), colMap = new Map(), colList = []

  for (let r = 0; r < grid.length; r++) {
    let key = JSON.stringify(grid[r])
    rowMap.set(key, (rowMap.get(key) ?? 0) + 1)
    for (let c = 0; c < grid[r].length; c++) {
      colList[c] = (colList[c] ?? []).concat(grid[r][c])
    }
  }

  for (let i = 0; i < colList.length; i++) {
    let key = JSON.stringify(colList[i])
    colMap.set(key, (colMap.get(key) ?? 0) + 1)
  }

  let pairCount = 0;
  for (let [key, value] of rowMap) {
    if (colMap.has(key)) {
      pairCount += colMap.get(key) * value
    }
  }

  return pairCount
};
