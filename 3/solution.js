/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // Put into a map {index: 0, char: "a", nbAppeared: 1}
  let tmpMap = new Map(),
    charList = s.split(''),
    tmpList = [], // Deciding result
    result = [];

  var prevTmpList = [];

  for (let i = 0; i < charList.length; i++) {
    // Might need extra handle if there is upper/lower case.
    let currChar = charList[i],
      existCharMap = tmpMap.get(currChar);

    if (existCharMap) {
      if (tmpList.includes(currChar)) {
        if (tmpList.length > prevTmpList.length) prevTmpList = [...tmpList];

        let nbRemove = tmpList.indexOf(currChar);
        for (let j = 0; j <= nbRemove; j++) {
          tmpList.shift();
        }
        tmpList.push(currChar);

      } else {
        for (let j = 0; j <= tmpList.indexOf(currChar); j++) {
          tmpList.shift();
        }
        tmpList.push(currChar);
      }

      // Update values
      existCharMap.nbAppeared += 1;
      tmpMap.set(currChar, existCharMap);
    } else {
      // Set it into the map if doesnt exists
      tmpMap.set(currChar, { index: i, nbAppeared: 1 });
      tmpList.push(currChar)
    }

    result = prevTmpList.length > tmpList.length ? prevTmpList : tmpList;
  }

  return result.length;
};
