function insert(intervals, newInterval) {
  const merged = [];
  let i = 0;

  // Add all intervals before the new interval that don't overlap
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  // Merge intervals that overlap with the new interval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  // Add the merged new interval
  merged.push(newInterval);

  // Add remaining intervals
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}

let x = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]); // [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
