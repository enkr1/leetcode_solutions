/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (null === root) return [];

  let list = [[root.val]], children = 2, visitedChildren = 0, nullChildren = 0, level = 1, queue = [root], levelVal = [];

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;

    if (null !== left) {
      queue.push(left);
      visitedChildren++;
      levelVal.push(left.val);
    } else {
      nullChildren++;
    }

    if (null !== right) {
      queue.push(right);
      visitedChildren++;
      levelVal.push(right.val);
    } else {
      nullChildren++;
    }

    if (children === (visitedChildren + nullChildren)) {
      if (levelVal.length > 0) list[level] = levelVal;
      levelVal = [];
      level++;
      children *= 2;
      visitedChildren = 0;
      nullChildren *= 2;
    }
  }

  return list;
};
