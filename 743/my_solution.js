/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let
    visited = Array.from({ length: n + 1 }, () => false),
    radList = Array.from({ length: n + 1 }, () => []),
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

  console.log(timeMatrix);
  console.log("outdegree");
  console.log(outdegree);
  console.log("indegree");
  console.log(indegree);
  // console.log("visited");
  // console.log(visited);

  if (outdegree[k].length === 0) return -1;

  // dfs
  let idx = 0, queue = [k], max = 0, toDeduct = 0
  while (queue.length > 0) {
    // console.log("> visited");
    // console.log(visited);

    let curr = queue.shift();
    // visited[curr] = true;
    console.log("curr")
    console.log(curr)
    // let curr = outdegree.shift();
    // if (curr.length > 0) {
    let tmpMax = 0
    let child = outdegree[curr];
    console.log("child")
    console.log(child)
    while (child.length > 0) {
      let childIdx = child.shift();
      // if (visited[childIdx]) break;
      // visited[childIdx] = true;

      console.log("> childIdx")
      console.log(childIdx)
      radList[curr].push(timeMatrix[curr][childIdx])
      tmpMax = Math.max(tmpMax, timeMatrix[curr][childIdx])
      queue.push(childIdx)
      console.log("> queue")
      console.log(queue)
    }

    max += tmpMax;
    // }
    // else do nth
  }

  // console.log("visited");
  // console.log(visited);
  console.log("max")
  console.log(max)
  console.log("radList")
  console.log(radList)

  //   while (indegree.length > 0) {
  //     let curr = indegree.shift();
  //
  //     if (curr.length > 1) {
  //       let tmpMax = 0
  //       while (curr.length > 0) {
  //         let child = curr.shift();
  //         tmpMax = Math.max(tmpMax, timeMatrix[idx][child])
  //       }
  //       toDeduct += tmpMax;
  //     }
  //
  //     idx++;
  //     // else do nth
  //   }

  return max - toDeduct;
};

let x =
  networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 4]], 3, 1) // 3
// networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2) // 2
// networkDelayTime([[1, 2, 1], [2, 1, 3]], 2, 2) // 3
// networkDelayTime([[1,2, 1]], 2, 2) // - 1

console.log("res")
console.log(x)
