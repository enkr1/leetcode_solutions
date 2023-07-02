/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // must be the same after merging before/after, if they have common divider.
  if ((str1 + str2) !== (str2 + str1)) return "";

  const findGCD = (str) => {
    console.log(`________________________________`)
    let gcd = null, tmpGcd = str[0], l = 0, r = 1

    while (r < str.length) {
      console.log(gcd)

      let curr = str[r]

      console.log(`l:${l},r:${r},gcd:${gcd},tmpGcd:${tmpGcd}`)

      if (curr === str[l]) {
        console.log(`curr:${curr} === str[l]:${str[l]}`)
        console.log(`gcd:${gcd},tmpGcd:${tmpGcd}`)

        if (gcd !== null && tmpGcd.length !== gcd.length) {
          console.log(`EDGE:`)
          console.log(gcd)
          console.log(tmpGcd)
          return ""; // edge case when tmp gcd is not the same
        }

        gcd = tmpGcd;
        tmpGcd = curr;
        // l = r;
      } else {
        tmpGcd += curr;
      }

      console.log(`-> end tmpGcd:${tmpGcd}`)
      r++;
    }

    console.log(`-> final gcd:${gcd}, tmpGcd:${tmpGcd}`)
    console.log(gcd === null ? tmpGcd : gcd)

    return gcd === null ? tmpGcd : gcd;
  }

  let
    gcd1 = findGCD(str1),
    gcd2 = findGCD(str2);
  console.log("gcd1")
  console.log(gcd1)
  console.log("gcd2")
  console.log(gcd2)
  return gcd1 == gcd2 ? gcd1 : "";

};

let x =
  // gcdOfStrings("ABCABC", "ABC")
  // gcdOfStrings("ABABAB", "ABAB")
  gcdOfStrings("ABABABAB", "ABAB")

console.log("Result")
console.log(x)
