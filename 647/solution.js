/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  let l = 0, r = 0, count = 0;

  while (l <= r) {
    if (undefined === s[r]) {
      l++;
      continue;
    }
    if (isPalidrome(s.slice(l, r + 1))) {
      count++;
    }

    r++;

    if (r === s.length) {
      l++;
      r = l;
    }
  }

  return count;
}

const isPalidrome = (str) => {
  let x = 0, y = str.length - 1;
  while (x <= y) {
    if (str[x] !== str[y]) return false;
    x++;
    y--;
  }

  return true;
}
