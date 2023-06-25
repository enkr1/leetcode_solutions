class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let tree = new TreeNode()

  const buildNode = (node, order) => { // order = inorder
    // if (null === node) return;
    if (0 === order.length) return;
    let curr = preorder.shift();

    console.log("-> order.includes(curr)");
    console.log("curr");
    console.log(curr);
    console.log("order");
    console.log(order);
    console.log(order.includes(curr));
    if (!order.includes(curr)) return;

    let
      tmpInorder1 = [...order],
      tmpInorder2 = [...order],
      inIdx = order.indexOf(curr),
      leftInorder = tmpInorder1.splice(0, inIdx),
      rightInorder = tmpInorder2.splice(inIdx + 1, tmpInorder2.length - 1);

    console.log(`-> inIdx:${inIdx}, curr:${curr}, order:${order}`);
    console.log("from inorder:");
    console.log(leftInorder, rightInorder);

    // last idx from inorder of the left side is the end of the left leaves in pre
    // let tmpPreorder = [...order],
    //   lastPreIdx = order.indexOf(leftInorder[leftInorder.length - 1]),
    //   leftPreorder = tmpPreorder.splice(1, lastPreIdx),
    //   rightPreorder = tmpPreorder.splice(lastPreIdx, tmpPreorder.length - 1);
    // console.log(">> PRE")
    // console.log(leftPreorder, rightPreorder)

    node.val = curr;
    console.log("node")
    console.log(node)

    // if (inorder.indexOf(preorder[0]) < inIdx) {
    //   console.log(`-> l ${inorder.indexOf(preorder[0])} < ${inIdx}`);
    if (leftInorder.length > 0) {
      node.left = new TreeNode();
      console.log(`Adding left`)
      buildNode(node.left, leftInorder);
    }

    if (rightInorder.length > 0) {
      node.right = new TreeNode();
      buildNode(node.right, rightInorder);
    }
  }

  buildNode(tree, [...inorder]);

  return tree;
};

let x =
  // buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
  // buildTree([-1], [-1])
  // buildTree([1, 2, 3], [3, 2, 1])
  buildTree([1, 2], [1, 2])
// buildTree([3, 9, 8, 6, 7, 20], [6, 8, 9, 7, 3, 20])

console.log("Result")
console.log(x);
