/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let charList = s.split(''),
    tmpList = [],
    prevTmpList = [],
    result = [];

  for (let i = 0; i < charList.length; i++) {

    if (tmpList.includes(charList[i]) && tmpList.length > prevTmpList.length) prevTmpList = [...tmpList];

    let nbRemove = tmpList.indexOf(charList[i]);
    for (let j = 0; j <= nbRemove; j++) {
      tmpList.shift();
    }

    tmpList.push(charList[i]);

    result = prevTmpList.length > tmpList.length ? prevTmpList : tmpList;
  }

  return result.length;
};
