/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  return process(n, n, "", []);
};

// open = open slot left, close = close slot left
const process = (open, close, pattern, result) => {
  if (open > close) return result;
  if (0 === open && 0 === close) return result.push(pattern);
  if (open > 0) process(open - 1, close, `${pattern}(`, result);
  if (close > 0) process(open, close - 1, `${pattern})`, result);
  return result;
}
