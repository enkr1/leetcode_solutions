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
  // console.log(Infinity - 1)
  // console.log(1 - Infinity)
  let queue = [root], list = [];
  while (queue.length > 0) {
    let curr = queue.shift(), left = curr.left, right = curr.right;
    list.push(curr.val);
    if (null !== left) queue.push(left);
    if (null !== right) queue.push(right);
  }

  let min = Infinity, tmpMax = 0, tmpMin = Infinity;
  // for (let i = 0; i < list.length; i++) {
  //   tmpMax = Math.max(tmpMax, list[i]);
  //   tmpMin = Math.min(tmpMin, list[i]);
  //   if (undefined !== list[i + 1]) {
  //     min = Math.min(min, Math.abs(list[i + 1] - tmpMax), Math.abs(list[i + 1] - tmpMin))
  //   }
  // }

  // bruteforce
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i === j) continue;
      min = Math.min(min, Math.abs(list[i] - list[j]))
    }
  }

  console.log(list)
  console.log(min)
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
