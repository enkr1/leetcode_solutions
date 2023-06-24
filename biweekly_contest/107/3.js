/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function (words) {
  let toLeftMap = new Map(), toRightMap = new Map(), string = words[0];

  for (let i = 1; i < words.length; i++) {
    let list = words[i].split('').splice(1, words[i].length - 1), val = "";
    if (toRightMap.get(words[i][0])) {
      val += toRightMap.get(words[i][0]).val;
    }

    toRightMap.set(words[i][0], { val: val + list.join(''), deleteIdx: words[i][words[i].length - 1] });
  }

  for (let i = 1; i < words.length; i++) {
    let list = words[i].split('').splice(0, words[i].length - 1), val = "";
    if (toLeftMap.get(words[i][words[i].length - 1])) {
      val += toLeftMap.get(words[i][words[i].length - 1]).val;
    }
    toLeftMap.set(words[i][words[i].length - 1], { val: list.join('') + val, deleteIdx: words[i][0] });
  }

  console.log("___0")
  console.log("toRightMap")
  console.log(toRightMap)
  console.log("toLeftMap")
  console.log(toLeftMap)

  for (let i = 1; i < words.length; i++) {
    let lastChar = string[string.length - 1];
    console.log(`lastChar:${lastChar}`);
    if (toRightMap.has(lastChar)) {
      let { val, deleteIdx } = toRightMap.get(lastChar);
      console.log(`val:${val}, deleteIdx:${deleteIdx}`);
      string += val; // right append
      console.log(toRightMap)

      toRightMap.delete(lastChar)
      toLeftMap.delete(deleteIdx)

      console.log(toRightMap)
    }
  }

  console.log(`--> post right:${string}`);

  for (let i = 1; i < words.length; i++) {
    let firstChar = string[0];
    console.log(`l -> firstChar:${firstChar}`);
    if (toLeftMap.has(firstChar)) {
      let { val, deleteIdx } = toLeftMap.get(firstChar);
      console.log(`val:${val}, deleteIdx:${deleteIdx}`);
      string = `${val}${string}`; // left append
      console.log(toLeftMap)
      toLeftMap.delete(firstChar)
      toRightMap.delete(deleteIdx)
      console.log(toLeftMap)
    }
  }
  console.log(`--> post left:${string}`);

  console.log("___1")
  console.log(toRightMap)
  console.log(toLeftMap)
  for (let [val, { val: val2 }] of toRightMap) {
    console.log(`Appending ${val}${val2}`)
    string += `${val}${val2}`
  }

  console.log("___2")
  console.log(toRightMap)
  console.log(toLeftMap)
  console.log(string)

  return string.length;
};
//
// ["ab","b"]
//


let x = null;
// x = minimizeConcatenatedLength(["aa", "ab", "bc"]) // aabc
// x = minimizeConcatenatedLength(["aaa", "c", "aba"]) // aaacaba
// x = minimizeConcatenatedLength(["daca", "cd", "efg", "abe"]) // cdacabefg
// x = minimizeConcatenatedLength(["ab", "b"]) // aaacaba
// x = minimizeConcatenatedLength(["a", "ca"]) // aaacaba
// x = minimizeConcatenatedLength(["a", "cb"]) // aaacaba
// x = minimizeConcatenatedLength(["a", "b"]) // aaacaba
x = minimizeConcatenatedLength(["a", "aa", "ba"]) // baa
console.log(x)
