/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let charAppearMap = new Map(), s = []

  for (let i = 0; i < chars.length; i++) {
    charAppearMap.set(chars[i], (charAppearMap.get(chars[i]) ?? 0) + 1);
  }

  for (let [key, value] of charAppearMap) {
    if (value === 1) {
      s.push(key);
    } else {
      s.push(key);
      let keys = value.toString().split("");
      while (keys.length > 0) {
        let key = keys.shift();
        s.push(key);
      }
    }
  }

  console.log("s")
  console.log(s)
  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }

  console.log("char")
  console.log(chars)
  console.log(chars.length)
  return s.length;
};


let x =
  // compress(["a", "a", "b", "b", "c", "c", "c"])
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])

console.log("Result")
console.log(x)
