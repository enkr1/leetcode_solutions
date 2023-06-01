/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minStr, sChar = s.split(""), tChar = t.split(""), trackingMap = new Map();
  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));

  if (JSON.stringify(sChar) === JSON.stringify(tChar)) return s;

  const hasVisitedAll = (map, str) => {
    if ([...map.values()].every((value) => 1 > value)) {
      if (undefined === minStr) {
        minStr = str;
      } else if (str.length > 0 && str.length < minStr.length) {
        minStr = str;
      }
    }
  }

  // if the values of the map has a 0, skip saving the min - as we know that it’s not complete
  for (let i = 0; i < sChar.length; i++) {
    if (!tChar.includes(sChar[i])) continue;
    // map in the loop, to keep the visit
    let tmpStr = sChar[i];
    let visitMap = new Map([...trackingMap]); // reset visit count every loop
    visitMap.set(sChar[i], visitMap.get(sChar[i]) - 1); // reduce the curr node

    hasVisitedAll(visitMap, tmpStr);

    for (let k = i + 1; k < sChar.length; k++) {
      if (visitMap.has(sChar[k])) visitMap.set(sChar[k], visitMap.get(sChar[k]) - 1);
      tmpStr += sChar[k];
      hasVisitedAll(visitMap, tmpStr);
    }
  }

  return minStr || "";
}
