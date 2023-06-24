

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let complement = Array({ length: words.length }).fill("");
  // console.log(map)
  // console.log(complement)

  for (let i = 0; i < words.length; i++) {
    complement[i] = words[i].split('').reverse().join('');
  }

  // console.log(map)
  // console.log(complement)

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    // console.log(`${map.get(words[i].split('').reverse().join(''))} === ${words[i]}`)
    for (let j = 0; j < complement.length; j++) {
      if (i === j) continue;
      if (complement[j] === words[i]) {
        // console.log(`${complement[j]} === ${words[i]}`)
        complement[j] = "";
        // console.log(complement)
        count++;
        break;
      }
    }

    //     if (map.get(words[i].split('').reverse().join('')) === words[i]) {
    //       count++;
    //     }
  }

  // console.log(count)
  return count / 2;
};

// ["cd", "ac", "dc", "ca", "zz"]
// ["ab", "ba", "cc"]
// ["aa", "ab"]
let x = null;
// x = maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]) // 2
// x = maximumNumberOfStringPairs(["ab", "ba", "cc"]) // 1
// x = maximumNumberOfStringPairs(["aa", "ab"]) // 0
x = maximumNumberOfStringPairs(["aa", "ab", "aa", "aa"]) // 0
console.log(x)
