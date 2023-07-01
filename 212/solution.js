class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = Array.from({ length: 26 }, () => null)
  }

  getIdx(char) {
    return char.charCodeAt() - "a".charCodeAt();
  }

  insert(word) {
    let char = word.split(""), root = this;
    while (char.length > 0) {
      let curr = char.shift(), idx = this.getIdx(curr);
      if (root.children[idx] === null) root.children[idx] = new TrieNode()
      root = root.children[idx];
    }
    root.isEndOfWord = true;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let foundList = [],
    visited = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false)),
    trieNode = new TrieNode(),
    foundSet = new Set()

  // dfs
  const exploreNextWord = (children, r, c, str) => {
    if (
      r < 0 || c < 0 ||
      r === board.length || c === board[0].length ||
      visited[r][c]
    ) return false;

    let childTrieNode = children[trieNode.getIdx(board[r][c])];
    str += board[r][c];

    if (childTrieNode === null) return;

    if (childTrieNode.isEndOfWord && !foundSet.has(str)) { // If it hasn't been found yet && it is the end of the word.
      foundSet.add(str)
      foundList.push(str)
    }

    visited[r][c] = true;

    let newChildren = childTrieNode.children;
    exploreNextWord(newChildren, r + 1, c, str);
    exploreNextWord(newChildren, r, c + 1, str);
    exploreNextWord(newChildren, r - 1, c, str);
    exploreNextWord(newChildren, r, c - 1, str);

    // Unmark current cell
    visited[r][c] = false;
  }

  for (let i = 0; i < words.length; i++) {
    trieNode.insert(words[i]);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      exploreNextWord(trieNode.children, r, c, "")
    }
  }

  return foundList;
};
