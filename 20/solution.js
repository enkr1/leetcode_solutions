/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
  let char = str.split(""), map = new Map(), openStack = [];

  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");

  for (let i = 0; i < char.length; i++) {
    let isClosing = [")", "]", "}"].includes(char[i]);
    if (0 === openStack.length && isClosing) return false;

    if (isClosing) {
      if (map.get(openStack[openStack.length - 1]) === char[i]) {
        openStack.pop();
      } else {
        return false;
      }
    } else {
      openStack.push(char[i]);
    }
  }

  return 0 === openStack.length;
};
