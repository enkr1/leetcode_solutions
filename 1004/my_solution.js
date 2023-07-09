/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0, tmpMax = 0, tmpK = k, acc = [], zeroIdxes = [], tmpSum = 0, l = 0, r = 0

  // for (let i = 0; i < nums.length; i++) {
  //   if (0 === nums[i]) {
  //     console.log(`i: ${i}, nums[i]: ${nums[i]}`)
  //     zeroIdxes.push(i)
  //   }
  //   tmpSum += nums[i]
  //   acc[i] = tmpSum
  // }

  while (r < nums.length) {
    tmpMax++;

    console.log(`l: ${l}, r: ${r}, tmpK: ${tmpK}, tmpMax: ${tmpMax}`)
    if (nums[r] === 0) {
      tmpK--;

      if (tmpK < 0) {
        let idx = l

        while (tmpK < 0) {
          console.log(`-> tmpK:${tmpK}, nums[idx]: ${nums[idx]}`)

          if (nums[idx] === 0) {
            l = idx + 1;
            tmpK++;
            break;
          }

          idx++;
        }

        console.log(`--> tmpMax:${tmpMax}, tmpK: ${tmpK}`)
        tmpMax = r - l + 1
        console.log(`---> tmpMax:${tmpMax}, tmpK: ${tmpK}`)
      }
      // else {
      //   // meet 0 and has credit to deduct
      //   if (tmpK > 0) tmpK--;
      // }
    }

    max = Math.max(max, tmpMax)

    r++;
  }

  // console.log(zeroIdxes)
  // console.log(acc)
  // console.log(zeroIdxes.length - k - 1)

  // let left = acc[acc.length - 1] - acc[zeroIdxes[zeroIdxes.length - k - 1]]
  // console.log("left")
  // console.log(left)
  console.log("max")
  console.log(max)

  return max;
};

let x =
  // longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2) // 6
  longestOnes([0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1], 2) // 6
// longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3) // 10

console.log("Res")
console.log(x)
