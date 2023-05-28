/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  s = s.split("");
  console.log("result")
  console.log(validateMap(s, createMap(s), createMap(t)))
  // return validateMap(s, createMap(s), createMap(t));
}

const createMap = (char) => {
  let map = new Map();

  for (let i = 0; i < char.length; i++) {
    console.log(">")
    console.log(char[i])
    map[char[i]] = (map[char[i]] || 0) + 1;
    // map.set(char[i], ((map.get(char[i]) || 0) + 1))
    console.log(map)
  }

  // s = original, t = check word

  console.log(`char:${char}`)
  console.log(map)

  return map;
}


const validateMap = (char, map1, map2) => {
  for (let i = 0; i < char.length; i++) {
    if (map1[char[i]] !== map2[char[i]]) {
      // if (map1.get(char[i]) !== map2.get(char[i])) {
      console.log("check")
      console.log(map1)
      console.log(map2)
      return false;
    }
  }

  return true;
}


// isAnagram("car", "arc")
// isAnagram("rat", "car")
isAnagram("a", "ab")
