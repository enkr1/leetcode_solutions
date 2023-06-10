// Runtime 117 ms Beats 81.9% Memory 51.5 MB Beats 48.34%
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  if (heights.length === 0 || heights[0].length === 0) {
    return [];
  }

  const m = heights.length;
  const n = heights[0].length;

  const pacificQueue = []; // Queue for cells that can flow to the Pacific Ocean
  const atlanticQueue = []; // Queue for cells that can flow to the Atlantic Ocean

  // Initialize visited arrays for both oceans
  const pacificVisited = Array.from({ length: m }, () => new Array(n).fill(false));
  const atlanticVisited = Array.from({ length: m }, () => new Array(n).fill(false));

  // console.log("pacificVisited")
  // console.log(pacificVisited)
  // console.log("atlanticVisited")
  // console.log(atlanticVisited)

  // Add border cells to the respective queues and mark them as visited
  for (let i = 0; i < m; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, n - 1]);
    pacificVisited[i][0] = true;
    atlanticVisited[i][n - 1] = true;
  }

  for (let j = 0; j < n; j++) {
    pacificQueue.push([0, j]);
    atlanticQueue.push([m - 1, j]);
    pacificVisited[0][j] = true;
    atlanticVisited[m - 1][j] = true;
  }

  // NOTE: Form grids that wraps the sides that touch the ocean
  console.log("pacificVisited")
  console.log(pacificVisited)
  console.log("pacificQueue")
  console.log(pacificQueue)

  console.log("atlanticVisited")
  console.log(atlanticVisited)
  console.log("atlanticQueue")
  console.log(atlanticQueue)

  // Perform BFS from the Pacific Ocean
  bfs(pacificQueue, pacificVisited, heights);

  // Perform BFS from the Atlantic Ocean
  bfs(atlanticQueue, atlanticVisited, heights);

  console.log("-----> After BFS")
  console.log("pacificVisited")
  console.log(pacificVisited)
  console.log("pacificQueue")
  console.log(pacificQueue)

  console.log("atlanticVisited")
  console.log(atlanticVisited)
  console.log("atlanticQueue")
  console.log(atlanticQueue)

  // Find cells that can flow to both oceans
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificVisited[i][j] && atlanticVisited[i][j]) result.push([i, j]);
    }
  }

  return result;
};

const bfs = (queue, visited, heights) => {
  const m = heights.length;
  const n = heights[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      // Check if the new cell is within bounds
      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
        // Check if the new cell is unvisited and its height is not greater than the current cell
        if (!visited[newRow][newCol] && heights[newRow][newCol] >= heights[row][col]) {
          visited[newRow][newCol] = true;
          queue.push([newRow, newCol]);
        }
      }
    }
  }
};

// let x = pacificAtlantic([
//   [1, 2, 3],
//   [6, 5, 4],
//   [2, 7, 2],
// ]);

let x = pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]);

// let x = pacificAtlantic([[1]]);
console.log("Result");
console.log(x);
