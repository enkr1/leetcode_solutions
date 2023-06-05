/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => { // from chat gpt
  let freq = {};
  let count = 0;

  // Count the frequency of each number
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Calculate the number of good pairs for each number
  for (let key in freq) {
    let frequency = freq[key];
    count += (frequency - 1) * frequency / 2;
  }

  return count;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3])
