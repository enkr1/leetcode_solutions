/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (1 === nums.length) return nums[0];

  let l2 = [...nums];
  nums.pop();
  l2.shift();

  let r1 = determineToRob(nums), r2 = determineToRob(l2);

  return r1 > r2 ? r1 : r2;
};

const determineToRob = (list) => {
  let tmpList = [];
  for (let i = 0; i < list.length; i++) {
    if (undefined === list[i - 2]) {
      tmpList.push(list[i]);
      continue;
    }

    tmpList.push(list[i] + (Math.max(...tmpList.slice(0, i - 2 + 1))))
  }

  return Math.max(...[...tmpList, list[list.length - 1]]);
}
