/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  if (1 === n) return ["()"];

  let processString = `${"(".repeat(n)}${")".repeat(n)}`
  console.log(`input: ${n} - processString - ${processString}`)

  let result = process(n, n, "", []);

  console.log("result")
  console.log(result)

  return;
};

// nbOpen > NbClose
// Only can add closed when open is > closed
const process = (open, close, pattern, result) => {
  // exit
  if (open > close) return result;
  if (0 === open && 0 === close) return result.push(pattern);
  if (open > 0) process(open - 1, close, `${pattern}(`, result);
  if (close > 0) process(open, close - 1, `${pattern})`, result);

  return result;
}

// generateParenthesis(4);
generateParenthesis(3);
