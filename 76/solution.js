/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minStr, sChar = s.split(""), tChar = t.split(""), trackingMap = new Map();
  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));

  if (JSON.stringify(sChar) === JSON.stringify(tChar)) return s;

  // if the values of the map has a 0, skip saving the min - as we know that it’s not complete
  for (let i = 0; i < sChar.length; i++) {
    if (!tChar.includes(sChar[i])) continue;

    // map in the loop, to keep the visit
    let tmpStr = sChar[i];
    let visitMap = new Map([...trackingMap]); // reset visit count every loop
    visitMap.set(sChar[i], visitMap.get(sChar[i]) - 1); // reduce the curr node

    for (let k = i + 1; k < sChar.length; k++) {
      if (undefined === sChar[k]) continue;

      if (visitMap.has(sChar[k])) visitMap.set(sChar[k], visitMap.get(sChar[k]) - 1);

      tmpStr += sChar[k];

      if ((k === sChar.length - 1) && [...visitMap.values()].every((value) => 1 > value)) {
        if (undefined === minStr) {
          minStr = tmpStr;
        } else if (tmpStr.length > 0 && tmpStr.length < minStr.length) {
          minStr = tmpStr;
        }
      }
    }
  }

  return minStr || "";
}
