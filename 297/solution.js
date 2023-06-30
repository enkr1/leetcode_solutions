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
        preorder(parent);
      }
    }
  }

  preorder(root);

  // lnr
  stack = [];
  const inorder = (node) => {
    if (node === null) return;

    if (node.left !== null) {
      stack.push(node);
      inorder(node.left);
    } else {
      storeList[1].push(node.val);
      if (node.right !== null) {
        inorder(node.right)
      } else if (stack.length > 0) {
        let parent = stack.pop();

        parent.left = null;
        inorder(parent);
      }
    }
  }

  inorder(root);

  return JSON.stringify(storeList);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let [preorder, inorder] = JSON.parse(data);

  const constructTree = (po, io) => {
    let curr = po[0], inorderIdx = io.indexOf(curr);

    if (io.filter(item => item === curr).length > 1) inorderIdx = io.indexOf(curr, inorderIdx + 1);
    // if (inorderIdx === 0 && io.length > 1) inorderIdx = io.indexOf(curr, inorderIdx + 1);
    if (inorderIdx === -1) return null;
    let tmpPo = [...po];
    let tmpIo = [...io];
    return new TreeNode(curr,
      constructTree(po.splice(1, inorderIdx), io.splice(0, inorderIdx)),
      constructTree(tmpPo.splice(inorderIdx + 1, tmpPo.length - 1), tmpIo.splice(inorderIdx + 1, tmpIo.length - 1))
    )
  }


  return constructTree(preorder, inorder);
};
