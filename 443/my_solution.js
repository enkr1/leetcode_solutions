/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0, i = 0, j = 0

  console.log(chars)

  while (i < chars.length) {
    while (chars[i] === chars[j]) {
      j++;
    }

    let
      l = j - i,
      s = `${chars[i]}${(l == 1) ? "" : l}`.split("");

    console.log(`s: ${s}, s.length: ${s.length}`)

    while (s.length > 0) {
      let curr = s.shift();
      console.log(`index: ${index}, curr: ${curr}`)
      chars[index] = curr;
      index++
    }

    i = j;
    j++;

  }

  console.log(chars)

  return index;
};


let x =
  // compress(["a", "a", "b", "b", "c", "c", "c"])
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])

console.log("Result")
console.log(x)
