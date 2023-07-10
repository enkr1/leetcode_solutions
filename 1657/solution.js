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

  if (word1Map.size !== word2Map.size) return false

  for (let [key, value] of word1Map) {
    if (!word2Map.has(key)) return false
  }

  let l1 = Array.from(word1Map.values()).sort(), l2 = Array.from(word2Map.values()).sort()

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[i]) return false;
  }

  return true;
};
