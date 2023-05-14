/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let charList = x.toString().split(''), result = null;
  // charList.forEach((char, i) => {
  //   console.log("char")
  //   console.log(char)
  //   console.log(i)
  //   console.log("parseInt(char[i]) * i")
  //   console.log(parseInt(char[i]) * i)
  //   result += parseInt(char[i]) * i;
  //   i *= 10;
  // })

  result = reverseCharList(charList, 0, 1, null);

  console.log("result")
  console.log(result)
};

const reverseCharList = (charList, i, factor, result) => {
  if (undefined === charList[i]) return result;
  console.log("charList[i]")
  console.log(charList[i])

  result += (parseInt(charList[i]) * factor);
  factor *= 10;
  console.log("result")
  console.log(result)
  console.log("factor")
  console.log(factor)

  i++;
  return reverseCharList(charList, i, factor, result);
}


// reverse(321)
reverse(120)
