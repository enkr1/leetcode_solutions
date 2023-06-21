/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  let ransomNoteMap = new Map(), magazineMap = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    ransomNoteMap.set(ransomNote[i], (ransomNoteMap.get(ransomNote[i]) || 0) + 1);
  }

  for (let i = 0; i < magazine.length; i++) {
    magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1);
  }

  console.log("ransomNoteMap")
  console.log(ransomNoteMap)
  console.log("magazineMap")
  console.log(magazineMap)

  // for (let [key, value] of ransomNoteMap) {
  //   if (magazineMap.has(key)) {
  //     ransomNoteMap.set(key, value - 1);
  //     // && magazineMap.get(key) === value
  //     // return true;
  //   }
  //   console.log(ransomNoteMap)
  // }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineMap.has(ransomNote[i]) && magazineMap.get(ransomNote[i]) > 0) {
      magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1)
    } else {
      return false;
    }
  }

  console.log("ransomNoteMap")
  console.log(ransomNoteMap)
  console.log("magazineMap")
  console.log(magazineMap)

  return true;
};

let x = null;
x = canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj");
x = canConstruct("aa", "ab");
x = canConstruct("aa", "aab");
console.log("Result")
console.log(x)
