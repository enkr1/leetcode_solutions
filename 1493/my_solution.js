/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const DELETE_COUNT = 1
  let l = 0, r = 0, max = 0, tmpMax = 0, k = 1

  //[1,1,0,1]
  while (r < nums.length) {
    tmpMax++;
    console.log(`l: ${l}, r: ${r}, max: ${max}, tmpMax: ${tmpMax}, k: ${k}`)

    if (nums[r] === 0) {
      k--;

      if (k < 0) {
        console.log(`~> k: ${k}`)

        while (k < 0) {
          if (nums[l] === 0) {
            l++;
            k++;
            break;
          }

          l++;
        }

        tmpMax = r - l + 1
        console.log(`~> new l: ${l}, new tmpMax: ${tmpMax}`)
      }
    }

    max = Math.max(max, tmpMax)
    r++;
  }

  console.log(`~> k: ${k}`)

  return max - DELETE_COUNT;
};

let x =
  longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])
  // longestSubarray([1, 1, 0, 1])
  // longestSubarray([1, 1, 1])

console.log("Res")
console.log(x)
