/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
  let max = 0, acc = 0

  for (let i = 0; i < gain.length; i++) {
    acc += gain[i]
    max = Math.max(max, acc)
  }

  return max;
};

// /**
//  * @param {number[]} gain
//  * @return {number}
//  */
// const largestAltitude = (gain) => {
//     let max = 0, tmpMax = 0;
//     for (let i = 0; i < gain.length; i++) {
//         tmpMax += gain[i];
//         max = Math.max(max, tmpMax);
//     }
//     return max;
// };
