class TrieNode {

  constructor() {
    const ALPHABET_LENGTH = 26;

    this.isEndOfWord = false;
    this.children = new Array(ALPHABET_LENGTH).fill(null)
  }

  getIdx(char) {
    return char.charCodeAt() - "a".charCodeAt();
  }
}


class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {

    let root = this.root;
    for (let i = 0; i < word.length; i++) {
      let idx = root.getIdx(word[i]);
      if (null === root.children[idx]) root.children[idx] = new TrieNode();
      root = root.children[idx];
    }

    root.isEndOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const dfs = (i, node) => {
      if (node.isEndOfWord && i === word.length) return true;
      if (word[i] === undefined) return false;
      let idx = node.getIdx(word[i]), nextI = i + 1;

      if (idx < 0) {
        for (let possibleChild of node.children) {
          if (possibleChild === null) continue;
          if (dfs(nextI, possibleChild)) return true;
        }

        return false;
      } else {
        let child = node.children[idx];

        if (null === child) return false;

        return dfs(nextI, child);
      }
    }

    return dfs(0, this.root);
  }
};
