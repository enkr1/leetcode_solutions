/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minStr = s, sChar = s.split(""), tChar = t.split(""), trackingMap = new Map(), maxHave = 0;
  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));
  if (JSON.stringify(sChar) === JSON.stringify(tChar)) return s;
  // console.log("trackingMap")
  // console.log(trackingMap)
  // console.log('sChar')
  // console.log(sChar)
  // console.log('tChar')
  // console.log(tChar)

  // const hasVisitedAll = (map, str) => {
  //   if ([...map.values()].every((value) => 1 === value)) {
  //     // we know all has been visited => min.
  //     console.log(">>>>>>>>> ALL VISITED: " + str)
  //     // if (undefined === minStr) {
  //     //   console.log("A str:" + str)
  //     //   minStr = str;
  //     // } else if (str.length > 0 && str.length < minStr.length) {
  //     if (str.length < minStr.length) {
  //       console.log("B")
  //       minStr = str;
  //       console.log("smaller than! -> " + minStr + "")
  //     }
  //   } else {
  //     // When all has been checked (!visited), we reset to "".
  //     console.log("Gone thru not NONE found")
  //   }
  // }

  // if the values of the map has a 0, skip saving the min - as we know that it’s not complete
  for (let i = 0; i < sChar.length; i++) {
    if (!tChar.includes(sChar[i])) {
      console.log("ESC:" + sChar[i])
      continue;
    }

    console.log(`-> i:${i} => sChar[i]:${sChar[i]}`)
    // map in the loop, to keep the visit
    let tmpStr = sChar[i],
      visitMap = new Map([...trackingMap]), // reset visit count every loop
      have = 1;
    visitMap.set(sChar[i], visitMap.get(sChar[i]) - 1); // reduce the curr node

    if (have === tChar.length) minStr = tmpStr;

    for (let k = i + 1; k < sChar.length; k++) {
      console.log(`--> k:${k} => sChar[k]:${sChar[k]}, tmpStr:${tmpStr}, minStr:${minStr}`)
      if (visitMap.has(sChar[k])) visitMap.set(sChar[k], visitMap.get(sChar[k]) - 1);
      console.log("curr val")
      console.log(visitMap.get(sChar[k]))
      if (0 === visitMap.get(sChar[k])) have++;

      tmpStr += sChar[k];

      // save the tmpMin if all <1
      // when it is the last one and it does not have every value < 1
      // hasVisitedAll(visitMap, tmpStr);
      if (tChar.length === have) {
        if (tmpStr.length < minStr.length) {
          console.log("FOUNDDD DDDDSKALKADSLKJADSJKLS")
          minStr = tmpStr;
        }
      }

      // console.log("--> visitMap")
      // console.log(visitMap)
      console.log("have")
      console.log(have)
    }

    maxHave = Math.max(have, maxHave);
  }


  console.log(">>>>>>>>>>>>>>>>>>>>>> minStr")
  console.log(minStr)
  console.log(minStr || "")
  console.log((maxHave < tChar.length) ? "" : minStr)

  return minStr || "";
}
//         0123456789012
// minWindow("ADOBECODEBANC", "ABC") // BANC
// minWindow("ADOBECODEBANCXYA", "ABC") // BANC
// minWindow("ADOBECODEBANCXYACB", "ABC") // ACB
// minWindow("a", "a") // a
// minWindow("abc", "aa") // ""
// minWindow("ab", "a") // "a"
// minWindow("ab", "b") // "b"
// minWindow("bbaa", "aba") // "b"
