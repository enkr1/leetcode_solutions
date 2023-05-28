const processAlmostAnagramPair = (list) => {
  let result = new Map();

  for (let i = 0; i < list.length; i++) {
    for (let k = 0; k < list.length; k++) {
      if (i !== k) { // Ignore the same node
        let curr = list[i];
        result.set(curr,
          (result.has(curr) ? result.get(curr) : 0) + (isAlmostAnagram(curr, list[k]) ? 1 : 0))
      }
    }
  }

  return result;
}

const isAlmostAnagram = (item1, item2) => {
  if (item1.length !== item2.length) return null;

  let char = item1.split(""), count = 0;
  let map1 = createMap(item1), map2 = createMap(item2);

  for (let i = 0; i < char.length; i++) {
    // Here is a trick, as long as they have the same value AND ONLY if both of them have values (appeared) more than 0.
    // As we are doing deduction below - this is to handle cases like repeating character.
    if ((map1.has(char[i]) && map2.has(char[i]))
      && (0 < map1.get(char[i])
        && 0 < map2.get(char[i]))
    ) {
      map1.set(char[i], map1.get(char[i]) - 1)
      map2.set(char[i], map2.get(char[i]) - 1)
      count++;
    }
  }

  // Almost anagram => -1 | 1 word different
  return (1 === (char.length - count));
}

const createMap = (item) => {
  let map = new Map();
  if (undefined === item) return map;

  let char = item.split("");

  for (let i = 0; i < char.length; i++) {
    map.set(char[i], ((map.has(char[i])) ? map.get(char[i]) : 0) + 1)
  }

  return map;
}

processAlmostAnagramPair(["race", "beat", "brass", "grass", "sabre", "back", "chat", "cabs", "saga", "pack"]);
