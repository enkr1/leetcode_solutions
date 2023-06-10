/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  let set = new Set(), maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let val of set) {
    console.log(`val:${val}`)
    // NOTE: Only get the start of a sequence
    if (!set.has(val - 1)) {
      console.log("this does not have a before - is a head")

      // curr / next
      let expand = 0;
      while (set.has(val + expand)) {
        expand++;
      }

      maxCount = Math.max(expand, maxCount);
    }
  }

  console.log(set)
  return maxCount;
};

let x = longestConsecutive([100, 4, 200, 1, 3, 2]);

console.log("Result")
console.log(x)
