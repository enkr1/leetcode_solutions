/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (1 === s.length) return s;

  s = reformat(s);

  let tmp_count = 0, highest_length = 0, maxRight = 0, center = 0;

  console.log(`s: ${s}, h: ${highest_length}, center: ${center}, right: ${maxRight}, sl: ${s.length}`);

  for (let i = 0; i < s.length; i++) {
    // left = (i * 2) - i;
    // console.log("___ : " + s[left] + ",  i: " + i + ", left: " + left)
    console.log("_________________________________")
    console.log("----> i: " + i + ", s[i]: " + s[i])

    let new_i = i;
    for (let j = 0; j < i; j++) {
      console.log("---> i: " + i + ", j: " + j)
      left = s[i - (j + 1)];
      right = s[i + (j + 1)];
      console.log("left: (" + (i - (j + 1)) + ") - " + left)
      console.log("right: (" + (i + (j + 1)) + ") - " + right)

      // if (i < maxRight) ...

      if (left !== right) {
        console.log("break when the neighbour is unmatched")
        break;
      }

      console.log("ctn ...")

      tmp_count++;

      if (tmp_count > highest_length) {
        console.log("--------> maybe highest: " + tmp_count)
        highest_length = tmp_count;
        center = i;
        maxRight = i + tmp_count;
        console.log("--------> maxRight: " + maxRight)
        // new_i = i + (tmp_count - 1);
        // console.log("new_i: " + i)
      }
    }
    // i = new_i;
    // console.log("i += tmp_count: " + (i));

    tmp_count = 0;
  }

  console.log("highest_length: " + highest_length)
  console.log("center: " + center)
  s_part = s.substring((center - highest_length), (center + highest_length));
  console.log("s_part: "+s_part)
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
// longestPalindrome("cbbd")
// longestPalindrome("ccc")
// longestPalindrome("qweeeewqwe")
