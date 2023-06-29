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
      console.log(`word:${word[i]}, idx:${idx}`)
      if (root.children[idx] === null) root.children[idx] = new Trie();
      root = root.children[idx];
    }
    root.isEndOfWord = true;
    // console.log(this)
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    console.log(`Searching "${word}" ...`)
    const dfs = (i, node) => {
      // if (i === word.length) return false;
      console.log(`i:${i}, word:${word[i]}`)
      console.log(node)
      if (word[i] === undefined) return node.isEndOfWord;

      let child = node.children[this.getIdx(word[i])];
      if (node.isEndOfWord && i === word.length) return true;
      if (null === child) return false;
      // console.log(child)

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
      console.log(`i:${i}, prefix:${prefix[i]}`)
      if (prefix[i] === undefined) return !(null === node);

      let child = node.children[this.getIdx(prefix[i])];
      if (node.isEndOfWord && i === prefix.length) return true;
      if (null === child) return false;

      return dfs(i + 1, child);
    }

    return dfs(0, this);
  }
}




/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert("hello")
// obj.insert("a")
console.log(obj.search("helloa"))
// obj.insert("wor")
// // console.log(obj.children[22].children[14].children[17]) // 17,3
// console.log(obj.search("wor"))
// console.log(obj.search("wo"))
// console.log(obj.startsWith("z"))

// [
//   "Trie",
//   "insert",
//   "search", "search", "search",
//   "startsWith", "startsWith", "startsWith"]
// [
//   [],
//   ["hello"],
//   ["hell"], ["helloa"], ["hello"],
//   ["hell"], ["helloa"], ["hello"]]
// [
//   null,
//   null,
//   false, false, true,
//   true, false, true]
