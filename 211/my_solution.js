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
      // console.log(word[i].charCodeAt() - "a".charCodeAt())
      let idx = root.getIdx(word[i]);
      if (null === root.children[idx]) root.children[idx] = new TrieNode();
      root = root.children[idx];
    }

    root.isEndOfWord = true;
    // console.log(this.root)
    // console.log(this.root.children[3])
    // console.log(this.root.children[3].children[0])
    // console.log(this.root.children[3].children[0].children)
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const dfs = (i, node) => {
      console.log(`word:${word}, i:${i}, l:${word.length}`)
      if (node.isEndOfWord && i === word.length) return true;
      if (word[i] === undefined) return false;
      let idx = node.getIdx(word[i]), nextI = i + 1;

      console.log(`node.getIdx(word[i]): ${node.getIdx(word[i])}`)

      if (idx < 0) {
        console.log("word[i]")
        console.log(word[i])
        // console.log(node.children)

        for (let possibleChild of node.children) {
          if (possibleChild === null) continue;

          console.log("possibleChild")
          console.log(possibleChild)
          if (dfs(nextI, possibleChild)) return true;
        }
        console.log("??????")
        // all null
        return false;
      } else {
        let child = node.children[idx];
        console.log("child")
        console.log(child)

        if (null === child) return false;

        return dfs(nextI, child);
      }
    }

    return dfs(0, this.root);
  }
};

// let tn = new TrieNode();
// tn.insert("dad")
// tn.insert("daddy")
// console.log(tn.children[3])
// console.log(tn.children[3].children[0])
let wd = new WordDictionary();

wd.addWord("at")
wd.addWord("and")
wd.addWord("an")
wd.addWord("add")
console.log(wd.search("a"))
console.log(wd.search(".at"))
wd.addWord("bat")
console.log(wd.search(".at"))

// for (word of [".at", "an.", "a.d.", "b.", "a.d", "."]) {
//   console.log(wd.search(word))
//
//   console.log("word")
//   console.log(word)
// }
// wd.addWord("a")
// wd.addWord("ab")
// console.log(wd.root.children)



// console.log(wd.search("a"))
// console.log(wd.search("a."))
// console.log(wd.search("ab"))
// console.log(wd.search(".a"))
// console.log(wd.search(".b"))
// console.log(wd.search("ab."))
// console.log(wd.search("."))
// console.log(wd.search(".."))

// wd.addWord("a")
// wd.addWord("a")

// wd.addWord("dad")
// wd.addWord("mad")
// wd.addWord("pad")

// console.log("Result")
// console.log(wd.search(".")) // t
// console.log(wd.search("a")) // t
// console.log(wd.search("aa"))
// console.log(wd.search("a")) // t
// console.log(wd.search(".a"))
// console.log(wd.search("a."))
// console.log(wd.search("a"))

// [
//   "WordDictionary",
//   "addWord", "addWord", "addWord", "addWord",
//   "search", "search",
//   "addWord",
//   "search", "search", "search", "search", "search", "search"
// ]
// [
//   [],
//   ["at"], ["and"], ["an"], ["add"],
//   ["a"], [".at"],
//   ["bat"],
//   [".at"], ["an."], ["a.d."], ["b."], ["a.d"], ["."]
// ]
