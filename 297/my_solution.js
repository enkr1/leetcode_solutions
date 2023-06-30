class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let storeList = [[], []], stack = [];

  // nlr
  const preorder = (node) => {
    if (node === null) return;
    // console.log("node")
    // console.log(node)
    // console.log(storeList)
    storeList[0].push(node.val);

    if (node.left !== null) {
      if (node.right !== null) {
        stack.push(node.right);
      }
      let tmp = node.left;
      preorder(tmp);
    } else {
      if (node.right !== null) {
        let tmp = node.right;
        preorder(tmp);
      } else if (stack.length > 0) {
        let parent = stack.pop();
        console.log("parent")
        console.log(parent)
        preorder(parent);
      }
    }
  }

  console.log("root")
  console.log(root)
  preorder(root);
  console.log("________________________________")

  // lnr
  stack = [];
  const inorder = (node) => {
    if (node === null) return;

    console.log(`curr:${node.val}`)
    if (node.left !== null) {
      stack.push(node);
      inorder(node.left);
    } else {
      storeList[1].push(node.val);
      if (node.right !== null) {
        inorder(node.right)
      } else if (stack.length > 0) {
        // storeList[1].push(node.val);
        let parent = stack.pop();

        console.log("stack")
        console.log(stack)
        console.log("parent")
        console.log(parent)
        parent.left = null;
        inorder(parent);
      }
    }
  }

  inorder(root);
  console.log("stack")
  console.log(stack)

  console.log(storeList);

  return JSON.stringify(storeList);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let deserialisedTree = new TreeNode();
  let [preorder, inorder] = JSON.parse(data);
  console.log("parsedData")
  // start w pre
  // pre: [4, 2, 1, 5, 3]
  // in: [1, 2, 3, 4, 5]
  console.log("pre:" + preorder)
  console.log("in:" + inorder)


  const constructTree = (po, io) => {

    console.log("po:" + po)
    console.log("io:" + io)
    let curr = po[0], inorderIdx = io.indexOf(curr);

    console.log(`1idx:${inorderIdx}`)
    if (io.filter(item => item === curr).length > 1) inorderIdx = io.indexOf(curr, inorderIdx + 1);
    // if (inorderIdx === 0 && io.length > 1) inorderIdx = io.indexOf(curr, inorderIdx + 1);
    console.log(`2idx:${inorderIdx}`)
    if (inorderIdx === -1) return null;
    // deserialisedTree.val = curr; // idx
    let tmpPo = [...po];
    let tmpIo = [...io];
    // console.log("l")
    // console.log(po.splice(1, inorderIdx)) // exclusive
    // console.log(io.splice(0, inorderIdx))
    // console.log("r")
    // console.log(tmpPo.splice(inorderIdx + 1, tmpPo.length - 1))
    // console.log(tmpIo.splice(inorderIdx + 1, tmpIo.length - 1))

    return new TreeNode(curr,
      constructTree(po.splice(1, inorderIdx), io.splice(0, inorderIdx)),
      constructTree(tmpPo.splice(inorderIdx + 1, tmpPo.length - 1), tmpIo.splice(inorderIdx + 1, tmpIo.length - 1))
    )
    // return deserialisedTree;
    // deserialisedTree.right = constructTree(); // idx

    // console.log("inorderIdx")
    // console.log(inorderIdx)
  }

  console.log("deserialisedTree")

  return constructTree(preorder, inorder);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let x =
  serialize(
    new TreeNode(1,
      null,
      new TreeNode(2)
    )

    // new TreeNode(3,
    //   new TreeNode(2, new TreeNode(3)),
    //   new TreeNode(4)
    // )

    // new TreeNode(4,
    //   new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    //   new TreeNode(5)
    // )

    //   new TreeNode(4,
    //     new TreeNode(1),
    //     new TreeNode(2)
    //   ),
    //   new TreeNode(5)
    // ),
    // new TreeNode(4, new TreeNode(1), new TreeNode(2))
  )

console.log("serialise")
console.log(deserialize(x))
