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
    // console.log("e[i]")
    // console.log(e[i])
    // console.log(map.get(e[i][0]) || []);
    // console.log((map.get(e[i][1]) || []).push(e[i][0]));


    map.set(e[i][0], (map.get(e[i][0]) || []).concat(e[i][1]));
    map.set(e[i][1], (map.get(e[i][1]) || []).concat(e[i][0]));
    // console.log(map)
  }
  console.log(map)

  const findInLayer = (list, count) => {
    console.log("> Proc")
    console.log(list, count)
    if (count === n || 0 === list.length) return false;

    if (list.includes(d)) return true;

    for (let i = 0; i < list.length; i++) {
      console.log()
      count++;
      return findInLayer(map.get(list[i]), 0);
    }
  }

  return (undefined === map.get(s)) ? true : findInLayer(map.get(s), 0);
};

// let x = validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)
// let x = validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)
// let x = validPath(1, [], 0, 0)
let x = validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9)
console.log("x")
console.log(x)
