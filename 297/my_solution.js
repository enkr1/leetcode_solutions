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
  //   let storeList = [], stack = [];
  //
  //   // nlr
  //   const preorder = (node) => {
  //     storeList.push(node.val);
  //
  //     if (node.left !== null) {
  //       if (node.right !== null) {
  //         stack.push(node.right);
  //       }
  //       let tmp = node.left;
  //       preorder(tmp);
  //     } else {
  //       storeList.push(NULL_KEY);
  //
  //       if (node.right !== null) {
  //         let tmp = node.right;
  //         preorder(tmp);
  //       } else {
  //         storeList.push(NULL_KEY);
  //         if (stack.length > 0) {
  //           let parent = stack.pop();
  //           preorder(parent);
  //         }
  //       }
  //     }
  //   }
  //
  //   console.log("root")
  //   console.log(root)
  //   preorder(root);
  //   console.log(storeList);

  let l = serialize(root.left),
    r = serialize(root.right);



  return root.val + "," + l + "," + r;
  return JSON.stringify(storeList);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

  console.log("data");
  console.log(data);
  if (data === NULL_KEY) return null;
  let tree = new TreeNode(), list = data.split(",");
  console.log("list");
  console.log(list);

  const buildTree = (node) => {

    // console.log("nodeVal");
    // console.log(nodeVal);
    console.log("node");
    console.log(node);

    // if (node === null) return null;
    if (node === null) node = new TreeNode();


    // if (list)
    let curr = list.shift();
    if (curr === NULL_KEY) return null;

    node.val = parseInt(curr);
    node.left = buildTree(node.left)
    node.right = buildTree(node.right)
    // node.left = buildTree(node.left, list)
    // node.right = buildTree(node.right, list)
    // node.left = buildTree(node.left, list.shift())
    // node.right = buildTree(node.right, list.shift())
    // node.left = new TreeNode()
    // buildTree(node.left, list.shift())
    // node.right = new TreeNode()
    // buildTree(node.right, list.shift())

    return node;
  }

  buildTree(tree);
  // buildTree(tree, list.shift());

  return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
var serializeDFS = function (root) {
  const dfs = (node, str) => {
    if (node == null) {
      return str += "*,";
    } else {
      str += node.val + ",";
      str = dfs(node.left, str);
      str = dfs(node.right, str);
    }
    return str;
  }
  return dfs(root, "");
};
// 1,2,*,*,3,4,*,*,5,*,*,
// serialise
// [1,2,null,null,3,4,null,null,5,null,null,5,null,null,3,4,null,null,5,null,null,5,null,null]
let x =
  //[4,-7,-3,
  //null,null,
  //-9,-3,
  // 9, -7,
  //-4, null,
  //6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]
  serialize(

    // new TreeNode(4,
    //   new TreeNode(-7),
    //   new TreeNode(-3,
    //     new TreeNode(-9,
    //       new TreeNode(9,
    //       ),
    //       new TreeNode(-7,
    //         new TreeNode(-4,
    //           new TreeNode(6,
    //             new TreeNode(-6),
    //             new TreeNode(-6)
    //           )
    //         ),
    //         null
    //       )
    //     ),
    //     new TreeNode(-3)
    //   )
    // )

    // new TreeNode(1,
    //   new TreeNode(2),
    //   new TreeNode(3,
    //     new TreeNode(4),
    //     new TreeNode(5)
    //   )
    // )

    null

    // new TreeNode(1,
    //   null,
    //   new TreeNode(2)
    // )

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
console.log(x)
console.log("deserialise")
console.log(deserialize(x))
