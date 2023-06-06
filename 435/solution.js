/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  let count = 0;
  if (intervals.length <= 1) return count;

  intervals.sort((a, b) => a[0] - b[0]);

  let prevEnd = Number.NEGATIVE_INFINITY;

  while (intervals.length > 0) {
    let [currStart, currEnd] = intervals.shift();

    if (currStart < prevEnd) {
      count++;
      prevEnd = Math.min(prevEnd, currEnd);
    } else {
      prevEnd = currEnd;
    }
  }

  return count;
}
