/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  if (1 === n) return ["()"];

  let processString = `${"(".repeat(n)}${")".repeat(n)}`
  console.log(`input: ${n} - processString - ${processString}`)

  let result = [];
  // Process wrapper

  let ref = [
    "())(()",
    "())()(",

    "()(())",
    "()()()",
    "()())(",


    "((()))",
    "(()())",
    "(())()",
    "(()))(",


    ")((())",
    ")(()()",
    ")(())(",

    ")()(()",
    ")()()("
  ]

  for (let i = 0; i < n - 1; i++) {
    let pattern = "";
    for (let k = 0; k < i; k++) {
      if (k > 0) return;
      pattern += ")";
    }

    pattern += "(";

    for (let h = 0; h < (n / 2); h++) {
      console.log(`------> h - pattern - h: ${h}`)
      pattern += ")";
      console.log(pattern)
    }

    for (let j = 0; j < (n / 2) - 1; j++) {
      console.log(`----> j - pattern - j: ${j} - n: ${n}`)
      // console.log(pattern)
      pattern += "(";
      console.log(pattern)
      // pattern += ")";
      console.log("Before last - pattern")
      console.log(pattern)

      for (let l = 0; l < (n / 2) - 1; l++) {
        console.log(`--> l - pattern - l: ${l}`)
        console.log(pattern)
        pattern += ")";
        console.log(pattern)
      }

    }

    // console.log("LAST - pattern");
    // console.log(pattern);
    // result = [...result, pattern]
    // console.log(`(${ pattern })`);
  }

  console.log("result")
  console.log(result)
  //
  //   return `()`;


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

// generateParenthesis(4);
generateParenthesis(4);
// 4 -> 14
// [
//   "(((())))",
//   "((()()))",
//   "((())())", x
//   "((()))()",
//   "(()(()))", x
//   "(()()())",
//   "(()())()", x
//   "(())(())",
//   "(())()()", x
//   "()((()))",
//   "()(()())", x
//   "()(())()", x
//   "()()(())", x
//   "()()()()"
// ]
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "(()))(",
//   "()(())",
//   "()()()",
//   "()())(",
//   "())(()",
//   "())()(",
//   ")((())",
//   ")(()()",
//   ")(())(",
//   ")()(()",
//   ")()()("
// ]
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "(()))(",
//   "()(())",
//   "()()()",
//   "()())(",
//   "())(()",
//   "())()(",
//   ")((())",
//   ")(()()",
//   ")(())(",
//   ")()(()",
//   ")()()("
// ]
//
//
//
//
// [
//   "(((())))",
//   "()())",
//   "()()()()",
//   "(())(())",
//   "()((()))",
//   "((()))()"
// ]



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
