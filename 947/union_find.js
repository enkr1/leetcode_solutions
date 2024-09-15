class UnionFind {
  constructor() {
    this.parent = new Map();
    this.rank = new Map();
    console.log("Initial parent map:", JSON.stringify([...this.parent]));
    console.log("Initial rank map:", JSON.stringify([...this.rank]));
  }

  add(x) {
    if (this.parent.has(x)) return;

    this.parent.set(x, x);
    this.rank.set(x, 1);
  }

  find(x) {
    console.log(`~~> Find(${x})`);

    // Find the root of the element x
    if (this.parent.get(x) !== x) {
      console.log(`Path compression for element ${x}`);
      this.parent.set(x, this.find(this.parent.get(x))); // Path compression
    }

    console.log(`Find(${x}) -> Root is ${this.parent.get(x)}`);
    return this.parent.get(x);
  }

  union(x, y) {
    console.log(`\nUnion(${x}, ${y})`);

    this.add(x);
    this.add(y);

    // Find the roots of x and y
    console.log(`~> before find:`, JSON.stringify([...this.parent]));
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      console.log(`Union(${x}, ${y}) -> Already in the same set`);
      return;
    }

    let rankX = this.rank.get(rootX);
    let rankY = this.rank.get(rootY);

    console.log(`rootX: ${rootX}, \nrootY: ${rootY}, \nrankX: ${rankX}, \nrankY: ${rankY}`);
    console.log(`~~~> after find:`, JSON.stringify([...this.parent]));

    // If they have different roots, perform union
    if (rankX > rankY) {
      console.log(`(x <- y) -> Root of ${y} (root ${rootY}) attached to root ${rootX}`);
      this.parent.set(rootY, rootX);
    } else if (rankX < rankY) {
      console.log(`(x -> y) -> Root of ${x} (root ${rootX}) attached to root ${rootY}`);
      this.parent.set(rootX, rootY);
    } else {
      console.log(`(x <- y) -> Roots are equal, root ${rootY} attached to root ${rootX}`);
      this.parent.set(rootY, rootX);
      this.rank.set(rootX, rankX + 1); // ONLY increase the rank of the new root
    }

    console.log(`parent:  ${JSON.stringify([...this.parent])}`);
    console.log(`rank:    ${JSON.stringify([...this.rank])}`);
  }
}

// Create an instance of UnionFind with 8 elements (0 through 7)
let uf = new UnionFind();

// Test Cases
console.log("\nTest Case 1: Union operations");
// uf.union(1, 2);
// uf.union(2, 3);

uf.union(0, 0);
uf.union(0, 1);
uf.union(1, 0);
uf.union(1, 2);
uf.union(2, 1);
uf.union(2, 2);

// uf.union(4, 5);
// uf.union(6, 7);
// uf.union(5, 6);
// uf.union(3, 7); // This will connect two previously separate sets
// // console.log("\n--> size", uf.size());
//
// console.log("\nTest Case 2: Find operations");
// console.log("\n- Find(1):", uf.find(1)); // Should compress path for 1 -> 2 -> 3 -> root
// console.log("\n- Find(2):", uf.find(2)); // Already compressed
// console.log("\n- Find(5):", uf.find(5)); // Should show the root of the 4-5-6-7 component
// console.log("Find(8):", uf.find(8)); // 8 should be its own root (no connections yet)
//
// console.log("\nTest Case 3: Additional Unions and Finds");
// uf.union(8, 9);
// console.log("Find(9):", uf.find(9)); // Should point to root after union with 8
// uf.union(3, 8); // This will connect the 1-2-3-7-6-5-4 set with 8-9
// console.log("Find(9):", uf.find(9)); // Should now point to the root of the entire connected set
// console.log("Final parent array:", uf.parent);
// console.log("Final rank array:", uf.rank);
