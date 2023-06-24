class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (p?.val !== q?.val) return false;
  let pQueue = [p], qQueue = [q];

  const extractLeft = (node, list) => {
    if (null === node) return;
    list.push(node.left);
    return node.left?.val;
  }

  const extractRight = (node, list) => {
    if (null == node) return;
    list.push(node.right);
    return node.right?.val;
  }

  while (0 < pQueue.length && 0 < qQueue.length) {
    let currP = pQueue.shift(), currQ = qQueue.shift();
    console.log(">>>>")
    console.log(pQueue)
    console.log(qQueue)
    console.log("-> currP")
    console.log(currP)
    console.log("-> currQ")
    console.log(currQ)

    if (currP?.val !== currQ?.val) return false;
    //     console.log("-> p")
    //     // console.log(pQueue)
    //     console.log(extractLeft(currP, pQueue))
    //     console.log(extractLeft(currQ, pQueue))
    //     // console.log(pQueue)
    //     console.log(extractLeft(currP, pQueue) !== extractLeft(currQ, pQueue))
    //
    //     console.log("-> q")
    //     // console.log(qQueue)
    //     console.log(extractRight(currP, qQueue))
    //     console.log(extractRight(currQ, qQueue))
    //     // console.log(qQueue)
    //     console.log(extractRight(currP, qQueue) !== extractRight(currQ, qQueue))

    extractLeft(currP, pQueue)
    extractLeft(currQ, qQueue)
    extractRight(currP, pQueue)
    extractRight(currQ, qQueue)

    // if (extractLeft(currP, pQueue) !== extractLeft(currQ, pQueue) ||
    //   extractRight(currP, qQueue) !== extractRight(currQ, qQueue)) return false;
  }

  return true;
};

let x;

// x = isSameTree(new TreeNode(
//   1,
//   new TreeNode(2),
//   new TreeNode(3)
// ), new TreeNode(
//   1,
//   new TreeNode(3),
//   new TreeNode(2)
// )
// )

// x = isSameTree(
//   new TreeNode(
//     1,
//     new TreeNode(2),
//     new TreeNode(3)
//   ),
//   new TreeNode(
//     1,
//     new TreeNode(2),
//     new TreeNode(3)
//   )
// )

// x = isSameTree(
//   new TreeNode(
//     1,
//     null,
//     new TreeNode(1)
//   ),
//   new TreeNode(
//     1,
//     null,
//     new TreeNode(1)
//   )
// )
//
// x = isSameTree(
//   new TreeNode(
//     1,
//     null,
//     new TreeNode(2,
//       new TreeNode(3)
//     )
//   ),
//   new TreeNode(
//     1,
//     null,
//     new TreeNode(2,
//       new TreeNode(3)
//     )
//   )
// )

x = isSameTree(
  new TreeNode(
    1,
    new TreeNode(2)
  ),
  new TreeNode(
    1,
    null,
    new TreeNode(2)
  )
)

console.log("Result")
console.log(x)
