const merge = intervals => {
  // Step 1: Sort intervals based on start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize result array
  const mergedIntervals = [];

  // Step 3: Iterate over intervals
  for (let i = 0; i < intervals.length; i++) {
    const currInterval = intervals[i];

    // Step 4: If no overlap, add to result array
    if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] < currInterval[0]) {
      mergedIntervals.push(currInterval);
    }
    // Step 5: If overlap, update end time of previous merged interval
    else {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], currInterval[1]);
    }
  }

  // Step 6: Return result array
  return mergedIntervals;
};

// Example usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = merge(intervals);
console.log(merged);
