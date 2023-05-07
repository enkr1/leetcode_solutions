/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let tmpMap = new Map(),
    charList = s.split(''),
    tmpList = [], // Deciding result
    result = [],
    prevTmpList = [];

  for (let i = 0; i < charList.length; i++) {
    // Might need extra handle if there is upper/lower case.
    let currChar = charList[i],
      existCharMap = tmpMap.get(currChar);

    if (tmpList.includes(currChar) && tmpList.length > prevTmpList.length) {
      console.log("------------- replacing bc >");
      prevTmpList = [...tmpList];
    }

    let nbRemove = tmpList.indexOf(currChar);
    for (let j = 0; j <= nbRemove; j++) {
      tmpList.shift();
    }
    tmpList.push(currChar);

    //     if (existCharMap) {
    //       if (tmpList.includes(currChar)) {
    //         console.log("------------- existing char, new tmp!!!");
    //
    //         // console.log(prevTmpList)
    //         // console.log(tmpList)
    //
    //         if (tmpList.length > prevTmpList.length) {
    //           console.log("------------- replacing bc >");
    //           prevTmpList = [...tmpList];
    //         } else {
    //           console.log("------------- idc");
    //
    //         }
    //
    //         let nbRemove = tmpList.indexOf(currChar);
    //         for (let j = 0; j <= nbRemove; j++) {
    //           console.log("shift loop")
    //           tmpList.shift();
    //         }
    //         tmpList.push(currChar);
    //
    //         // console.log("QHIUSJHHJDSAKHJDKJHASDKJHDKJSAD")
    //         // console.log(prevTmpList)
    //         // console.log(tmpList)
    //
    //         // if (tmpList[tmpList.length - 1] == currChar) {
    //         //   tmpList = [currChar]
    //         // } else {
    //         //   tmpList = [tmpList[tmpList.length - 1], currChar]; // new list
    //         // }
    //       } else {
    //         for (let j = 0; j <= tmpList.indexOf(currChar); j++) {
    //           console.log("shift loop")
    //           tmpList.shift();
    //         }
    //         tmpList.push(currChar);
    //       }
    //
    //       // Update values
    //       existCharMap.nbAppeared += 1;
    //       tmpMap.set(currChar, existCharMap);
    //       // }
    //     } else {
    //       // Set it into the map if doesnt exists
    //       tmpMap.set(currChar, { index: i, nbAppeared: 1 });
    //       tmpList.push(currChar)
    //     }

    // console.log("____________________ output each loop ____________________")
    // console.log("tmpList")
    // console.log(tmpList)
    // console.log("prevTmpList")
    // console.log(prevTmpList)

    result = prevTmpList.length > tmpList.length ? prevTmpList : tmpList;
  }

  console.log("final output:")
  console.log(tmpMap)
  console.log(result)
  console.log(result.length)
  // console.log("charList output:")
  // console.log(charList.length)
  // console.log(charList[0])
  // console.log(charList[1])
  // console.log(charList[0] !== charList[1])
  // console.log(result.length)

  return result.length;
};

// lengthOfLongestSubstring("abcabcbb") // abc
// lengthOfLongestSubstring("bbbbb") // b
lengthOfLongestSubstring("pwwkew") // wke
// lengthOfLongestSubstring("dvdf") // vdf
// lengthOfLongestSubstring("aa") // 1
// lengthOfLongestSubstring(" ") // 1
// lengthOfLongestSubstring("au") // 2
// lengthOfLongestSubstring("cdd") // 1
// lengthOfLongestSubstring("anviaj") // 5
// lengthOfLongestSubstring("ckilbkd") // 5
