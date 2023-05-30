/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
  let map = new Map(), openStack = [], char = str.split("");

  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");

  for (let i = 0; i < char.length; i++) {
    let isClosing = [")", "]", "}"].includes(char[i]);
    if (0 === openStack.length && isClosing) return false;

    console.log(`char:${char[i]}, isClosing:${isClosing}`)

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


isValid("(]")
