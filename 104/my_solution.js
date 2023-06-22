/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (null === root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// const maxDepth = (root) => {
//   let depth = 0;
//
//   const dfs = (currNode, tmpDepth) => {
//     if (null !== currNode) {
//       tmpDepth++;
//       dfs(currNode.left, tmpDepth);
//       dfs(currNode.right, tmpDepth);
//     } else {
//       depth = Math.max(depth, tmpDepth);
//       return;
//     }
//   }
//
//   dfs(root, 0);
//
//   return depth;
// };
