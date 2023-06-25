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
    if (0 === order.length) return;
    let curr = preorder.shift();

    if (!order.includes(curr)) return;

    let
      tmpInorder1 = [...order],
      tmpInorder2 = [...order],
      inIdx = order.indexOf(curr),
      leftInorder = tmpInorder1.splice(0, inIdx),
      rightInorder = tmpInorder2.splice(inIdx + 1, tmpInorder2.length - 1);

    node.val = curr;

    if (leftInorder.length > 0) {
      node.left = new TreeNode();
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
