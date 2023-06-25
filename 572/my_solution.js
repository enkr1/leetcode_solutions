class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  let queue = [root];

  const isNodeSame = (node, sub) => {
    console.log("node")
    console.log(node)
    console.log("sub")
    console.log(sub)
    console.log(`node?.val?:${node?.val ?? null} !== sub.val:${sub?.val ?? null} -> ${(node?.val ?? null) !== sub?.val ?? null}`)

    if ((node?.val ?? null) !== (sub?.val ?? null)) return false;

    if (null === node && null === sub) {
      console.log(">>> BOTH EMPTY")
      return true;
    }

    return isNodeSame(node?.left ?? null, sub?.left ?? null) && isNodeSame(node?.right ?? null, sub?.right ?? null);
  }

  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;
    if (isNodeSame(curr, subRoot)) {
      return true;
    }

    if (null !== left) queue.push(left);
    if (null !== right) queue.push(right);
  }

  return false;
};

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// true

let x =
  // isSubtree(new TreeNode(3,
  //   new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  //   new TreeNode(5)),
  //   new TreeNode(4, new TreeNode(1), new TreeNode(2))
  // )

  isSubtree(new TreeNode(3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2)),
    new TreeNode(5)),
    new TreeNode(4, new TreeNode(1), new TreeNode(2))
  )

console.log("Result")
console.log(x)
