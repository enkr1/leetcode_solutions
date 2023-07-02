/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

  const findGCD = (str) => {
    let gcd = null, tmpGcd = str[0], l = 0, r = 1

    while (r < str.length) {
      let curr = str[r]

      if (curr === str[l]) {
        if (gcd !== null && tmpGcd.length !== gcd.length) return ""; // edge case when tmp gcd is not the same

        gcd = tmpGcd;
        tmpGcd = curr;
        // l = r;
      } else {
        tmpGcd += curr;
      }

      r++;
    }

    return gcd === null ? tmpGcd : gcd;
  }

  let
    gcd1 = findGCD(str1),
    gcd2 = findGCD(str2);

  return gcd1 == gcd2 ? gcd1 : "";

};
