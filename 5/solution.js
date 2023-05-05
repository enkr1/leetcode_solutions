/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  s = reformat(s);
  let tmp_count = 0, highest_length = 0, center = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      left = s[i - (j + 1)];
      right = s[i + (j + 1)];

      if (left !== right) break;

      tmp_count++;

      if (tmp_count > highest_length) {
        highest_length = tmp_count;
        center = i;
      }
    }

    tmp_count = 0;
  }

  return s.substring((center - highest_length), (center + highest_length)).replace(/#/g, "");
};

const reformat = (s) => {
  let rs = "#";

  for (let char of s) {
    rs += `${char}#`;
  }

  return rs;
}
