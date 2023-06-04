// 1971. Find if Path Exists in Graph
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, e, s, d) => {
  let map = new Map();

  for (let i = 0; i < e.length; i++) {
    map.set(e[i][0], (map.get(e[i][0]) || []).concat(e[i][1]));
    map.set(e[i][1], (map.get(e[i][1]) || []).concat(e[i][0]));
  }

  const findInLayer = (list, count) => {
    if (count === n || 0 === list.length) return false;
    if (list.includes(d)) return true;

    for (let i = 0; i < list.length; i++) {
      return findInLayer(map.get(list[i]), count + 1);
    }
  }

  return (undefined === map.get(s)) ? true : findInLayer(map.get(s), 0);
};
