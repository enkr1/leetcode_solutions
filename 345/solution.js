/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u"]), stack = [];

  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i].toLocaleLowerCase())) stack.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i].toLocaleLowerCase())) s[i] = stack.pop();
  }

  return s.join("");
};
