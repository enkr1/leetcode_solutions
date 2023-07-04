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
  console.log("stack")
  console.log(stack)

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i].toLocaleLowerCase())) {
      console.log(`s[i]: ${s[i]}`)
      s[i] = stack.pop();
    }
  }

  return s.join("");
};
let x=
reverseVowels("hello")
console.log("Result")
console.log(x)
