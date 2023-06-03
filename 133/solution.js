class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
};

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
      console.log("all saved")
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
// cloneGraph
