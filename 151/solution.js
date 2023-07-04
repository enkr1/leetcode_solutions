/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().split(" ");
  let reversedLine = [], stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].length > 0) stack.push(s[i]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    reversedLine.push(stack[i])
  }

  return reversedLine.join(" ");
};
