/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    let l = 0, max = 0

    while (l < nums.length) {
        let tmpMax = 0, idx = 0, tmp = []
        for (let i = l; i < nums.length; i++) {
            let t = nums[l] + ((idx % 2 === 0) ? 0 : 1)
            console.log(`~> nums[i]: ${nums[i]}, t: ${t}`)
            if (nums[i] === t) {
                tmp.push(nums[i])
                console.log(`nums[i]: ${nums[i]}, t: ${t}`)
                tmpMax++;
            } else {
                break;
            }
            idx++;
        }

        console.log("tmp")
        console.log(tmp)
        max = Math.max(tmpMax, max);
        l++
    }

    return (1 === max) ? -1 : max;
};

let x =
    alternatingSubarray([64, 65, 64, 65, 64, 65, 66, 65, 66, 65]) // 6
// alternatingSubarray([21, 9, 5]) // -1
// alternatingSubarray([2, 3, 4, 5]) // 2
// alternatingSubarray([2, 3, 4, 3, 4]) // 4

console.log("REs")
console.log(x)
