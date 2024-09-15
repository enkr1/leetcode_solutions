class UnionFind {
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
  }

  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x))); // Path compression
    }
    return this.parent.get(x);
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      let rankX = this.rank.get(rootX) || 1;
      let rankY = this.rank.get(rootY) || 1;

      if (rankX > rankY) {
        this.parent.set(rootY, rootX);
      } else if (rankX < rankY) {
        this.parent.set(rootX, rootY);
      } else {
        this.parent.set(rootY, rootX);
        this.rank.set(rootX, rankX + 1);
      }
    }
  }

  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
      this.rank.set(x, 1);
    }
  }
}

/**
* @param {number[][]} stones
* @return {number}
*/
var removeStones = function (stones) {
  const uf = new UnionFind();
  // console.log("uf", uf);

  // Use separate identifiers for rows and columns by adding a large constant to column identifiers
  for (let [xs, ys] of stones) {
    uf.add(xs);         // Add row identifier
    uf.add(ys + 10001); // Add column identifier, shifted to avoid collision with row IDs
    uf.union(xs, ys + 10001); // Union row and column
    console.log("each loop\n",uf);
  }
  console.log("post loop\n",uf);

  const uniqueParents = new Set();
  for (let [xs, ys] of stones) {
    uniqueParents.add(uf.find(xs));
  }

  return stones.length - uniqueParents.size;
};


// Test Case 1: Simple connected component
let stones1 = [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]];
console.log(removeStones(stones1)); // Expected output: 5

// // Test Case 2: No stones
// let stones2 = [];
// console.log(removeStones(stones2)); // Expected output: 0
//
// // Test Case 3: Single stone
// let stones3 = [[0, 0]];
// console.log(removeStones(stones3)); // Expected output: 0
//
// // Test Case 4: Two disconnected stones
// let stones4 = [[0, 0], [1, 1]];
// console.log(removeStones(stones4)); // Expected output: 0
//
// // Test Case 5: Multiple stones forming a complex structure
// let stones5 = [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]];
// console.log(removeStones(stones5)); // Expected output: 3
