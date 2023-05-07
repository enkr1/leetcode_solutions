/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let newString = reformat(s),
    P = Array(newString.length).fill(0),
    center = 0,
    rightBoundry = 0;

  for (let i = 0; i < newString.length; i++) {
    let mirrorIndex = center - (i - center);
    // console.log("mirrorIndex: " + mirrorIndex)

    if (i < rightBoundry) {
      P[i] = Math.min(rightBoundry - i, P[mirrorIndex])
      console.log(newString[i])
      console.log(`i < rightBoundry - P[${i}]: ` + P[i])
    }
    let left = i - (P[i] + 1);
    let right = i + (P[i] + 1);
    console.log(`P[i]: ${P[i] + 1}, left: ${left}, right: ${right}`)

    while (right < newString.length && left >= 0 && newString[left] === newString[right]) {
      P[i]++;
      left--;
      right++;
    }

    if (i + P[i] > rightBoundry) {
      center = i;
      rightBoundry = i + P[i];
    }

  }

  // console.log(Math.max(...P))
  // console.log(P.indexOf())

  let
    max_length = Math.max(...P),
    loc = P.indexOf(Math.max(...P));
  // console.log(newString.substring((loc - max_length), (loc + max_length)).split("#").join(""))

  return newString.substring((loc - max_length), (loc + max_length)).split("#").join("");
};

const reformat = (s) => {
  s = s.split('');
  let rs = "";

  for (let i = 0; i < s.length; i++) {
    rs += `#${s[i]}`;
  }

  return `${rs}#`;
}

// longestPalindrome("abbc")
longestPalindrome("NBNNBR")
