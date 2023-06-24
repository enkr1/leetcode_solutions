/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (nbOfServers, logs, interval, queries) {
  let serverMap = new Map(), intervalList = [], result = [];

  // default
  for (let i = 0; i < nbOfServers; i++) {
    serverMap.set(i + 1, []);
  }

  // based on logs
  for (let i = 0; i < logs.length; i++) {
    serverMap.set(logs[i][0], serverMap.get(logs[i][0]).concat(logs[i][1]));
  }

  // construct intervals
  for (let i = 0; i < queries.length; i++) {
    intervalList.push([queries[i] - interval, queries[i]])
  }


  for (let i = 0; i < intervalList.length; i++) {
    let start = intervalList[i][0], end = intervalList[i][1], receiveds = 0;
    for (let [server, downtimes] of serverMap) {
      for (let j = 0; j < downtimes.length; j++) {
        let dt = downtimes[j];
        console.log(`${dt} < ${start} && ${dt} > ${end}`)
        if (start <= dt && dt <= end) {
          receiveds++;
          break;
        }
      }
    }

    result.push(nbOfServers - receiveds);
  }


  console.log(serverMap)
  console.log(intervalList)
  console.log(result)

  return result;
};

let x = null;
x = countServers(3,
  [[1, 3], [2, 6], [1, 5]],
  5,
  [10, 11]) // [1, 2]

// x = countServers(
//   3,
//   [[2, 4], [2, 1], [1, 2], [3, 1]],
//   2,
//   [3, 4]) // [0, 1]

x = countServers(
  3,
  [[1, 35], [1, 32], [1, 11], [1, 39], [2, 29]],
  8,
  [38, 30, 23, 33, 15, 31, 34, 22, 11, 14]
) // [2,2,3,1,2,2,1,3,2,2]

console.log(x)
