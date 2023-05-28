// 49. Group Anagrams

// ["eat","tea","tan","ate","nat","bat"]
// [["bat"],["nat","tan"],["ate","eat","tea"]]

// [""]
//[[""]]

// ["a"]
// [["a"]]

const groupAnagrams = (list) => {
  // result,
  // shift -> for i & k=i+1
  // twice isAnagram just to check
  // if we find one -> splice(index, 1)
  // -> group.push(item) // until the end of the list
  // until []
  processWords(list, [], []);
}

const areTheyAnagrams = (word1, word2) => {
  if (undefined === word2) return false;

  let char = word1.split(""), map1 = createAnagramMap(char), map2 = createAnagramMap(word2.split(""));
  // {“e” => 1, “a” => 1, “t” => 1}
  for (let i = 0; i < char.length; i++) {
    if (map1.get(char[i]) !== map2.get(char[i])) return false;
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

const processWords = (list, groupList, group) => {
  if ([] === list) {
    return groupList;
  }

  let curr = list.shift(); //  ["eat","tea","tan","ate","nat","bat"] ->  ["tea","tan","ate","nat","bat"]
  let tmpList = list;

  while ([] !== list) {
    let next = list.shift();
    if (areTheyAnagrams(curr, next)) group.push(next);
  }

  // remove from tmpList that are added into the group
  tmpList.filter((item) => {
    return !group.includes(item);
  })

  // process for groupList
  groupList.push(group);

  return processWords(tmpList, groupList, group);
}
