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
    console.log(`-> v:${node.val}`)

    // let l = node.left, r = node.right;
    // if (l !== null) {}
    const defaultForNull = -Infinity;

    let treeLeftVal = 0, exploreLeftVal = defaultForNull;
    if (node.left !== null) {
      treeLeftVal = node.left.val;
      // console.log("exploreToFindMax -> l")
      exploreLeftVal = node.val + exploreToFindMax(node.left);
    }
    //     console.log("treeLeftVal")
    //     console.log(treeLeftVal)
    //     console.log("exploreLeftVal")
    //     console.log(exploreLeftVal)

    let treeRightVal = 0, exploreRightVal = defaultForNull;
    if (node.right !== null) {
      treeRightVal = node.right.val;
      console.log("exploreToFindMax -> r")
      exploreRightVal = node.val + exploreToFindMax(node.right);
      console.log("exploreRightVal")
      console.log(exploreRightVal)
    }

    let treeMax = node.val + treeLeftVal + treeRightVal; // 0 represents not picking any of them

    max = Math.max(max, treeMax, exploreLeftVal, exploreRightVal);
    console.log("node.val")
    console.log(node.val)
    console.log("node.val + Math.max(exploreLeftVal, exploreRightVal, 0)")
    console.log(node.val + Math.max(exploreLeftVal, exploreRightVal, 0))
    return node.val + Math.max(exploreLeftVal, exploreRightVal, 0);
  };

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;
    if (left !== null) queue.push(left);
    if (right !== null) queue.push(right);
    exploreToFindMax(curr);
  }

  console.log("max")
  console.log(max)
  return max;
}

maxPathSum(
  new TreeNode(1,
    new TreeNode(-2),
    new TreeNode(3)
  )
)
