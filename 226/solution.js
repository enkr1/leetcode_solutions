class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (null === root) return null;
  if (null === root.val) return new TreeNode();

  const invertNode = (node) => {
    if (null === node) return node;
    let left = node.left, right = node.right;

    if (null !== node.left) {
      node.right = left;
      // node.left = right;
      invertNode(node.right);
    }

    if (null !== node.right) {
      node.left = right;
      node.right = left;
      invertNode(node.left);
    }

    return node;
  }

  return invertNode(root);
}
