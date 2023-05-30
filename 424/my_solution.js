// const characterReplacement = (s, k) => {
//   let max = 0, char = s.split("");
//
//   // loop thru the char, to move expand it by k if NOT the same (then decrease the tmpK)
//
//
//   for (let i = 0; i < char.length; i++) {
//     let count = 1, tmpK = k;
//
//     console.log("-----> " + i)
//     for (let j = 0; j < char.length; j++) {
//       if (i === j) continue;
//       console.log(`1:${char[i]}, 2:${char[j]}, tmpK:${tmpK}`)
//
//       if (char[i] !== char[j]) {
//         if (tmpK > 0) {
//           // increase count by 1 when same or k > 0 & not the same
//           tmpK--;
//           count++;
//           console.log(`---> char:${char[i]}, tmpK:${tmpK}, count:${count}`)
//         } else { // stop when diff and k == 0
//           count = 1;
//           console.log("-> stop:" + count)
//           continue;
//         }
//       } else {
//         count++;
//         console.log(`${char[i]}==${char[j]}, tmpK:${tmpK}, count:${count}`)
//       }
//
//       // get max from count and max
//       max = Math.max(max, count);
//     }
//   }
//
//   console.log("max")
//   console.log(max)
//
//   return max;
// }
const characterReplacement = (s, k) => {
  let max = 0, maxF = 0, char = s.split(""), map = new Map(), l = 0, r = 0;

  while (r < char.length) {
    let newC = (map.get(char[r]) || 0) + 1;
    console.log(char[r] + ":newC:" + newC)
    map.set(char[r], newC)

    maxF = Math.max(maxF, newC);

    // console.log(((r - l + 1) - maxF))
    if (((r - l + 1) - maxF) > k) {
      console.log("reset")
      console.log(map.get(char[l]))
      map.set(char[l], map.get(char[l]) - 1);
      console.log(map.get(char[l]))
      l++;
    }

    max = Math.max(max, (r - l + 1));

    r++;
  }

  console.log("CHECK")
  console.log(max)
  // console.log(Array.from(map.keys()).length)
  // console.log(maxF)
  // console.log(k)
  // console.log(maxF + ((1 === Array.from(map.keys()).length) ? 0 : k))

  return max;
}



// characterReplacement("ABAB", 2)
// characterReplacement("AABABBA", 1)
// characterReplacement("AAAA", 2)
characterReplacement("ABBB", 2)
// characterReplacement("AABABBA", 1)
