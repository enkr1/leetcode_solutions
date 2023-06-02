// 271. Encode and Decode Strings (Premium)

// [“I”,“love”,“google”,“haha”,“hahaha”]
const encode = (strList) => {
  let positionStr = "", len = 0, str = strList.join("");

  // “len,1-1,5-5,11-,..._Ilovegooglehahahahaha”
  while (0 < strList.length) {
    let curr = strList.shift();
    // console.log(`curr:${curr} - ${len},${curr.length}`)
    positionStr += `${len},${curr.length}-`;
    len += curr.length;
  }

  return `${positionStr}_${str}`;
}

// split - pop -> string for slice(
const decode = (str) => {
  let splitStr = str.split("_"); // …., “Ilove…”
  // handle edge case
  if (2 > splitStr.length) return 404;

  // “1,2-3,4-
  let positionStr = splitStr[0], originalJoinedStr = splitStr[1];
  positionStr = positionStr.split("-"); // [“1,2”, “3,4”]
  positionStr.pop();
  let decodedStrList = [];


  while (0 < positionStr.length) {
    let curr = positionStr.shift();
    curr = curr.split(","); // [1, 2]
    decodedStrList.push(originalJoinedStr.slice(parseInt(curr[0]), parseInt(curr[0]) + parseInt(curr[1])));
  }

  return decodedStrList;
}

let x = encode(["I", "love", "google", "LOL", "Lmao"]);
console.log("x")
console.log(x)

let y = decode(x);
console.log("y")
console.log(y)
