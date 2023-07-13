/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let
    visited = Array.from({ length: n + 1 }, () => false),
    outdegree = Array.from({ length: n + 1 }, () => []),
    indegree = Array.from({ length: n + 1 }, () => []),
    timeMatrix = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0)),
    edges

  console.log(timeMatrix);
  console.log(outdegree);

  // [u, v, w]
  // construct outdegree
  for (let i = 0; i < times.length; i++) {
    outdegree[times[i][0]].push(times[i][1]);
    timeMatrix[times[i][0]][times[i][1]] = times[i][2]
  }

  for (let i = 0; i < times.length; i++) {
    indegree[times[i][1]].push(times[i][0]);
  }

  if (outdegree[k].length === 0) return -1;

  // dfs
  let idx = 0, queue = [k], max = 0, toDeduct = 0
  while (queue.length > 0) {

    let curr = queue.shift();
    visited[curr] = true;

    let tmpMax = 0
    let child = outdegree[curr];

    while (child.length > 0) {
      let childIdx = child.shift();
      if (visited[childIdx]) break;
      visited[childIdx] = true;

      tmpMax = Math.max(tmpMax, timeMatrix[curr][childIdx])
      queue.push(childIdx)
    }

    max += tmpMax;
  }


  return max - toDeduct;
};
