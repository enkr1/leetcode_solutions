/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let l = 0, maxCount = 0, vowelSet = new Set(["a", "e", "i", "o", "u"]), acc = []
  s = s.split("")
  console.log(s)
  console.log(vowelSet)

  let tmpSum = 0;
  for (let i = 0; i < s.length; i++) {
    tmpSum += (vowelSet.has(s[i]) ? 1 : 0)
    acc[i] = tmpSum;
  }

  console.log(acc)

  while ((l + k - 1) < s.length) {
    // console.log("___")
    // console.log(acc[k - 1])
    // console.log((acc[l - 1] ?? 0))
    // console.log(acc[k - 1] - (acc[l - 1] ?? 0))
    maxCount = Math.max(maxCount, acc[(k + l) - 1] - (acc[l - 1] ?? 0))
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
