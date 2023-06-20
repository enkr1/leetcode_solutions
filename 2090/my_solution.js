/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = (nums, k) => {
  if (k === 0) return nums;
  let result = [];

  let sum = 0;
  for (let i = 0; i < (k * 2); i++) {
    sum += nums[i];
  }
  console.log("sum:" + sum)

  for (let i = 0; i < nums.length; i++) {
    if (i < k || i + k >= nums.length) {
      result.push(-1);
      continue;
    }

    if (undefined !== nums[i - k - 1]) sum -= nums[i - k - 1];
    sum += nums[i + k];

    // for (let j = i - k; j < i + k + 1; j++) {
    //   console.log(`from ${j} to ${i + k}`)
    //   tmpSum += nums[j];
    // }

    result.push(Math.floor(sum / ((k * 2) + 1)));
  }

  return result;
};

// const getAverages = (nums, k) => {
//   if (k === 0) return nums;
//   let result = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     if (i < k || i + k >= nums.length) {
//       result.push(-1);
//       continue;
//     }
//
//     let tmpSum = 0;
//     console.log(`> ${i} `)
//     for (let j = i - k; j < i + k + 1; j++) {
//       console.log(`from ${j} to ${i + k}`)
//       tmpSum += nums[j];
//     }
//
//     result.push(Math.floor(tmpSum / ((k * 2) + 1)));
//   }
//
//   return result;
// };

let x = null;
// 9
//                        _  _
//               0  1  2  3  4  5  6  7  8
x = getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3) // [-1,-1,-1,5,4,4,-1,-1,-1]
// x = getAverages([100000], 0) // [100000]
// x = getAverages([8], 100000)
console.log("Result")
console.log(x)
