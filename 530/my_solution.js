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
  let queue = [root], min = Infinity, rootVal = root.val;

  while (queue.length > 0) {
    // console.log("queue 1");
    // console.log(queue);

    let curr = queue.shift();
    console.log("Processing");
    console.log(curr);
    let l = -Infinity, r = Infinity;
    if (null !== curr.left) {
      l = curr.left.val;
      queue.push(curr.left);
    }

    if (null !== curr.right) {
      r = curr.right.val;
      queue.push(curr.right);
    }
    // console.log("queue 2");
    // console.log(queue);

    console.log(`>>>> min:${min}, l:${l}, r:${r}, Q-l:${curr.val - l}, r-Q:${r - curr.val}, R-l:${rootVal - l}, r-R:${r - rootVal}`)

    min = Math.min(min, curr.val - l, r - curr.val, Math.abs(rootVal - l), Math.abs(r - rootVal));
    console.log(">>>>>> Min:" + min)
  }

  return min;
};

// [4,2,6,1,3]
// let x = getMinimumDifference(new TreeNode(4,
//   new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5))))

// [236,104,701,null,227,null,911]
// let x = getMinimumDifference(
//   new TreeNode(236,
//     new TreeNode(104, null, new TreeNode(227)),
//     new TreeNode(701, null, new TreeNode(911))))

// [1,0,48,null,null,12,49]
let x = getMinimumDifference(
  new TreeNode(1,
    new TreeNode(0),
    new TreeNode(48,
      new TreeNode(12), new TreeNode(49))))



console.log("x")
console.log(x)
