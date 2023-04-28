/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
  let tmp = {};
  for (let [index, num] of nums.entries) {
    if (tmp[num] !== undefined) return [tmp[num], index];
    tmp[target - num] = index;
  }
}

// const twoSum = (nums, target) => {
//   console.log("nums: " + nums);
//   console.log("entries: ");
//   console.log(nums.entries());
//   let tmp = {};
//
//   for (let [i, n] of nums.entries()) {
//     console.log("[num, i]");
//     console.log([n, i]);
//
//     // curr idx
//     let ci = tmp[n];
//     // console.log(`${item} -- ${i}`)
//     console.log("ci:")
//     console.log(ci)
//
//     let exp = target - n;
//     console.log("nv:")
//     console.log(exp)
//
//     if (ci !== undefined) {
//       console.log("Found")
//       return [ci, i];
//     } else {
//       tmp[exp] = i;
//     }
//   }
//
//   /**
//    * In your twoSum function,
//    * the forEach loop is not stopping because return inside a forEach loop does not stop the loop.
//    * It only stops the current iteration and moves on to the next iteration.
//    * To stop the loop early, you can use a regular for loop instead of forEach.
//    */
//   //   nums.forEach(function (item, i) {
//   //     // curr idx
//   //     let ci = tmp[item];
//   //     let nv = target - item;
//   //
//   //     if (ci !== undefined) {
//   //       return [ci, i];
//   //     }
//   //
//   //     tmp[target - item] = i;
//   //   })
// }

console.log(twoSum([2, 7, 11, 15], 9));

/**
 * [2, 7]
 *
 *
 */
