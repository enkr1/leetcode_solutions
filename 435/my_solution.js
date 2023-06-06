/**
 * @param {number[][]} intervals
 * @return {number}
 */
// const eraseOverlapIntervals = (intervals) => {
//   let count = 0;
//   if (intervals.length <= 1) return count;
//
//   intervals.sort((a, b) => a[0] - b[0]);
//
//   let prevEnd = Number.NEGATIVE_INFINITY;
//   while (intervals.length > 0) {
//     let curr = intervals.shift();
//
//     //     if (curr[0] < prev[1] && prev[1] > curr[1]) {
//     //       count++;
//     //       prev = curr; // replace because THIS is can be removed.
//     //     } else if (curr[0] < prev[1] && prev[1] <= curr[1]) {
//     //       count++;
//     //       // not replace bc im going to remove the current, so prev stays.
//     //     } else {
//     //       prev = curr;
//     //     }
//
//     if (curr[0] >= prevEnd) {
//       prevEnd = curr[0]; // replace because THIS is can be removed.
//     } else {
//       count++;
//     }
//   }
//
//   return count;
// }

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  let count = 0;
  // exit
  if (intervals.length <= 1) return count;

  intervals.sort((a, b) => a[0] - b[0]);

  console.log(intervals);
  // while intervals.length > 0
  let prev = intervals.shift();
  while (intervals.length > 0) {
    let curr = intervals.shift();

    if (curr[0] < prev[1] && prev[1] > curr[1]) {
      count++;
      prev = curr;
    } else
      if (curr[0] < prev[1] && prev[1] <= curr[1]) {
        count++;
      } else {
        prev = curr;
      }

  }

  // if (curr[0] < prev[1] && prev[1] < curr[1]) count ++;
  return count;
}

// /**
//  * @param {number[][]} intervals
//  * @return {number}
//  */
// const eraseOverlapIntervals = (intervals) => {
//   let count = 0;
//   // exit
//   if (intervals.length <= 1) return count;
//
//   intervals.sort((a, b) => a[0] - b[0]);
//
//   console.log(intervals);
//   // while intervals.length > 0
//   let prev = intervals.shift();
//   while (intervals.length > 0) {
//       let curr = intervals.shift();
//
//       if (curr[0] < prev[1] && prev[1] > curr[1]) {
//           count++;
//           prev = curr;
//       } else
//           if (curr[0] < prev[1] && prev[1] <= curr[1]) {
//               count++;
//           } else {
//               prev = curr;
//           }
//
//   }
//
//   // if (curr[0] < prev[1] && prev[1] < curr[1]) count ++;
//   return count;
// }
