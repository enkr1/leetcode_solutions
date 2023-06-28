class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let list = [], kValue = null, parents = [];

  const inOrder = (node) => {
    console.log("parents")
    console.log(parents)
    if (node === null || k === 0) return;

    if (node.left !== null) { // going left
      parents.push(node);
      inOrder(node.left);
    } else { // returning to right
      k--;
      kValue = node.val;
      list.push(node.val);

      if (node.right === null && parents.length > 0) {
        console.log("r null")
        let parent = parents.pop();
        parent.left = null;
        inOrder(parent);
      } else {
        inOrder(node.right);
      }
    }
  }

  inOrder(root);

  return kValue;
};


let x =
  // [1]
  kthSmallest(
    new TreeNode(1),
    1
  )
// // [5,3,6,2,4,null,null,1]
// kthSmallest(
//   new TreeNode(
//     5,
//     new TreeNode(3,
//       new TreeNode(2, new TreeNode(1)),
//       new TreeNode(4)),
//     new TreeNode(6)
//   ),
//   3
// )
// kthSmallest(
//   new TreeNode(
//     3,
//     new TreeNode(1, null, new TreeNode(2)),
//     new TreeNode(4)
//   ),
//   3
// )

console.log("x")
console.log(x)
