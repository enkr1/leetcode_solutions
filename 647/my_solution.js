/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  // init the default count = 0 // s.len
  let l = 0, r = 0, count = 0;

  // while (l <= r && r < s.length) {
  while (l <= r) {

    console.log(`l:${l}, r:${r} ?:${s.slice(l, r + 1)}`)
    if (undefined === s[r]) {
      console.log("not foudn alr")
      l++;
      continue;
    }

    if (isPalidrome(s.slice(l, r + 1))) {
      console.log(`this is a pal: ${s.slice(l, r + 1)}`)
      count++;
    }

    r++;

    if (r === s.length) {
      console.log("yo the ennd")
      l++;
      r = l;
    }
  }

  console.log("count")
  console.log(count)

  return count;
}

// fn to findPalidrome while lr
const isPalidrome = (str) => {
  let x = 0, y = str.length - 1;
  while (x <= y) {
    if (str[x] !== str[y]) return false;
    x++;
    y--;
  }

  return true;
}


countSubstrings("abc") // 3
countSubstrings("aaa") // 6
countSubstrings("qwere") // 5
countSubstrings("aba") // 4
