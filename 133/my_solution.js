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
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;
  let map = new Map();

  // closeNode
  const dfs = (oldNode) => {
    if (map.has(oldNode.val)) {
      console.log(map)
      console.log("---> node exists:" + oldNode.val)
      console.log(oldNode)
      return map.get(oldNode.val);
    }

    let copy = new Node(oldNode.val)
    map.set(oldNode.val, copy)

    console.log("> map")
    console.log(map)

    for (let nei of oldNode.neighbors) {
      copy.neighbors.push(dfs(nei));
    }

    return copy;
  }

  return dfs(node);
};

// let n1= new Node(1, [new Node()])
let node = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]])
console.log("node")
console.log(node)
cloneGraph(node);
