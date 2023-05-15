/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  if (1 === n) return ["()"];
  return exploreString(n, 0, `${"(".repeat(n)}${")".repeat(n)}`, [`${"(".repeat(n)}${")".repeat(n)}`]);
};

const exploreString = (n, i, processString, result) => {
  let str = processString.slice((1), (processString.length - 1));

  if ("" === str) {
    if (!result.includes(processString.repeat(n))) result = [...result, processString.repeat(n)];
    if (!result.includes(`(${processString.repeat(n - 1)})`)) result = [...result, `(${processString.repeat(n - 1)})`];
    return result;
  }

  let pre = `${"(".repeat(i + 1)}${")".repeat(i + 1)}`;


  if (`${pre}${str}` === `${str}${pre}`) {
    if (!result.includes(`${pre}${str}`)) result = [...result, ...[`${pre}${str}`]];
  } else {
    if (!result.includes(`${pre}${str}`)) result = [...result, ...[`${pre}${str}`]];
    if (!result.includes(`${str}${pre}`)) result = [...result, ...[`${str}${pre}`]];
  }


  i++;
  return exploreString(n, i, str, result);
}
