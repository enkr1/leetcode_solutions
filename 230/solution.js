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
  let kValue = null, parents = [];

  const inOrder = (node) => {
    if (node === null || k === 0) return;

    if (node.left !== null) {
      parents.push(node);
      inOrder(node.left);
    } else {
      k--;
      kValue = node.val;

      if (node.right === null && parents.length > 0) {
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
