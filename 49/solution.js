/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (list) => {
  // result,
  // shift -> for i & k=i+1
  // twice isAnagram just to check
  // if we find one -> splice(index, 1)
  // -> group.push(item) // until the end of the list
  // until []
  // let x = processWords(list, []);
  // console.log("x")
  // console.log(x)
  return processWords(list, []);
}

const areTheyAnagrams = (word1, word2) => {
  let char1 = (word1 || "0").split(""),
    char2 = (word2 || "0").split("");

  if (undefined === word2 || (word1 && word2 && (word1.length !== word2.length))) return false;


  let map1 = createAnagramMap(char1), map2 = createAnagramMap(char2);

  for (let i = 0; i < char1.length; i++) {
    if (map1.get(char1[i]) !== map2.get(char1[i])) return false;
  }

  return true;
}

const createAnagramMap = (char) => {
  let map = new Map();

  for (let i = 0; i < char.length; i++) {
    map.set(char[i], (map.has(char[i]) ? (map.get(char[i]) + 1) : 1))
  }

  return map;
}

const processWords = (list, groupList) => {
  if (0 === list.length) {
    return groupList;
  }

  let curr = list.shift(), tmpList = [...list], group = [];
  group.push(curr);

  while (0 < list.length) {
    let next = list.shift();

    if (areTheyAnagrams(curr, next)) {
      group.push(next);
    }
  }

  // Remove from tmpList that are added into the group
  tmpList = tmpList.filter((elem) => {
    return !group.includes(elem);
  })

  // process for groupList
  groupList.push(group);

  return processWords(tmpList, groupList);
}
