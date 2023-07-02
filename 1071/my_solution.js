/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // must be the same after merging before/after, if they have common divider.
  if ((str1 + str2) !== (str2 + str1)) return "";


  const calculateFactors = (n) => {
    let factors = []

    for (let i = n; i > 0; i--) { // <= to include itself or start from the back to get the reversed version
      if ((n % i) === 0) factors.push(i)
    }

    return factors;
  }

  let f1 = calculateFactors(str1.length), f2 = calculateFactors(str2.length), greatestCommonFactor = 0

  let listToFindGCF = (f1.length > f2.length) ? f2 : f1; // use the shortest
  let largerFactorList = (f1.length > f2.length) ? f1 : f2;
  let gcf = null; // greatest common factor

  console.log(`-> f1: ${f1}, f2: ${f2}, gcf: ${gcf}`)
  while (gcf === null) {
    let curr = listToFindGCF.shift();
    if (largerFactorList.includes(curr)) gcf = curr;
  }

  let multiplier = ((str2.length > str1.length) ? str2.length : str1.length) / gcf;
  console.log(`--> f1: ${f1}, f2: ${f2}, gcf: ${gcf}`)

  // get the part
  // validate by their multiplier
  const validateByGCF = (str) => {
    let multiplier = str.length / gcf;
    console.log(`---> multiplier: ${multiplier}`)
    // NOTE: slice is inclusive
    let slicedStr = str.slice(0, gcf), multipliedStr = "";
    while (multiplier > 0) {
      multipliedStr += slicedStr;
      multiplier--;
    }
    console.log(`str: ${str}, slicedStr: ${slicedStr}, mstr: ${multipliedStr}`)
    return (multipliedStr === str) ? slicedStr : "";
  }

  return validateByGCF(str1); // either one will do as long as we get the gcf
  let gcd1 = validateByGCF(str1), gcd2 = validateByGCF(str2);
  // return (gcd1===gcd2)?


};

let x =
  gcdOfStrings("ABCABC", "ABC")
// gcdOfStrings("ABABAB", "ABAB")
// gcdOfStrings("ABCDABCDABCDABCD", "ABCDABCD")
// gcdOfStrings("ABABABAB", "ABAB")

console.log("Result")
console.log(x)
