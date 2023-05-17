const decodeString = (s) => {
  const stack = [];
  let currentNum = 0;
  let currentStr = '';

  for (let ch of s) {
    if (ch >= '0' && ch <= '9') {
      currentNum = currentNum * 10 + parseInt(ch);
    } else if (ch === '[') {
      stack.push(currentStr);
      stack.push(currentNum);
      currentNum = 0;
      currentStr = '';
    } else if (ch === ']') {
      let num = stack.pop();
      let prevStr = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += ch;
    }
  }

  return currentStr;
};
