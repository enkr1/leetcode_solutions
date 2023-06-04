
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  if (1 === intervals.length) return intervals;
  let result = [];

  intervals.sort((a, b) => a[0] - b[0])

  while (0 < intervals.length) {
    let curr = intervals.shift();
    if (0 === result.length) {
      result.push(curr);
      continue;
    }

    let prev = result[result.length - 1];
    if (prev[1] >= curr[0]) {
      result.pop();
      result.push([Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])]);
    } else {
      result.push(curr);
    }
  }


  return result;
};
