/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
  let count = 0, tmpS = ""
  s = s.split("")
  if (s[0] == "0") return -1;

  while (s.length > 0) {
    let curr = s.shift()
    tmpS += curr;
    console.log(`curr: ${curr}, tmpS: ${tmpS}`)
    console.log(`tmpS: ${tmpS}, b10: ${parseInt(tmpS, 2)}`)
    // console.log(Math.log(parseInt(tmpS, 2)) / Math.log(5))
    if ((curr === "1" && curr === s[0]) && isPowerOf5(parseInt(tmpS, 2))) {
      console.log(`--- pow5 -> tmpS: ${tmpS}`)
      count++;
      tmpS = ""
      // } else if (curr === "0" && curr === s[0]) {
    }
  }

  console.log(`> tmpS: ${tmpS}, b10: ${parseInt(tmpS, 2)}, pcount: ${count}`)
  // return count
  if (tmpS !== "" && isPowerOf5(parseInt(tmpS, 2))) count++;
  return (0 !== count) ? count : -1
};

function isPowerOf5(number) {
  const logBase5 = Math.log(number) / Math.log(5);
  return Math.abs(logBase5 - Math.round(logBase5)) < Number.EPSILON;
}

let x =
  // minimumBeautifulSubstrings("100101") // -1
  // minimumBeautifulSubstrings("1011") // 2
  // minimumBeautifulSubstrings("111") // 3
  // minimumBeautifulSubstrings("0") // -1
  // minimumBeautifulSubstrings("100111000110111") // 4
  // minimumBeautifulSubstrings("101101101111001") // 5
  // minimumBeautifulSubstrings("100111000111101") // 4
  minimumBeautifulSubstrings("101101110011101") // 5

console.log("REs")
console.log(x)

// NOTE: FAILED
