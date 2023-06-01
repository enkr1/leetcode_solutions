/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minStr = s, sChar = s.split(""), tChar = t.split(""), trackingMap = new Map(), l = 0, r = 0;
  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));

  console.log("trackingMap")
  console.log(trackingMap)
  console.log('sChar')
  console.log(sChar)
  console.log('tChar')
  console.log(tChar)

  let tmpStr = "", visitMap = new Map([...trackingMap])
  while (r <= sChar.length) {
    console.log(`-> l:${l}, r:${r}`)
    console.log("tmpStr")
    console.log(tmpStr)



    if (!tChar.includes(sChar[l])) {
      console.log("A")
      l++;
      r++;
    } else {
      console.log("B")
      if (visitMap.has(sChar[r])) visitMap.set(sChar[r], visitMap.get(sChar[r]) - 1);

      tmpStr += sChar[r];

      // Save when map all values are 0
      if ([...visitMap.values()].every((value) => 1 > value) && tmpStr.length < minStr.length) {
        minStr = tmpStr;
        tmpStr = "";
        console.log("WQLNEKWEQLKEKQWEK new min")
        console.log(minStr)
      }

      r++;
      // if ([...visitMap.values()].every((value) => 1 > value)) {
    }
  }

  console.log(">>>>>>>>>>>>>>>>>>>>>> minStr")
  console.log(minStr)
  console.log(minStr || "")

  return minStr;
}
//         0123456789012
// minWindow("ADOBECODEBANC", "ABC") // BANC
minWindow("ADOBECODEBANCXY", "ABC") // BANC
// minWindow("a", "a") // a
// minWindow("abc", "aa") // ""
// minWindow("ab", "a") // "a"
