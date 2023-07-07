/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sList = s.split(""), tList = t.split(""), i = 0, len = sList.length

  // while (sList.length > 0) {
  //   let currS = sList = shift();
  console.log(sList)
  console.log(tList)
  while (tList.length > 0) {
    let currT = tList.shift();
    if (sList[0] === currT) {
      sList.shift();
    }
  }
  // }
  console.log("sList.length")
  console.log(sList.length)

  return sList.length === 0;
};

let x =
  // isSubsequence("abc", "ahbgdc")
isSubsequence("acb", "ahbgdc")

console.log("Result")
console.log(x)
