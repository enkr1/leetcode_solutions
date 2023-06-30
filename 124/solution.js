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
function maxPathSum(root) {
  let queue = [root], max = root.val;

  const exploreToFindMax = (node) => {
    if (node === null) return;

    const defaultForNull = -Infinity;

    let treeLeftVal = 0, exploreLeftVal = defaultForNull;
    if (node.left !== null) {
      treeLeftVal = node.left.val;
      exploreLeftVal = node.val + exploreToFindMax(node.left);
    }

    let treeRightVal = 0, exploreRightVal = defaultForNull;
    if (node.right !== null) {
      treeRightVal = node.right.val;
      exploreRightVal = node.val + exploreToFindMax(node.right);
    }

    let treeMax = node.val + treeLeftVal + treeRightVal; // 0 represents not picking any of them

    max = Math.max(max, treeMax, exploreLeftVal, exploreRightVal);
    return node.val + Math.max(exploreLeftVal, exploreRightVal, 0);
  };

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;
    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
    exploreToFindMax(curr);
  }

  return max;
}
