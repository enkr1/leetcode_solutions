/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
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
      return false;
    }
  }

  return true;
}


isAnagram("car", "arc")
