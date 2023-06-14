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
  console.log(Infinity - 1)
  console.log(1 - Infinity)
  let queue = [root], min = Infinity;

  while (queue.length > 0) {
    console.log("queue 1");
    console.log(queue);

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
    console.log("queue 2");
    console.log(queue);

    console.log(`min:${min}, q-l:${curr.val - l}, r-q:${r - curr.val}`)

    min = Math.min(min, curr.val - l, r - curr.val);
  }

  return min;
};

// [4,2,6,1,3]
let x = getMinimumDifference(new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5))))
console.log("x")
console.log(x)
