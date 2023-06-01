/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minStr = s, sChar = s.split(""), tChar = t.split(""), trackingMap = new Map(), maxHave = 0;
  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));
  if (JSON.stringify(sChar) === JSON.stringify(tChar)) return s;

  for (let i = 0; i < sChar.length; i++) {
    if (!tChar.includes(sChar[i])) continue;

    let tmpStr = sChar[i],
      visitMap = new Map([...trackingMap]),
      have = 1;
    visitMap.set(sChar[i], visitMap.get(sChar[i]) - 1);

    if (have === tChar.length) minStr = tmpStr;

    for (let k = i + 1; k < sChar.length; k++) {
      if (visitMap.has(sChar[k])) visitMap.set(sChar[k], visitMap.get(sChar[k]) - 1);
      if (0 === visitMap.get(sChar[k])) have++;

      tmpStr += sChar[k];

      if (tChar.length === have && tmpStr.length < minStr.length) minStr = tmpStr;
    }

    maxHave = Math.max(have, maxHave);
  }

  return (maxHave < tChar.length) ? "" : minStr || "";
}
