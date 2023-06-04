/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  // NOTE: my solution is shit, refer to chat gpt's
  if (0 === intervals.length) return [newInterval];
  let mergeList = [];

  for (let i = 0; i < intervals.length; i++) {
    // if (0 === newInterval.length) break;
    if (intervals[i][1] < newInterval[0]) { // smaller and not overlapped
      console.log(`smaller & not overlapped - ${intervals[i][1]} < ${newInterval[0]} - ${intervals[i]} x ${newInterval}`)
      mergeList.push(intervals[i])

    } else if (intervals[i][0] <= newInterval[1]) { // 1 <= 5
      // between here
      console.log(`overlapped - ${intervals[i][0]} <= ${newInterval[1]} - ${intervals[i]} x ${newInterval}`)
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
      mergeList.push(newInterval)
    } else { // bigger and not overlapped
      console.log(`bigger & not overlapped - ${intervals[i]} - ${newInterval}`)
      mergeList.push(intervals[i])
    }
  }

  console.log("mergeList")
  console.log(mergeList)

  //   console.log("deleteList")
  //   console.log(deleteList)
  //   console.log("replace")
  //   console.log(replace)
  // console.log("intervals")
  // console.log(intervals)
  // intervals.splice(deleteList[0], deleteList[1] || 0, replace)
  return intervals;
};


// let x = insert([[1, 3], [6, 9]], [2, 5]); // [[1,5],[6,9]]
let x = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]); // [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
// let x = insert([], [5, 7]); // [5,7]
// let x = insert([[1, 5]], [2, 3]); // [1,5]


console.log('x')
console.log(x)
