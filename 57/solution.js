/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  let deleteList = [], replace = []; // [3, 10] // use [1] when replace is not empty

  for (let i = 0; i < intervals.length; i++) {
    if (0 === newInterval.length) break;
    if (intervals[i][0] <= newInterval[0] && newInterval[0] < intervals[i][1]) {
      deleteList.push(i);

      replace.push((replace.length > 0) ? intervals[i][1] : intervals[i][0]);
      newInterval.shift();
    }
  }

  intervals.splice(deleteList[0], deleteList[1], replace)
  return intervals;
};
