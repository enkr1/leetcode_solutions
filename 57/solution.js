/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  if (0 === intervals.length) return [newInterval];
  let mergeList = [];

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) { // smaller and not overlapped
      mergeList.push(intervals[i])
    } else if (intervals[i][0] <= newInterval[1]) { // 1 <= 5
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
      mergeList.push(newInterval)
    } else { // bigger and not overlapped
      mergeList.push(intervals[i])
    }
  }

  return mergeList;
};

