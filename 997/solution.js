/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  let map = new Map(), judge = -1;

  for (let i = 0; i < trust.length; i++) {
    map.set(trust[i][1], (map.get(trust[i][1]) || []).concat(trust[i][0]));

    if (n - 1 === map.get(trust[i][1]).length) {
      judge = trust[i][1];
    }
  }

  for (let [key, trusters] of map) {
    for (let t of trusters) {
      if (map.get(t) && map.get(t).includes(key)) return -1;
    }
  }


  return -1;
};
