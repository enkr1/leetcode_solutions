/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let l = -1, r = -1,
    sChar = s.split(""), tChar = t.split(""),
    trackingMap = new Map();

  tChar.forEach((item) => trackingMap.set(item, (trackingMap.get(item) || 0) + 1));
  if (JSON.stringify(sChar) === JSON.stringify(tChar)) return s;

  // if the values of the map has a 0, skip saving the min - as we know that it’s not complete
  // let sCount = sChar.length;
  for (let i = 0; i < sChar.length; i++) {
    if (!tChar.includes(sChar[i])) continue; // esc

    // map in the loop, to keep the visit
    visitMap = new Map([...trackingMap]), // reset visit count every loop
      have = 1;

    visitMap.set(sChar[i], visitMap.get(sChar[i]) - 1); // reduce the curr node

    if (have === tChar.length) {
      l = i;
      r = i;
      break;
    }

    for (let k = i + 1; k < sChar.length; k++) {
      if (visitMap.has(sChar[k])) visitMap.set(sChar[k], visitMap.get(sChar[k]) - 1);

      if (0 <= visitMap.get(sChar[k])) have++;

      if (tChar.length === have && ((r == -1 && l == -1) || ((k - i + 1) < (r - l + 1)))) {
        l = i;
        r = k;
        break;
      }
    }
  }

  return sChar.slice(l, r + 1).join('');
}
