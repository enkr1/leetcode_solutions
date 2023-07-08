/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let l = 0, maxCount = 0, vowelSet = new Set(["a", "e", "i", "o", "u"])
  s = s.split("")
  console.log(s)
  console.log(vowelSet)

  while ((l + k - 1) < s.length) {
    let tmpCount = 0;
    for (let i = l; i < (l + k); i++) {
      if (vowelSet.has(s[i])) tmpCount++;
    }

    maxCount = Math.max(maxCount, tmpCount)

    l++;
  }

  return maxCount
};

"abciiidef", k = 3

// ['a', 'b', 'c', 'i', 'i', 'i', 'd', 'e', 'f']
let x =
  // maxVowels("abciiidef", 3)//3
  // maxVowels("aeiou", 2) //2
  maxVowels("leetcode", 3) //2

  console.log("Res")
  console.log(x)
