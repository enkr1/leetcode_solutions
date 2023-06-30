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
    console.log(`-> v:${node.val}`)

    let exploreLeftVal = exploreToFindMax(node.left),
      exploreRightVal = exploreToFindMax(node.right);
    console.log(`exploreLeftVal:${exploreLeftVal}, exploreRightVal:${exploreRightVal}`);

    // 0 represents not picking any of them
    // let treeMax = node.val + treeLeftVal + treeRightVal;
    // let treeMax = node.val + (node.left?.val ?? 0) + (node.right?.val ?? 0);
    let treeMax = node.val + exploreLeftVal + exploreRightVal;

    // max = Math.max(max, treeMax, node.val + Math.max(exploreLeftVal, exploreRightVal));
    max = Math.max(max, treeMax);
    console.log("node.val + Math.max(exploreLeftVal, exploreRightVal, 0)")
    console.log(node.val + Math.max(exploreLeftVal, exploreRightVal))

    return node.val + Math.max(exploreLeftVal, exploreRightVal);
    return Math.max(node.val + Math.max(exploreLeftVal, exploreRightVal), 0);
  };

  exploreToFindMax(root);

  console.log("max")
  console.log(max)
  return max;
}

// [-1,-2,10,-6,null,-3,-6]
// maxPathSum(
//   new TreeNode(-1,
//     new TreeNode(-2,
//       new TreeNode(-6)
//     ),
//     new TreeNode(10,
//       new TreeNode(-3),
//       new TreeNode(-6)
//     )
//   )
// )

// maxPathSum(
//   new TreeNode(-10,
//     new TreeNode(9),
//     new TreeNode(20,
//       new TreeNode(15),
//       new TreeNode(7)
//     )
//   )
// )

maxPathSum(
  new TreeNode(1,
    new TreeNode(-2),
    new TreeNode(3)
  )
)
