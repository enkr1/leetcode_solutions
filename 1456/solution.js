/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let l = 0, maxCount = 0, vowelSet = new Set(["a", "e", "i", "o", "u"]), acc = []
  s = s.split("")

  let tmpSum = 0;
  for (let i = 0; i < s.length; i++) {
    tmpSum += (vowelSet.has(s[i]) ? 1 : 0)
    acc[i] = tmpSum;
  }

  while ((l + k - 1) < s.length) {
    maxCount = Math.max(maxCount, acc[(k + l) - 1] - (acc[l - 1] ?? 0))
    l++;
  }

  return maxCount
};
