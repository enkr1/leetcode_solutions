/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = "";
  word1 = word1.split(""), word2 = word2.split("");
  while (word1.length > 0 || word2.length > 0) {
    let curr1 = "", curr2 = "";
    console.log(word1)
    console.log(word2)
    if (word1.length > 0) {
      curr1 = word1.shift();
    }

    if (word2.length > 0) {
      curr2 = word2.shift();
    }

    str += curr1 + curr2;
  }

  return str;
};
