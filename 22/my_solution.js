/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  if (1 === n) return ["()"];
  let processString = `${"(".repeat(n)}${")".repeat(n)}`
  console.log(`input: ${n} - processString - ${processString}`)
  //   let str = "((()))";
  //   let sliced1 = str.slice(0, 2);   // Slice from index 0 to 2 (exclusive)
  //   let sliced2 = str.slice(0, 4);   // Slice from index 0 to 4 (exclusive)
  //
  //   console.log(sliced1);  // Output: "()"
  //   console.log(sliced2);  // Output: "(())"


  // Process layering
  // "((()))",
  // "(()())",
  // "()()()",
  // "(())()",
  // "()(())"
  // console.log(processString.length)
  // console.log(processString.slice(0, 6))
  // console.log(processString.slice(1, 5))

  let x = exploreString(n, 0, processString, [processString])
  console.log("x")
  console.log(x)



  // for (let i = 0; i < (processString.length); i++) {
  //   let pre = `${"(".repeat(i + 1)}${")".repeat(i + 1)}`;
  //   console.log("pre")
  //   console.log(pre)
  //   // swapping
  //   // 1 - 4
  //   // console.log(processString.slice((i + 1), (processString.length - (i + 1))) === "");
  //   let first = processString.slice((i + 1), (processString.length - (i + 1)));
  //   console.log("first")
  //   console.log(first)
  //   if (`${pre}${first}` === `${first}${pre}`) {
  //     console.log("They are the same!")
  //   }
  // }

  return;
};
// 0
// "((()))"
// "()(())"
// "(())()"

// 1
// "((()))"
// -> "(())"
// "()()"
// "(()())"

// 2
// "(())"
// -> "()"
// "()()"
// "()()()"

const exploreString = (n, i, processString, result) => {
  console.log("-----> exploreString")
  let str = processString.slice((1), (processString.length - 1));
  // console.log("processString")
  // console.log(processString)
  // console.log("str")
  // console.log(str)

  if ("" === str) {
    if (!result.includes(processString.repeat(n))) result = [...result, processString.repeat(n)];
    if (!result.includes(`(${processString.repeat(n - 1)})`)) result = [...result, `(${processString.repeat(n - 1)})`];
    return result;
  }

  let pre = `${"(".repeat(i + 1)}${")".repeat(i + 1)}`;

  console.log("pre")
  console.log(pre)

  console.log("`${pre}${str}`")
  console.log(`${pre}${str}`)
  console.log("`${str}${pre}`")
  console.log(`${str}${pre}`)

  if (`${pre}${str}` === `${str}${pre}`) {
    if (!result.includes(`${pre}${str}`)) result = [...result, ...[`${pre}${str}`]];
    console.log("They are the same!")
    console.log("result")
    console.log(result)
  } else {
    console.log("They are NOT the same!")
    if (!result.includes(`${pre}${str}`)) result = [...result, ...[`${pre}${str}`]];
    if (!result.includes(`${str}${pre}`)) result = [...result, ...[`${str}${pre}`]];
    console.log("result")
    console.log(result)
  }


  i++;
  return exploreString(n, i, str, result);
}
// generateParenthesis(4);
generateParenthesis(4);
// 4 -> 14
[
  "(((())))",
  "((()()))",
  "((())())",
  "((()))()",
  "(()(()))",
  "(()()())",
  "(()())()",
  "(())(())",
  "(())()()",
  "()((()))",
  "()(()())",
  "()(())()",
  "()()(())",
  "()()()()"
]
[
  "(((())))",
  "()()())",
  "()()()()",
  "(())(())",
  "()((()))",
  "((()))()"
]



// "(" ")"

// "((()))",
// "(()())",
// "()()()",
// "(())()",
// "()(())"

// "()((()))"
// "((()))()"
// "()()(())"
// "(())()()"
// "()()()()"

// "((((()))))"
// "()(((())))"
// "(((())))()"


// const generateParenthesis = (n) => {
//   if (1 === n) return "()";
//
//   console.log("input: " + n)
//   let result = [];
//   // Process wrapper
//
//   for (let i = 0; i < n - 1; i++) {
//     let pattern = "";
//     for (let k = 0; k < i; k++) {
//       pattern += ")";
//     }
//     pattern += "(";
//
//     for (let h = 0; h < (n - 1); h++) {
//       new_pattern += ")";
//     }
//
//     console.log("---------> i - pattern");
//     console.log(pattern);
//     console.log("n");
//     console.log(n);
//
//
//     for (let j = 0; j < (n - i); j++) {
//       let new_pattern = "";
//       console.log("pattern")
//       console.log(pattern)
//       console.log("new_pattern")
//       console.log(new_pattern)
//
//       console.log(`------> j - pattern - j: ${ j } - n: ${ n }`)
//       console.log(pattern)
//
// //       for (let h = 0; h < (n - j - 1); h++) {
// //         new_pattern += ")";
// //       }
//
//       new_pattern += "(";
//       console.log("h - pattern")
//
//       console.log(`${ pattern }${ new_pattern }`)
//       // new_pattern = pattern;
//     }
//
//     // console.log("LAST - pattern");
//     // console.log(pattern);
//     result = [...result, pattern]
//     // console.log(`(${ pattern })`);
//   }
//
//   console.log("result")
//   console.log(result)
//
//   return `()`;
// };
