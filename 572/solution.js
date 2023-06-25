class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  let queue = [root];

  const isNodeSame = (node, sub) => {
    if ((node?.val ?? null) !== (sub?.val ?? null)) return false;
    if (null === node && null === sub) return true;
    return isNodeSame(node?.left ?? null, sub?.left ?? null) && isNodeSame(node?.right ?? null, sub?.right ?? null);
  }

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;
    if (isNodeSame(curr, subRoot)) return true;
    if (null !== left) queue.push(left);
    if (null !== right) queue.push(right);
  }

  return false;
};
