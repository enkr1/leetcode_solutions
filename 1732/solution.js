/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
  let max = 0, tmpMax = 0;
  for (let i = 0; i < gain.length; i++) {
    tmpMax += gain[i];
    max = Math.max(max, tmpMax);
  }
  return max;
};
