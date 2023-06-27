/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let pv = p.val, qv = q.val;
  if (pv > qv) {
    let tmp = pv;
    pv = qv;
    qv = tmp;
  }

  console.log(root.val)
  console.log(`p:${pv},rv:${root.val},q:${qv}`)
  if (
    (pv <= root.val && root.val <= qv)
    // || (pv <= root.val && root.val < qv)
    // || (pv > root.val && root.val >= qv)
  ) {

    console.log("A")
    console.log(root);
    console.log(root.val);
    return root;
  } else if (pv < root.val && qv < root.val) {
    console.log("B")
    return lowestCommonAncestor(root.left, p, q);
  } else if (pv > root.val && qv > root.val) {
    console.log("C")
    return lowestCommonAncestor(root.right, p, q);
  }
  console.log("nth???")
};
