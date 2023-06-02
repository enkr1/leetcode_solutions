/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => { // Manacher's algorithm
  let modifiedString = '#';
  for (let i = 0; i < s.length; i++) {
    modifiedString += s[i] + '#';
  }

  const n = modifiedString.length;
  const P = new Array(n).fill(0);
  let center = 0, right = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (i <= right) {
      const mirror = 2 * center - i;
      P[i] = Math.min(right - i, P[mirror]);
    }

    let leftIndex = i - (1 + P[i]);
    let rightIndex = i + (1 + P[i]);

    while (leftIndex >= 0 && rightIndex < n && modifiedString[leftIndex] === modifiedString[rightIndex]) {
      P[i]++;
      leftIndex--;
      rightIndex++;
    }

    if (i + P[i] > right) {
      center = i;
      right = i + P[i];
    }

    count += Math.ceil(P[i] / 2);
  }

  return count;
};


// const countSubstrings = (s) => {
//   let l = 0, r = 0, count = 0;
//
//   while (l <= r) {
//     if (undefined === s[r]) {
//       l++;
//       continue;
//     }
//
//     if (isPalidrome(s.slice(l, r + 1))) {
//       count++;
//     }
//
//     r++;
//
//     if (r === s.length) {
//       l++;
//       r = l;
//     }
//   }
//
//   console.log("count")
//   console.log(count)
//
//   return count;
// }
//
// const isPalidrome = (str) => {
//   let x = 0, y = str.length - 1;
//   while (x <= y) {
//     if (str[x] !== str[y]) return false;
//     x++;
//     y--;
//   }
//
//   return true;
// }

countSubstrings("aaa")
countSubstrings("abcb")
countSubstrings("qrwrw")
