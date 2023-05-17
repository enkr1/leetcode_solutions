/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  s = s.split("");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if ("]" === s[i]) {
      stack = popToOpen(stack, stack.length - 1, [])
    } else {
      stack.push(s[i])
    }
  }

  return stack.join("");
};

const popToOpen = (stack, popNb, tmp) => {
  if (0 > popNb) return stack;

  if ("[" === stack[popNb]) {
    stack.pop();
    let multiplier = [], l = stack.length - 1;

    for (let j = l; j >= 0; j--) {

      // because the numebr will never be 0 so we can use parseInt
      if (!parseInt(stack[j]) && 0 !== parseInt(stack[j])) break;

      multiplier = [...stack[j], ...multiplier];
      stack.pop();
    }

    return [...stack, ...tmp.join("").repeat(parseInt(multiplier.join(""))).split("")];
  }

  tmp = [...stack.pop(), ...tmp];

  return popToOpen(stack, popNb - 1, tmp)
}
