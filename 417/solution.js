/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  if (heights.length === 1 && heights[0].length === 1) return [[0, 0]];

  let resultMap = new Map();

  const dfs = (start, prev, row, col, visitMap, oceanMap) => {
    if (row < 0 || col < 0 || row === heights.length || col === heights[0].length) return;

    let curr = heights[row][col];

    if (prev < curr) return;

    let coordinate = JSON.stringify([row, col]);

    if (visitMap.has(coordinate)) return;

    if (
      (row === 0) ||
      (row === heights.length - 1) ||
      (col === 0) ||
      (col === heights[0].length - 1)
    ) {
      if (!oceanMap.get("p")) oceanMap.set("p", ((row === 0) || (col === 0)))
      if (!oceanMap.get("a")) oceanMap.set("a", ((row === heights.length - 1) || (col === heights[0].length - 1)))
    }

    if (oceanMap.get("p") && oceanMap.get("a")) {
      resultMap.set(start, true)
      return;
    }

    visitMap.set(coordinate, true)

    dfs(start, curr, row, col + 1, visitMap, oceanMap);
    dfs(start, curr, row + 1, col, visitMap, oceanMap);
    dfs(start, curr, row, col - 1, visitMap, oceanMap);
    dfs(start, curr, row - 1, col, visitMap, oceanMap);
  }

  for (let row = 0; row < heights.length; row++) {
    for (let col = 0; col < heights[row].length; col++) {
      dfs(JSON.stringify([row, col]), Infinity, row, col, new Map(), new Map([["p", false], ["a", false]]), [])
    }
  }

  return Array.from(resultMap.entries(), entry => JSON.parse(entry[0]));
};
