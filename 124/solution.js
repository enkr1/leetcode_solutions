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
  let max = root.val;

  const exploreToFindMax = (node) => {
    if (node === null) return 0;

    let exploreLeftVal = exploreToFindMax(node.left),
      exploreRightVal = exploreToFindMax(node.right),
      treeMax = node.val + exploreLeftVal + exploreRightVal;

    max = Math.max(max, treeMax);

    return Math.max(node.val + Math.max(exploreLeftVal, exploreRightVal), 0);
  };

  exploreToFindMax(root);

  return max;
}
