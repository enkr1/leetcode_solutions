class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (null === root) return [];

  let list = [[root.val]], queue = [root];

  while (queue.length > 0) {
    let l = queue.length, singleLevel = [];

    while (l > 0) {
      let curr = queue.shift(), left = curr.left, right = curr.right;

      if (null !== left) {
        queue.push(left);
        singleLevel.push(left.val);
      }

      if (null !== right) {
        queue.push(right);
        singleLevel.push(right.val);
      }

      l--;
    }

    if (singleLevel.length > 0) list.push(singleLevel);
  }

  return list;
};
