/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  // Put into a map {index: 0, char: "a", nbAppeared: 1}
  let tmpMap = new Map(),
    charList = s.split(''),
    tmpResult = [], // Deciding result
    result = [];

  for (let i = 0; i < charList.length; i++) {
    // Might need extra handle if there is upper/lower case.
    let currChar = charList[i],
      existCharMap = tmpMap.get(currChar);

    if (existCharMap) {
      tmpResult = [currChar]; // Reset the tmp result

      // Update values
      existCharMap.nbAppeared += 1;
      tmpMap.set(currChar, existCharMap);
    } else {
      // Set it into the map if doesnt exists
      tmpMap.set(currChar, { index: i, nbAppeared: 1 })
      tmpResult.push(currChar)
    }

    if (tmpResult.length > result.length) result = tmpResult;
  }


  console.log("final output:")
  console.log(tmpMap)
  console.log(result.join(""))
  return result.join("");
};

// lengthOfLongestSubstring("abcabcbb") // abc
// lengthOfLongestSubstring("bbbbb") // b
// lengthOfLongestSubstring("pwwkew") // wke
