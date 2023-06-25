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
  if (null === p && null === q) return true;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// const isSameTree = (p, q) => {
//   if (p?.val !== q?.val) return false;
//   let pQueue = [p], qQueue = [q];
//
//   const extractLeft = (node, list) => {
//     if (null === node) return;
//     list.push(node.left);
//     return node.left?.val;
//   }
//
//   const extractRight = (node, list) => {
//     if (null == node) return;
//     list.push(node.right);
//     return node.right?.val;
//   }
//
//   while (0 < pQueue.length && 0 < qQueue.length) {
//     let currP = pQueue.shift(), currQ = qQueue.shift();
//     if (currP?.val !== currQ?.val) return false;
//     extractLeft(currP, pQueue)
//     extractLeft(currQ, qQueue)
//     extractRight(currP, pQueue)
//     extractRight(currQ, qQueue)
//   }
//
//   return true;
// };
