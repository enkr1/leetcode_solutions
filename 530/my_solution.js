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
  let list = [], visitedList = [];
  // while (queue.length > 0) {
  //   let curr = queue.shift(), left = curr.left, right = curr.right;
  //   list.push(curr.val);
  //   if (null !== left) queue.push(left);
  //   if (null !== right) queue.push(right);
  // }

  // TODO: Study actually how to do a preorder i think my solution is not the best here
  const inOrder = (node) => {
    console.log(`node.val:`);
    console.log(node)
    console.log("list");
    console.log(list);
    // console.log(visitedList);

    if (null === node) {
      // visitedList.pop(); // current
      let parent = visitedList.pop();
      if (undefined === parent) return;
      // console.log("visitedList");
      // console.log(visitedList);
      // console.log("parent");
      // console.log(parent);

      list.push(parent.val);
      parent.left = null;
      return inOrder(parent.right);
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
  console.log("list");
  console.log(list);


  // let min = Infinity, tmpMax = 0, tmpMin = Infinity;
  // for (let i = 0; i < list.length; i++) {
  //   tmpMax = Math.max(tmpMax, list[i]);
  //   tmpMin = Math.min(tmpMin, list[i]);
  //   if (undefined !== list[i + 1]) {
  //     min = Math.min(min, Math.abs(list[i + 1] - tmpMax), Math.abs(list[i + 1] - tmpMin))
  //   }
  // }

  // let min = Infinity;
  // bruteforce
  // for (let i = 0; i < list.length; i++) {
  //   for (let j = 0; j < list.length; j++) {
  //     if (i === j) continue;
  //     min = Math.min(min, Math.abs(list[i] - list[j]))
  //   }
  // }

  let prev = list.shift(), min = Infinity;
  while (list.length > 0) {
    let curr = list.shift();
    min = Math.min(min, curr - prev);
    prev = curr;
  }

  return min;
};


// [4,2,6,1,3]
// let x = getMinimumDifference(new TreeNode(4,
//   new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5))))

// [236,104,701,null,227,null,911] // 9
let x = getMinimumDifference(
  new TreeNode(236,
    new TreeNode(104, null, new TreeNode(227)),
    new TreeNode(701, null, new TreeNode(911))))

// [1,0,48,null,null,12,49]
// let x = getMinimumDifference(
//   new TreeNode(1,
//     new TreeNode(0),
//     new TreeNode(48,
//       new TreeNode(12), new TreeNode(49))))



console.log("x")
console.log(x)
