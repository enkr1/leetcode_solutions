/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  let count = 0, jMap = new Map();

  for (let i = 0; i < jewels.length; i++) {
    // jMap.set(jewels[i], (jMap.get(jewels[i]) || 0) + 1);
    jMap.set(jewels[i], true);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jMap.has(stones[i])) count++;
  }

  return count;
};
