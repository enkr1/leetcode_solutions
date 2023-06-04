/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  if (0 === intervals.length) return [newInterval];
  let deleteList = [], replace = []; // [3, 10] // use [1] when replace is not empty

  for (let i = 0; i < intervals.length; i++) {
    if (0 === newInterval.length) break;
    if (intervals[i][0] <= newInterval[0] && newInterval[0] < intervals[i][1]) {
      console.log(`${newInterval[0]} is within ${intervals[i][0]} and ${intervals[i][1]}`)
      // let curr = newInterval.shift();
      deleteList.push(i);

      // use [1] when replace is not empty
      replace.push((replace.length > 0) ? intervals[i][1] : intervals[i][0]);
      newInterval.shift();
    } else {
      console.log(`${newInterval[0]} is NOT within ${intervals[i][0]} and ${intervals[i][1]}`)
      if (newInterval[0] < intervals[i][0]) {
        deleteList.push(i);
        replace.push(newInterval.shift());
      }
    }
  }

  console.log("deleteList")
  console.log(deleteList)
  console.log("replace")
  console.log(replace)
  console.log("intervals")
  console.log(intervals)
  intervals.splice(deleteList[0], deleteList[1] || 0, replace)
  return intervals;
};


// let x = insert([[1, 3], [6, 9]], [2, 5]); // [[1,5],[6,9]]
// let x = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]); // [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
// let x = insert([], [5, 7]); // [5,7]
let x = insert([[1, 5]], [2, 3]); // [1,5]


console.log('x')
console.log(x)
