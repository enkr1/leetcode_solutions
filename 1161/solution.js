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
const maxLevelSum = (root) => {
  let queue = [root], level = 1, max = root.val, tmpMax = 0,
    nbOfLeaves = 0, tmpLeaves = 0, nodesToVisit = 2, visitedCount = 0;

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;

    if (undefined !== left) {
      visitedCount++;
      if (null !== left) {
        tmpMax += left.val;
        queue.push(left);
      } else {
        tmpLeaves++;
      }
    }

    if (undefined !== right) {
      visitedCount++;
      if (null !== right) {
        tmpMax += right.val;
        queue.push(right);
      } else {
        tmpLeaves++;
      }
    }

    if (nodesToVisit === (visitedCount + nbOfLeaves)) {
      if ((null !== tmpMax) && (tmpMax > max)) {
        level = Math.log2(nodesToVisit) + 1;
        max = tmpMax;
      }

      nodesToVisit *= 2;
      nbOfLeaves = (nbOfLeaves + tmpLeaves) * 2;
      visitedCount = 0;
      tmpLeaves = 0;
      tmpMax = null;
    }
  }

  return level;
};
