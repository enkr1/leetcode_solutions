/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let charList = s.split(''),
    tmpList = [],
    result = [],
    prevTmpList = [];

  for (let i = 0; i < charList.length; i++) {
    let currChar = charList[i];

    if (tmpList.includes(currChar) && tmpList.length > prevTmpList.length) prevTmpList = [...tmpList];

    let nbRemove = tmpList.indexOf(currChar);
    for (let j = 0; j <= nbRemove; j++) {
      tmpList.shift();
    }

    tmpList.push(currChar);

    result = prevTmpList.length > tmpList.length ? prevTmpList : tmpList;
  }

  return result.length;
};
