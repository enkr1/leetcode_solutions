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
  let leftAncestors = [], rightAncestors = [];

  const exploreLeft = (node) => {
    if (node.val !== Math.min(leftAncestors.concat([node.val]))) return false;
    leftAncestors.push(node.val);
    return true;
  }

  const exploreRight = (node) => {
    if (node.val !== Math.max(rightAncestors.concat([node.val]))) return false;
    rightAncestors.push(node.val);
    return true;
  }

  let queue = [root];

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;

    if ((left?.val ?? -Infinity) >= curr.val || (right?.val ?? Infinity) <= curr.val) return false;

    if (null !== left) {
      queue.push(left);
      if (!exploreLeft(left)) return false;
    }


    if (null !== right) {
      queue.push(right);
      if (!exploreRight(right)) return false;
    }
  }

  return true;
};
