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
const getMinimumDifference = (root) => {
  let queue = [root], list = [], visitedList = [];
  // while (queue.length > 0) {
  //   let curr = queue.shift(), left = curr.left, right = curr.right;
  //   list.push(curr.val);
  //   if (null !== left) queue.push(left);
  //   if (null !== right) queue.push(right);
  // }

  const inOrder = (node) => {
    if (null === node) {
      visitedList.pop(); // current
      let parent = visitedList.pop();
      list.push(parent.val);
      parent.left = null;
      return inOrder(parent);
    } else if (null === node.left) {
      visitedList.push(node);
      list.push(node.val);
      return inOrder(node.right);
    } else {
      visitedList.push(node);
      return inOrder(node.left);
    }
    // else {
    //   // else if (null === node.right) {
    //   //   list.push(node.val);
    //   //   let parent = visitedList.pop();
    //   //   parent.left == null;
    //   //   return inOrder(parent);
    //   // } else if (null !== node.left) {
    //   //   visitedList.push(node);
    //   //   return inOrder(node.left);
    //   // } else if (null !== node.right) {
    //   //   visitedList.push(node);
    //   //   return inOrder(node.right);
    //   // }
    // }
    // return inOrder();
  }

  inOrder(root);

  console.log(visitedList);
  console.log(list);
  // let min = Infinity, tmpMax = 0, tmpMin = Infinity;
  // for (let i = 0; i < list.length; i++) {
  //   tmpMax = Math.max(tmpMax, list[i]);
  //   tmpMin = Math.min(tmpMin, list[i]);
  //   if (undefined !== list[i + 1]) {
  //     min = Math.min(min, Math.abs(list[i + 1] - tmpMax), Math.abs(list[i + 1] - tmpMin))
  //   }
  // }

  let min = Infinity;
  // bruteforce
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i === j) continue;
      min = Math.min(min, Math.abs(list[i] - list[j]))
    }
  }

  return min;
};
