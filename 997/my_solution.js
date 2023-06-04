/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  if (1 === n) return 1;

  // being trusted map
  let map = new Map(), judge = -1;

  for (let i = 0; i < trust.length; i++) {
    // map.set(trust[i][0], (trustMap.get(trust[i][0]) || []).concat(trust[i][1]));
    map.set(trust[i][1], (map.get(trust[i][1]) || []).concat(trust[i][0]));

    if (n - 1 === map.get(trust[i][1]).length) {
      judge = trust[i][1];
      // return trust[i][1];
    }
  }

  console.log("potential judge")
  console.log(judge)
  console.log(map)
  console.log(map.get(judge))

  // const isTrustingEachOther = (key, target) => {
  //   if (map.get(key).includes(target)) return false;
  // }

  // console.log(map)
  // for (let [key, trusters] of map) {
  //   console.log("key:" + key + ", trusters:" + trusters)
  //   for (let t of trusters) {
  //     // isTrustingEachOther(t, key);
  //     console.log(t)
  //     if (!map.get(t)) continue;
  //     if (map.get(t).includes(judge)) return -1;
  //     // if (judge - 1 === map.get(t).length) return t;
  //   }
  // }


//   console.log(map)
//   console.log("judge:" + judge)

  return judge;
};


let x = findJudge(2, [[1, 2]]) // 2
// let x = findJudge(4, [[1, 2], [1, 3], [2, 1], [2, 3], [1, 4], [4, 3], [4, 1]]) // 3
// let x = findJudge(1, [])
// let x = findJudge(3, [[1, 2], [2, 3]]) // -1
// let x = findJudge(3, [[1, 3], [2, 3], [3, 1]]) // -1
console.log("x")
console.log(x)
