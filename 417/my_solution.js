/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  console.log(heights);

  if (heights.length === 1 && heights[0].length === 1) return [[0, 0]];

  let resultMap = new Map();

  const dfs = (start, prev, row, col, visitMap, oceanMap) => {
    if (row < 0 || col < 0 || row === heights.length || col === heights[0].length) {
      console.log("EXIT!!!")
      return;
    }

    let curr = heights[row][col];
    if (prev < curr) {
      console.log(`>>> Cant proceed - prev:${prev} < curr:${curr}`)
      return;
    }

    console.log(`------------------> start:${start}, prev:${prev}, row:${row}, col:${col}, n:${heights[row][col]}`)

    // console.log("visitMap")
    // console.log(visitMap)
    console.log("oceanMap")
    console.log(oceanMap)

    let coordinate = JSON.stringify([row, col]);
    if (visitMap.has(coordinate)) {
      console.log(`-------> Visited!`)
      return;
    }

    if (
      (row === 0) ||
      (row === heights.length - 1) ||
      (col === 0) ||
      (col === heights[0].length - 1)
    ) {

      if (!oceanMap.get("p")) oceanMap.set("p", ((row === 0) || (col === 0)))
      if (!oceanMap.get("a")) oceanMap.set("a", ((row === heights.length - 1) || (col === heights[0].length - 1)))

      console.log(`>> Found`)
      console.log(oceanMap)
    }

    if (oceanMap.get("p") && oceanMap.get("a")) {
      console.log(">>>>>>>>>>>>>>> This is the ONE!!!")
      console.log(oceanMap);
      resultMap.set(start, true)
      console.log(resultMap);

      return
    }


    visitMap.set(coordinate, true)

    console.log("visitMap")
    console.log(visitMap)

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

  console.log("resultMap")
  console.log(resultMap)


  return Array.from(resultMap.entries(), entry => JSON.parse(entry[0])); // 2d array
};


// let x = pacificAtlantic([
//   [1, 2, 3],
//   [6, 5, 4],
//   [2, 7, 2],
// ]);

// let x = pacificAtlantic([
//   [1, 2, 2, 3, 5],
//   [3, 2, 3, 4, 4],
//   [2, 4, 5, 3, 1],
//   [6, 7, 1, 4, 5],
//   [5, 1, 1, 2, 4]
// ]);

let x = pacificAtlantic([1]);
console.log("Result");
console.log(x);
