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

  const buildNode = (node, order) => {
    // if (null === node) return;
    if (0 === order.length) return;
    let curr = order[0],
      tmpInorder = [...inorder],
      inIdx = tmpInorder.indexOf(curr),
      leftInorder = tmpInorder.splice(0, inIdx),
      rightInorder = tmpInorder.splice(inIdx, tmpInorder.length - 1);

    console.log(`-> inIdx:${inIdx}, curr:${curr}, order:${order}`);
    console.log("from inorder:");
    console.log(leftInorder, rightInorder);

    // last idx from inorder of the left side is the end of the left leaves in pre
    let tmpPreorder = [...order],
      lastPreIdx = order.indexOf(leftInorder[leftInorder.length - 1]),
      leftPreorder = tmpPreorder.splice(1, lastPreIdx),
      rightPreorder = tmpPreorder.splice(lastPreIdx, tmpPreorder.length - 1);
    console.log(">> PRE")
    console.log(leftPreorder, rightPreorder)

    node.val = curr;
    console.log("node")
    console.log(node)


    console.log(order);
    // if (inorder.indexOf(preorder[0]) < inIdx) {
    //   console.log(`-> l ${inorder.indexOf(preorder[0])} < ${inIdx}`);
    if (leftPreorder.length > 0) {
      //   // yes it is left leave
      node.left = new TreeNode(order[1]);
      console.log(`Adding ${order[1]} to left`)
      buildNode(node.left, leftPreorder);
    }

    if (rightPreorder.length > 0) {
      //   console.log(`-> r ${inorder.indexOf(preorder[0])} > ${inIdx}`);
      console.log(`Adding ${order[lastPreIdx + 1]} to right`)
      node.right = new TreeNode(order[lastPreIdx + 1]);
      buildNode(node.right, rightPreorder);
    }
  }

  buildNode(tree, [...preorder]);

  return tree;
};

let x =
  // buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
  // buildTree([-1], [-1])
  buildTree([1, 2, 3], [3, 2, 1])
// buildTree([3, 9, 8, 6, 7, 20], [6, 8, 9, 7, 3, 20])

console.log("Result")
console.log(x);
