/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (list) => {
  let map = new Map();
  for (let i = 0; i < list.length; i++) {
    let char = list[i].split(""), asciiCountList = Array(26).fill(0);

    for (let c = 0; c < char.length; c++) {
      asciiCountList[25 - ("z".charCodeAt(0) - char[c].charCodeAt(0))] += 1;
    }

    let key = JSON.stringify(asciiCountList);

    map.set(key, ((undefined === map.get(key)) ? [list[i]] : [...map.get(key), list[i]]))
  }

  return [...map.values()];
}
