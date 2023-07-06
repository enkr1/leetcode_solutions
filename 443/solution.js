/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0, i = 0, j = 0

  while (i < chars.length) {
    while (chars[i] === chars[j]) {
      j++;
    }

    let
      l = j - i,
      s = `${chars[i]}${(l == 1) ? "" : l}`.split("");

    while (s.length > 0) {
      let curr = s.shift();
      chars[index] = curr;
      index++
    }

    i = j;
    j++;
  }

  return index;
};
