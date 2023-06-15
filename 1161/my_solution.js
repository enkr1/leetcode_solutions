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
    console.log(`> curr:${curr.val}`)

    if (undefined !== left) {
      if (null !== left) {
        tmpMax += left.val;
        queue.push(left);
        visitedCount++;
      } else {
        tmpLeaves++;
      }
    }

    if (undefined !== right) {
      if (null !== right) {
        tmpMax += right.val;
        queue.push(right);
        visitedCount++;
      } else {
        tmpLeaves++;
      }
    }

    console.log(`old_level:${level}, tmpMax:${tmpMax}, max:${max}, nodesToVisit:${nodesToVisit} visitedCount:${visitedCount}, tmpLeaves:${tmpLeaves}, nbOfLeaves:${nbOfLeaves}`)
    // if (nodesToVisit === (visitedCount + tmpLeaves)) {
    if (nodesToVisit === (visitedCount + nbOfLeaves)) {
      // console.log(`old_level:${level}, tmpMax:${tmpMax}, max:${max}, visitedCount:${visitedCount}, tmpLeaves:${tmpLeaves}`)
      console.log(`>>> tmpMax:${tmpMax}, max:${max}`)
      if (tmpMax > max) {
        level = (nodesToVisit / 2) + 1;
        max = tmpMax;
      }

      nodesToVisit *= 2;
      // visitedCount = nodesToVisit - (tmpLeaves * 2) - nbOfLeaves;
      visitedCount = 0;
      tmpMax = 0;
      nbOfLeaves = (nbOfLeaves + tmpLeaves) * 2;
      tmpLeaves = 0;
    }
  }

  return level;
};
