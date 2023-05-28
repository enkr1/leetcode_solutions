/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  s = s.split("");
  return validateMap(s, createMap(s), createMap(t));
}


const createMap = (char) => {
  let map = new Map();

  for (let i = 0; i < char.length; i++) {
    map.set(char[i], ((map.get(char[i]) || 0) + 1))
  }

  return map;
}


const validateMap = (char, map1, map2) => {
  for (let i = 0; i < char.length; i++) {
    if (map1.get(char[i]) !== map2.get(char[i])) return false;
  }

  return true;
}
