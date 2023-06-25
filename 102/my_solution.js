class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (null === root) return [];

  let list = [[root.val]], children = 2, visitedChildren = 0, nullChildren = 0, level = 1, queue = [root], levelVal = [];

  while (queue.length > 0) {
    console.log(`-> level:${level}, children:${children}, visitedChildren:${visitedChildren}, nullChildren:${nullChildren}, levelVal:${levelVal}`)

    let l = queue.length, singleLevel = [];

    while (l > 0) {
      console.log("queue");
      console.log(list);
      console.log(queue);
      console.log(l);
      console.log(queue.length);

      let curr = queue.shift(), left = curr.left, right = curr.right;

      if (null !== left) {
        queue.push(left);
        singleLevel.push(left.val);
      }

      if (null !== right) {
        queue.push(right);
        singleLevel.push(right.val);
      }

      l--;
    }

    if (singleLevel.length > 0) list.push(singleLevel);
  }

  console.log(list);

  return list;
};
// const levelOrder = (root) => {
//   if (null === root) return [];
//
//   let list = [[root.val]], children = 2, visitedChildren = 0, nullChildren = 0, level = 1, queue = [root], levelVal = [];
//
//   while (queue.length > 0) {
//     let curr = queue.shift(), left = curr.left, right = curr.right;
//     console.log(`-> level:${level}, children:${children}, visitedChildren:${visitedChildren}, nullChildren:${nullChildren}, levelVal:${levelVal}`)
//     console.log(curr)
//     if (null !== left) {
//       queue.push(left);
//       visitedChildren++;
//       levelVal.push(left.val);
//     } else {
//       nullChildren++;
//     }
//
//     if (null !== right) {
//       queue.push(right);
//       visitedChildren++;
//       levelVal.push(right.val);
//     } else {
//       nullChildren++;
//     }
//
//     console.log(`--> level:${level}, children:${children}, visitedChildren:${visitedChildren}, nullChildren:${nullChildren}, levelVal:${levelVal}`)
//
//     if (children === (visitedChildren + nullChildren)) {
//
//       // if (undefined === list[level]) {
//       if (levelVal.length > 0) list[level] = levelVal;
//       // } else {
//       //   list[level] = list[level].concat(levelVal)
//       // }
//       levelVal = [];
//       children *= 2;
//       level++;
//       visitedChildren = 0;
//       nullChildren *= 2;
//     }
//   }
//
//   console.log(list);
//
//   return list;
// };

// [1,2,null,3,null,4,null,5]
let x =
  // levelOrder(
  //   new TreeNode()
  // )
  levelOrder(
    new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3,
          new TreeNode(4,
            new TreeNode(5)
          )
        )
      )
    )
  )
