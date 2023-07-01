class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
const NULL_KEY = "x";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) return NULL_KEY;
  return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === NULL_KEY) return null;
  let tree = new TreeNode(), list = data.split(",");

  const buildTree = (node) => {
    if (node === null) node = new TreeNode();

    let curr = list.shift();
    if (curr === NULL_KEY) return null;

    node.val = parseInt(curr);
    node.left = buildTree(node.left)
    node.right = buildTree(node.right)
    return node;
  }

  buildTree(tree);

  return tree;
};
