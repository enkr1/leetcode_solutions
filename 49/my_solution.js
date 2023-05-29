/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (list) => {
  console.log("".charCodeAt(0) || 0)
  console.log("a".charCodeAt(0))
  console.log("z".charCodeAt(0))
  console.log("z".charCodeAt(0) - "a".charCodeAt(0))
  console.log([0] * 26)
  console.log([23, 45, 1] == [23, 45, 1])

  let map = new Map();
  for (let i = 0; i < list.length; i++) {
    let char = list[i].split(""), asciiCountList = Array(26).fill(0);

    // will break for empty case, maybe 27 !! NOT, it just escape so it store a full [0]*26
    for (let c = 0; c < char.length; c++) {
      console.log(`${char[c]}:char[c].charCodeAt(0):${char[c].charCodeAt(0)}, x:${25 - ("z".charCodeAt(0) - char[c].charCodeAt(0))}`)
      console.log(asciiCountList[25 - ("z".charCodeAt(0) - char[c].charCodeAt(0))])
      asciiCountList[25 - ("z".charCodeAt(0) - char[c].charCodeAt(0))] += 1;
    }

    console.log("asciiCountList:")
    console.log(asciiCountList)
    let key = JSON.stringify(asciiCountList);
    console.log("key:")
    console.log(key)

    map.set(key, ((undefined === map.get(key)) ? [list[i]] : [...map.get(key), list[i]]))
    // map.set(asciiCountList, ((undefined === map.get(asciiSum)) ? [list[i]] : [...map.get(asciiSum), list[i]]))
  }

  console.log("map")
  console.log(map)
  console.log([...map.values()])

  // return processWords(list, []);
}

let x =
  // groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// groupAnagrams(["", "b"])
groupAnagrams(["", ""])
// groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"])
// groupAnagrams([""])
// groupAnagrams(["a"])
// groupAnagrams([])

console.log(">>")
console.log(x)

// // 49. Group Anagrams
//
// // ["eat","tea","tan","ate","nat","bat"]
// // [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// // [""]
// //[[""]]
//
// // ["a"]
// // [["a"]]
// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// const groupAnagrams = (list) => {
//   // result,
//   // shift -> for i & k=i+1
//   // twice isAnagram just to check
//   // if we find one -> splice(index, 1)
//   // -> group.push(item) // until the end of the list
//   // until []
//   // let x = processWords(list, []);
//   // console.log("x")
//   // console.log(x)
//   return processWords(list, []);
// }
//
// const areTheyAnagrams = (word1, word2) => {
//   console.log(">>>")
//   console.log(word1 || "0")
//   console.log(word2)
//   console.log("<<<")
//   let char1 = (word1 || "0").split(""),
//     char2 = (word2 || "0").split("");
//
//   if (undefined === word2 || (word1 && word2 && (word1.length !== word2.length))) return false;
//
//
//   let map1 = createAnagramMap(char1), map2 = createAnagramMap(char2);
//   console.log("map1:map2")
//   console.log(map1)
//   console.log(map2)
//
//
//   // {“e” => 1, “a” => 1, “t” => 1}
//   for (let i = 0; i < char1.length; i++) {
//     console.log(">>")
//     console.log(map1.get(char1[i]) !== map2.get(char1[i]))
//     if (map1.get(char1[i]) !== map2.get(char1[i])) return false;
//   }
//
//   return true;
// }
//
// const createAnagramMap = (char) => {
//   let map = new Map();
//
//   for (let i = 0; i < char.length; i++) {
//     map.set(char[i], (map.has(char[i]) ? (map.get(char[i]) + 1) : 1))
//   }
//
//   return map;
// }
//
// const processWords = (list, groupList) => {
//   if (0 === list.length) {
//     return groupList;
//   }
//
//   console.log("check")
//   console.log(list)
//   // console.log(list.length)
//   // console.log(groupList)
//   // console.log(group)
//
//   //  ["eat","tea","tan","ate","nat","bat"] ->  ["tea","tan","ate","nat","bat"]
//   let curr = list.shift(), tmpList = [...list], group = [];
//   group.push(curr);
//
//   while (0 < list.length) {
//     let next = list.shift();
//     console.log(`=> comparing ${curr}:${next}`)
//
//     if (areTheyAnagrams(curr, next)) {
//       console.log("they are")
//       group.push(next);
//     }
//   }
//
//   console.log("=> group")
//   console.log(group)
//   // console.log("-> tmpList")
//   // console.log(tmpList)
//
//   // Remove from tmpList that are added into the group
//   tmpList = tmpList.filter((elem) => {
//     return !group.includes(elem);
//   })
//
//   // console.log("tmpList <-")
//   // console.log(tmpList)
//
//   // process for groupList
//   groupList.push(group);
//   console.log("groupList")
//   console.log(groupList)
//
//   return processWords(tmpList, groupList);
// }
//
// let x =
//   // groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
//   // groupAnagrams(["", "b"])
//   // groupAnagrams(["", ""])
//   groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"])
// // groupAnagrams([""])
// // groupAnagrams(["a"])
// // groupAnagrams([])
//
// console.log(">>")
// console.log(x)
