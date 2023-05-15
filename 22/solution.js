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

  //   "((())())", x
  //   "(()(()))", x
  //   "()()(())"

  // "(()())()", x
  // "()(()())", x
  if ("" === str) {
    console.log("result")
    console.log(result)
    // console.log(processString)
    for (let i = 0; i < n; i++) {
      let a = `${"(".repeat(n - (i + 1))}${processString.repeat(i + 1)}${")".repeat(n - (i + 1))}`;
      if (!result.includes(a)) result = [...result, a];

      console.log("((n / 2) - i)")
      console.log(((n / 2) - i))

      if ((((n / 2) - i) >= 0) && ((n / 2) - i) === Math.round(((n / 2) - i))) {
        let b = `${"()".repeat(i)}${"(".repeat(n / 2)}${")".repeat(n / 2)}${"()".repeat((n / 2) - i)}`;
        console.log("b")
        console.log(b)
        if (!result.includes(b)) result = [...result, b];

        if (i < (n / 2)) {
          let c = `${"()".repeat(i)}(${"()".repeat(n / 2)})${"()".repeat((n / 2) - (i + 1))}`;
          console.log("c")
          console.log(c)
          if (!result.includes(c)) result = [...result, c];

          let d = `(${"()".repeat(i)}${"(".repeat(n / 2)}${")".repeat(n / 2)}${"()".repeat((n / 2) - (i + 1))})`;
          console.log("d")
          console.log(d)
          if (!result.includes(d)) result = [...result, d];
        }
      }

    }

    // if (!result.includes(processString.repeat(n))) result = [...result, processString.repeat(n)];
    // if (!result.includes(`(${processString.repeat(n - 1)})`)) result = [...result, `(${processString.repeat(n - 1)})`];
    console.log("result")
    console.log(result)
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

generateParenthesis(4);
// generateParenthesis(3);
[
  "((((()))))",
  "(((()())))",
  "(((())()))",
  "(((()))())",
  "(((())))()",
  "((()(())))",
  "((()()()))",
  "((()())())",
  "((()()))()",
  "((())(()))",
  "((())()())",
  "((())())()",
  "((()))(())",
  "((()))()()",
  "(()((())))",
  "(()(()()))",
  "(()(())())", "(()(()))()", "(()()(()))", "(()()()())", "(()()())()", "(()())(())", "(()())()()", "(())((()))", "(())(()())", "(())(())()", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()((())())", "()((()))()", "()(()(()))", "()(()()())", "()(()())()", "()(())(())", "()(())()()", "()()((()))", "()()(()())", "()()(())()", "()()()(())", "()()()()()"
]
