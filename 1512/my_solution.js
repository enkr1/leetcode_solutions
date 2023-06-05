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

  console.log(freq)
  // Calculate the number of good pairs for each number
  for (let key in freq) {
    let frequency = freq[key];
    console.log(`${key} -> ${(frequency - 1) * frequency / 2}`)
    count += ((frequency - 1) * frequency) / 2;
  }

  return count;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3])

// const numIdenticalPairs = (nums) => {
//   let count = 0;
//
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i < j && nums[i] === nums[j]) count++;
//     }
//   }
//
//   return count;
// }
