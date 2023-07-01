/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = "", processWord = [], appendWord = []

  word1 = word1.split(""), word2 = word2.split("");
  // use the short one to process
  // if (word1.length <= word2.length) {
  processWord = word1;
  appendWord = word2;
  // } else {
  //   processWord = word2;
  //   appendWord = word1;
  // }

  for (let i = 0; i < word1.length; i++) {
    console.log("word1")
    console.log(word1[i])
    str += word1[i];
    if (word2.length > 0) str += word2.shift();
  }

  console.log("str")
  console.log(str)

  str += word2.join("");

  //   while (word1.length > 0 || word2.length > 0) {
  //     let curr1 = "", curr2 = "";
  //     console.log(word1)
  //     console.log(word2)
  //     if (word1.length > 0) {
  //       curr1 = word1.shift();
  //     }
  //
  //     if (word2.length > 0) {
  //       curr2 = word2.shift();
  //     }
  //
  //     str += curr1 + curr2;
  //   }

  return str;
};

let x =
  // mergeAlternately("abc", "pqr")
  mergeAlternately("ab", "pqrs")
  // mergeAlternately("abcd", "pq")

console.log("Res")
console.log(x)
