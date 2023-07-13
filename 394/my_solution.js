
const decodeString = (s) => {
  s = s.split("")

  let stack = [], result = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      console.log(`s[i]: ${s[i]}`)
      console.log(stack)

      let collectList = []

      // pop till "["
      while (stack.length > 0) {
        console.log("> collectList")
        console.log(collectList)
        // console.log(collectList.reverse())

        let curr = stack.pop()
        console.log(">>> curr")
        console.log(curr)

        if (curr === "[") {
          break;
        }
        collectList.push(curr)
      }

      console.log("before finding number")
      console.log(stack)

      // if (curr === "[") {
      let numberStr = ""

      // to find number
      while (stack.length > 0) {
        let maybeNumber = stack[stack.length - 1];

        console.log("maybeNumber")
        console.log(maybeNumber)
        console.log(`isNaN?`)
        console.log(isNaN(maybeNumber))
        // not a number -> break
        if (isNaN(maybeNumber)) break;

        numberStr += stack.pop(); // pop only the last guy IS a number
        console.log("> numberStr")
        console.log(numberStr)
      }

      // console.log("> numberStr")
      // console.log(numberStr)
      numberStr = numberStr.split("").reverse().join("")
      numberStr = parseInt(numberStr)
      console.log("> numberStr")
      console.log(numberStr)

      collectList.reverse()
      console.log("after reversing collectList")
      console.log(collectList)

      while (numberStr > 0) {
        console.log("pushing ...")
        console.log(stack)
        stack.push(collectList.join(""))
        console.log("result <")
        console.log(stack)
        numberStr--;
      }

      console.log("collectList")
      console.log(collectList)
      // result.push(collectList) // dc syntax

    } else {
      stack.push(s[i])
    }
  }

  return stack.join("");
}


let x =
  // decodeString("3[a]2[bc]") // Output: "aaabcbc"
  decodeString("100[leetcode]")
// decodeString("3[a2[c]]") // "accaccacc"

console.log("Res")
console.log(x)

//
// /**
//  * @param {string} s
//  * @return {string}
//  */
// const decodeString = (s) => {
//   s = s.split("");
//   let stack = [], result = null;
//   console.log(`input: ${s}`);
//   for (let i = 0; i < s.length; i++) {
//     if ("]" === s[i]) {
//       console.log(`HIT! ] at ${i}`)
//       console.log(s)
//       stack = popToOpen(stack, stack.length - 1, [])
//       // result.push()
//       console.log(">>>>>> final stack returned")
//       console.log(stack)
//     } else {
//       stack.push(s[i])
//     }
//
//   }
//
//   console.log("stack")
//   console.log(stack.join())
//   console.log(stack.join(""))
// };
// const popToOpen = (stack, popNb, tmp) => {
//   console.log(`-> popToOpen - popNb - ${popNb} - stack[i] - ${stack[popNb]}`)
//
//   if (0 > popNb) return stack;
//
//   if ("[" === stack[popNb]) {
//     stack.pop(); // Remove "["
//     let multiplier = [];
//     console.log("KLQWKLJELKJWLJKWQELKJEQWLKJQWELKJLKJWQELJKQWELKJW")
//     console.log(stack)
//
//     let l = stack.length - 1;
//
//     for (let j = l; j >= 0; j--) {
//       console.log(`---> in J loop - ${j}`)
//
//       let maybeNb = parseInt(stack[j]);
//       // because the numebr will never be 0 so we can use parseInt
//       if (!maybeNb && 0 !== maybeNb) {
//         console.log("NOT AN INT BYEEE")
//         console.log(stack[j])
//         break;
//       }
//
//       console.log("stack[j]")
//       console.log(stack[j])
//       multiplier = [...stack[j], ...multiplier];
//       stack.pop();
//     }
//
//     console.log("---> multiplier")
//     console.log(multiplier)
//     console.log(parseInt(multiplier.join()))
//     console.log("tmp")
//     console.log(tmp)
//
//     multiplier = parseInt(multiplier.join(""));
//
//     tmp = tmp.join("").repeat(multiplier).split("")
//     return [...stack, ...tmp];
//   }
//
//   // tmp = [stack.pop(), ...[...tmp, stack[i]]];
//   console.log("--before tmp")
//   console.log(tmp)
//   tmp = [...stack.pop(), ...tmp];
//
//   console.log("--- AFTER POP")
//   console.log(stack)
//   console.log(tmp)
//
//   return popToOpen(stack, popNb - 1, tmp)
// }
//
// // 14
// // decodeString("ww3[aaa2[abac]]2[a]a")
// // decodeString("2[asd]3[q]")
// // decodeString("2[asdww]")
// // decodeString("qq3[w]x")
// decodeString("33[w]z")
// decodeString("100[leetcode]")
