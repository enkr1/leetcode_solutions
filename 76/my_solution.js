/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minStr, sChar = s.split(""), tChar = t.split(""), trackingMap = new Map();
  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));
  if (JSON.stringify(sChar) === JSON.stringify(tChar)) return s;
  console.log("trackingMap")
  console.log(trackingMap)
  console.log('sChar')
  console.log(sChar)
  console.log('tChar')
  console.log(tChar)

  const hasVisitedAll = (map, str) => {
    if ([...map.values()].every((value) => 1 > value)) {
      // we know all has been visited => min.
      console.log(">>>>>>>>> ALL VISITED: " + str)
      if (undefined === minStr) {
        console.log("A str:" + str)
        minStr = str;
      } else if (str.length > 0 && str.length < minStr.length) {
        console.log("B")
        minStr = str;
        console.log("smaller than! -> " + minStr + "")
      }
    } else {
      // When all has been checked (!visited), we reset to "".
      console.log("Gone thru not NONE found")
    }
  }

  // if the values of the map has a 0, skip saving the min - as we know that it’s not complete
  for (let i = 0; i < sChar.length ; i++) {
    if (!tChar.includes(sChar[i])) continue;
    console.log(`-> i:${i} => sChar[i]:${sChar[i]}`)
    // map in the loop, to keep the visit
    let tmpStr = sChar[i];
    let visitMap = new Map([...trackingMap]); // reset visit count every loop
    visitMap.set(sChar[i], visitMap.get(sChar[i]) - 1); // reduce the curr node

    hasVisitedAll(visitMap, tmpStr);

    for (let k = i + 1; k < sChar.length; k++) {
      // if (undefined === sChar[k]) continue;
      if (visitMap.has(sChar[k])) visitMap.set(sChar[k], visitMap.get(sChar[k]) - 1);
      tmpStr += sChar[k];
      // console.log(`--> k:${k} => sChar[k]:${sChar[k]}, tmpStr:${tmpStr}, minStr:${minStr}`)
      // console.log("--> visitMap")
      // console.log(visitMap)
      // save the tmpMin if all <1
      // when it is the last one and it does not have every value < 1
      hasVisitedAll(visitMap, tmpStr);
      // if ([...visitMap.values()].every((value) => 1 > value)) {
      //   // we know all has been visited => min.
      //   console.log(">>>>>>>>> ALL VISITED: " + tmpStr)
      //   if (undefined === minStr) {
      //     console.log("A tmpStr:" + tmpStr)
      //     minStr = tmpStr;
      //   } else if (tmpStr.length > 0 && tmpStr.length < minStr.length) {
      //     console.log("B")
      //     minStr = tmpStr;
      //     console.log("smaller than! -> " + minStr + "")
      //   }
      //   continue;
      // } else {
      //   // When all has been checked (!visited), we reset to "".
      //   console.log("Gone thru not NONE found")
      // }
    }
  }
  console.log(">>>>>>>>>>>>>>>>>>>>>> minStr")
  console.log(minStr)
  console.log(minStr || "")
  return minStr || "";
}
//         0123456789012
// minWindow("ADOBECODEBANC", "ABC") // BANC
minWindow("ADOBECODEBANCXYACB", "ABC") // BANC
// minWindow("a", "a") // a
// minWindow("abc", "aa") // ""
// minWindow("ab", "a") // "a"
// minWindow("ab", "b") // "b"
