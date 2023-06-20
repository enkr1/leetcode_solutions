/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let max = 0;

  for (let r = 0; r < accounts.length; r++) {
    let tmpMax = 0;
    for (let c = 0; c < accounts[r].length; c++) {
      tmpMax += accounts[r][c];
    }
    max = Math.max(max, tmpMax);
  }
  return max;
};
