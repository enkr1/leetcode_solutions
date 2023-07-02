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

  let
    f1 = calculateFactors(str1.length), f2 = calculateFactors(str2.length),
    listToFindGCF = (f1.length > f2.length) ? f2 : f1, // use the shortest
    largerFactorList = (f1.length > f2.length) ? f1 : f2,
    gcf = null; // greatest common factor

  while (gcf === null) {
    let curr = listToFindGCF.shift();
    if (largerFactorList.includes(curr)) gcf = curr;
  }

  const validateByGCF = (str) => {
    let multiplier = str.length / gcf, slicedStr = str.slice(0, gcf), multipliedStr = "";
    while (multiplier > 0) {
      multipliedStr += slicedStr;
      multiplier--;
    }
    return (multipliedStr === str) ? slicedStr : "";
  }

  return validateByGCF(str1); // either one will do as long as we get the gcf
};
