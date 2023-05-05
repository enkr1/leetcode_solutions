/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  original_s = s;
  s = reformat(s);

  let l = Array(s.length).fill(0), highest_length = 0, maxRight = 0, center = 0;

  console.log(`s: ${s}, l: ${l}, h: ${highest_length}, center: ${center}, right: ${maxRight}, sl: ${s.length}`);

  for (let i = 0; i < s.length; i++) {
    // left = (i * 2) - i;
    // console.log("___ : " + s[left] + ",  i: " + i + ", left: " + left)
    console.log("----> i: " + i + ", s[i]: " + s[i])
    // left
    for (let j = 0; j < i; j++) {
      console.log("---> i: " + i + ", j: " + j)
      left = s[i - (j + 1)];
      right = s[i + (j + 1)];
      console.log("left: (" + (i - (j + 1)) + ") - " + left)
      console.log("right: (" + (i + (j + 1)) + ") - " + right)

      if (left !== right) {
        console.log("break bc the first neighbour already unmatched")
        break;
      }

      console.log("ctn ...")
      // console.log(l[i])

      l[i] = l[i] + 1;
      if (l[i] > highest_length) {
        highest_length = l[i];
        center = i;
      }

      console.log(l[i])
    }

  }

  console.log("finally list of match count: " + l)
  console.log("highest_length: " + highest_length)
  console.log("center: " + center)
  s_part = s.substring((center - highest_length), (center + highest_length));
  answer = s_part.replace(/#/g, "");
  console.log(answer);
  return answer;
};

const reformat = (s) => {
  s = s.split('');
  let rs = "";

  for (let i = 0; i < s.length; i++) {
    rs += `#${s[i]}`;
  }

  return `${rs}#`;
}

longestPalindrome("NBNNBR")
// longestPalindrome("qweeeewqwe")
