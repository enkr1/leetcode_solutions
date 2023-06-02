/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  let count = 0, jMap = new Map();

  for (let i = 0; i < jewels.length; i++) {
    jMap.set(jewels[i], (jMap.get(jewels[i]) || 0) + 1);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jMap.has(stones[i])) count++;
  }

  return count;
};

// from chatgpt
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones2(jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;

  console.log("jewelSet")
  console.log(jewelSet)

  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }

  return count;
}


let x = numJewelsInStones("aA", "aAAbbbb")

console.log(x)
