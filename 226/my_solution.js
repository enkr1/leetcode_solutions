class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (null === root) return null;
  if (null === root.val) return new TreeNode();

  const invertNode = (node) => {
    if (null === node) return node;
    let left = node.left, right = node.right;

    if (null !== node.left) {
      node.right = left;
      // node.left = right;
      invertNode(node.right);
    }

    if (null !== node.right) {
      node.left = right;
      node.right = left;
      invertNode(node.left);
    }


    return node;
  }

  //   while (queue.length > 0) {
  //     let curr = queue.shift(), left = curr.left, right = curr.right;
  //
  //     if (null !== left) {
  //       queue.push(left);
  //       dummy.right = left;
  //     }
  //
  //     if (null !== right) {
  //       queue.push(right);
  //       dummy.left = right;
  //     }
  //
  //     dummy = dummy;
  //   }

  return invertNode(root);
}

//[4,2,7,1,3,6,9]
let x =
  // invertTree(new TreeNode(4,
  //   new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  //   new TreeNode(7, new TreeNode(6), new TreeNode(9))
  // ));
  // invertTree(new TreeNode(1,
  //   new TreeNode(2)
  // ));
  invertTree(new TreeNode(1,
    null,
    new TreeNode(2)
  ));

console.log("Result")
console.log(x)
