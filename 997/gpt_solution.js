/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  const inDegree = Array(n + 1).fill(0); // point in -> being trust
  const outDegree = Array(n + 1).fill(0); // point out -> trust someonme

  console.log(inDegree)
  console.log(outDegree)

  for (const [a, b] of trust) {
    outDegree[a]++;
    inDegree[b]++;
  }

  console.log(inDegree)
  console.log(outDegree)

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      return i;
    }
  }

  return -1;
}

// I found this smarter also better in terms of memory.
function findJudge2(n, trust) {
  const trustCounts = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustCounts[a]--;
    trustCounts[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }

  return -1;
}


// let x = findJudge(2, [[1, 2]]) // 2
// let x = findJudge(4, [[1, 2], [1, 3], [2, 1], [2, 3], [1, 4], [4, 3], [4, 1]]) // 3
// let x = findJudge(1, [])
// let x = findJudge(3, [[1, 2], [2, 3]]) // -1
let x = findJudge(3, [[1, 3], [2, 3], [3, 1]]) // -1
// 1 2 3
// 1 -> 3
// 2 -> 3
// 3 -> 1
console.log("x")
console.log(x)
