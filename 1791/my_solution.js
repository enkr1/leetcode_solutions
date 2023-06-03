class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

const buildGraph = (adjList) => {
  const nodes = {};

  // Create all the nodes
  for (let i = 0; i < adjList.length; i++) {
    const val = i + 1;
    nodes[val] = new Node(val);
  }

  // Connect the nodes
  for (let i = 0; i < adjList.length; i++) {
    const node = nodes[i + 1]; // Get the corresponding Node object

    for (let j = 0; j < adjList[i].length; j++) {
      const neighborVal = adjList[i][j];
      const neighborNode = nodes[neighborVal]; // Get the neighbor Node object
      node.neighbors.push(neighborNode);
    }
  }

  // Return the reference to the first node (val = 1)
  return nodes[1];
}

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let visited = new Map();

  for (let i = 0; i < edges.length; i++) {
    for (let uv = 0; uv < edges[i].length; uv++) {
      if (visited.has(edges[i][uv])) {
        return edges[i][uv];
      }

      visited.set(edges[i][uv], true)
      console.log(visited)
    }
  }
};

// let x = buildGraph([[1, 2], [2, 3], [4, 2]])
// let x = findCenter([[1, 2], [2, 3], [4, 2]])
// let x = findCenter([[1, 3], [2, 3]])
let x = findCenter([[1, 2], [5, 1], [1, 3], [1, 4]])
console.log("x")
console.log(x)
// cloneGraph(node);
