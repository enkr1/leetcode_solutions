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

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineMap.has(ransomNote[i]) && magazineMap.get(ransomNote[i]) > 0) {
      magazineMap.set(ransomNote[i], magazineMap.get(ransomNote[i]) - 1)
    } else {
      return false;
    }
  }

  return true;
};
