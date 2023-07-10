/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let word1Map = new Map(), word2Map = new Map()

  for (let i = 0; i < word1.length; i++) {
    word1Map.set(word1[i], (word1Map.get(word1[i]) ?? 0) + 1)
  }

  for (let i = 0; i < word2.length; i++) {
    word2Map.set(word2[i], (word2Map.get(word2[i]) ?? 0) + 1)
  }

  console.log(word1Map)
  console.log(word2Map)
  if (word1Map.size !== word2Map.size) return false

  // let l1 = Array.from(word1Map), l2 = Array.from(word2Map)
  // console.log(l1)
  // console.log(l2)

  // let len = word1Map.size
  // console.log("len")
  // console.log(len)
  console.log(Array.from(word1Map.values()).sort())
  console.log(Array.from(word2Map.values()).sort())
  let l1 = Array.from(word1Map.values()).sort(), l2 = Array.from(word2Map.values()).sort()

  for (let [key, value] of word1Map) {
    if (!word2Map.has(key)) return false
  }

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) return false;
  }


  console.log(word1Map)
  console.log(word2Map)

  return true;
};

let x =
  closeStrings("cabbbaeee", "aeeecccbb")
// closeStrings("cabbba", "acccbb")
// closeStrings("cabbba", "aabbss")
// closeStrings("abbzzca", "babzzcz")
// closeStrings("abbbzcf", "babzzcz")
// closeStrings("abc", "bca")

console.log("Res")
console.log(x)
