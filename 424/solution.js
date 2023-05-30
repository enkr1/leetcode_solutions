/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let max = 0, maxF = 0, char = s.split(""), map = new Map(), l = 0, r = 0;

  while (r < char.length) {
    let newC = (map.get(char[r]) || 0) + 1;
    map.set(char[r], newC)
    maxF = Math.max(maxF, newC);

    if (((r - l + 1) - maxF) > k) {
      map.set(char[l], map.get(char[l]) - 1);
      l++;
    }

    max = Math.max(max, (r - l + 1));

    r++;
  }

  return max;
}
