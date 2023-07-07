/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sList = s.split(""), tList = t.split("")

  while (tList.length > 0) {
    let currT = tList.shift();
    if (sList[0] === currT) {
      sList.shift();
    }
  }

  return sList.length === 0;
};
