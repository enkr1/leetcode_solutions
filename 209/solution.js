class Trie {
  constructor() {
    const LENGTH = 26;
    this.isEndOfWord = false;
    this.children = new Array(LENGTH).fill(null);
  }

  getIdx(char) {
    return char.charCodeAt() - "a".charCodeAt();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let root = this;
    for (let i = 0; i < word.length; i++) {
      let idx = this.getIdx(word[i]);
      if (root.children[idx] === null) root.children[idx] = new Trie();
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
      if (word[i] === undefined) return node.isEndOfWord;

      let child = node.children[this.getIdx(word[i])];
      if (node.isEndOfWord && i === word.length) return true;
      if (null === child) return false;

      return dfs(i + 1, child);
    }

    return dfs(0, this);
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const dfs = (i, node) => {
      if (prefix[i] === undefined) return !(null === node);

      let child = node.children[this.getIdx(prefix[i])];
      if (node.isEndOfWord && i === prefix.length) return true;
      if (null === child) return false;

      return dfs(i + 1, child);
    }

    return dfs(0, this);
  }
}
