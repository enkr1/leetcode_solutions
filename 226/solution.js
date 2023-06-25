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

  let left = root.left, right = root.right;

  if (null !== root.left) {
    root.right = left;
    // root.left = right;
    invertTree(root.right);
  }

  if (null !== root.right) {
    root.left = right;
    root.right = left;
    invertTree(root.left);
  }

  return root;
}
