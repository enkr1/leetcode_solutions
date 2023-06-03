class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

/**
* @param {Node} node
* @return {Node}
*/
var cloneGraph = function (node) {
  if (!node) return node;

  const visited = new Map();

  const cloneNode = (oldNode) => {
    if (visited.has(oldNode.val)) {
      return visited.get(oldNode.val);
    }

    const newNode = new Node(oldNode.val);
    visited.set(oldNode.val, newNode);
    /*

    > visited
    Map(4) {
      1 => Node { val: 1, neighbors: [] },
      2 => Node { val: 2, neighbors: [ [Node] ] },
      3 => Node { val: 3, neighbors: [ [Node] ] },
      4 => Node { val: 4, neighbors: [] }
    }

    */

    for (let neighbor of oldNode.neighbors) {
      newNode.neighbors.push(cloneNode(neighbor));
    }

    return newNode;
  };

  return cloneNode(node);
};
