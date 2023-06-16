class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  let list = [], visitedList = [];

  const inOrder = (node) => {
    if (null === node) {
      let parent = visitedList.pop();
      if (undefined === parent) return;
      list.push(parent.val);
      parent.left = null;
      return inOrder(parent.right);
    } else {
      visitedList.push(node);
      return inOrder(node.left);
    }
  }

  inOrder(root);

  let prev = list.shift(), min = Infinity;
  while (list.length > 0) {
    let curr = list.shift();
    min = Math.min(min, curr - prev);
    prev = curr;
  }

  return min;
};
