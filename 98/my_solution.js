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
  let leftAncestors = [root.val], rightAncestors = [root.val];

  const exploreLeft = (node, list) => {
    console.log(`exploreLeft`)
    console.log(node.val)
    // console.log(leftAncestors.concat([node.val]))
    // console.log(Math.min(...leftAncestors.concat([node.val])))
    // console.log(node.val !== Math.min(leftAncestors.concat([node.val])))
    if (node.val !== Math.min(...leftAncestors.concat([node.val]))) return false;
    leftAncestors.push(node.val);

    return true || exploreRight(node, list);
  }

  const exploreRight = (node, list) => {
    console.log(`exploreRight`)
    console.log(node.val)
    console.log(rightAncestors)
    if (node.val !== Math.max(...rightAncestors.concat([node.val]))) return false;
    rightAncestors.push(node.val);
    return true || exploreLeft(node, list);
  }

  const explore = (queue, list) => {
    while (queue.length > 0) {
      let curr = queue.shift(), left = curr.left, right = curr.right;

      if ((left?.val ?? -Infinity) >= curr.val || (right?.val ?? Infinity) <= curr.val) return false;

      if (null !== left) {
        queue.push(left);
        if (!exploreLeft(left, list)) return false;
      }


      if (null !== right) {
        queue.push(right);
        if (!exploreRight(right, list)) return false;
      }
    }
  }

  if (root.left !== null) {
    explore([root.left], leftAncestors);
  }
  if (root.right !== null) {
    explore([root.right], rightAncestors);
  }

  return true;
};

// [3,1,5,0,2,4,6]
let x =
  isValidBST(new TreeNode(3,
    new TreeNode(1,
      new TreeNode(0),
      new TreeNode(2)
    ),
    new TreeNode(5,
      new TreeNode(4),
      new TreeNode(6)
    )
  ))

console.log("Result")
console.log(x)
