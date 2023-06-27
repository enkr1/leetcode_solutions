class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isTreeValid = (node, min, max) => {
    if (null === node) return true;
    if (!(min < node.val && node.val < max)) return false;
    return isTreeValid(node.left, min, node.val) && isTreeValid(node.right, node.val, max);
  }

  return isTreeValid(root.left, -Infinity, root.val) && isTreeValid(root.right, root.val, Infinity);
};
