// gpt
var relocateMarbles = (nums, moveFrom, moveTo) => {
  let pos = new Set(nums);

  for (let i = 0; i < moveFrom.length; i++) {
    pos.delete(moveFrom[i]);
    pos.add(moveTo[i]);
  }

  return Array.from(pos).sort((a, b) => a - b);
}
/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles2 = function (nums, moveFrom, moveTo) {
  let map = new Map()

  for (let i = 0; i < moveFrom.length; i++) {
    map.set(moveFrom[i], moveTo[i])
  }

  console.log(map)

  for (let i = 0; i < nums.length; i++) {
    while (map.has(nums[i])) {
      nums[i] = map.get(nums[i]);
    }
  }

  return nums
};

let x =
  // relocateMarbles(
  //   [1, 1, 3, 3],
  //   [1, 3],
  //   [2, 2]
  // ) // [2]
  relocateMarbles(
    [1, 6, 7, 8],
    [1, 7, 2],
    [2, 9, 5]) //[5,6,8,9]

console.log("REs")
console.log(x)
