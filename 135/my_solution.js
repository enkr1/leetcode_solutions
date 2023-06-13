/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
  let leftList = Array(ratings.length).fill(1),
    rightList = Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i++) {
    let prev = ratings[i - 1];
    if (prev === undefined) continue;
    if (prev < ratings[i]) {
      leftList[i] += leftList[i - 1];
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    let behind = ratings[i + 1];
    if (behind === undefined) continue;
    if (behind < ratings[i]) {
      rightList[i] += rightList[i + 1];
    }
  }

  let result = 0;
  for (let i = 0; i < ratings.length; i++) {
    result += Math.max(leftList[i], rightList[i]);
  }

  return result;
};

// const candy = (ratings) => {
//   let total = 0, prevSum = 1, min = 0, gap = 0;;
//   // let total = 0, groupList = [], tmpGroupCount = 0;
//   for (let i = 0; i < ratings.length; i++) {
//     let curr = ratings[i],
//       prev = (undefined === ratings[i - 1]) ? curr : ratings[i - 1],
//       next = (undefined === ratings[i + 1]) ? curr : ratings[i + 1];
//     // console.log("__")
//     // console.log(prev)
//     // console.log(next)
//     // let sum = ((curr > prev) || (curr > next)) ? prevSum + 1 : 1;
//     // if ()
//     let sum = ((curr > prev) || (curr > next)) ? prevSum + 1 : 1;
//     console.log("________________")
//     console.log(`curr:${curr}, sum:${sum}, total:${total}`)
//     if ((prev < curr || prev === curr) && curr > next) { // first time
//       min = (prev === curr) ? sum - 1 : sum;
//       sum = 0;
//       gap++;
//       console.log(`Setting the min for the first time min:${min}, gap:${gap}`)
//     } else if (curr > next) {
//       sum = 0;
//       gap++;
//       console.log(`going down - min:${min}, gap:${gap}`)
//     } else if (curr < next || prev < curr || next === curr) {
//       console.log(`going up / stagnent - min:${min}, gap:${gap}, sum:${sum}`)
//
//       if (min !== 0) {
//         sum = 0;
//         for (let i = 0; i < gap; i++) {
//           sum += sum + 1;
//           console.log(`>>> sum:${sum}`)
//         }
//         console.log(`> sum:${sum}`)
//
//         sum = ((((gap + 1) > min) ? (gap + 1) : min) + sum);
//         console.log(`>> sum:${sum}`)
//         min = 1;
//         gap = 1;
//         total += sum;
//         sum = 0;
//       }
//     }
//
//     total += sum; // Going down - dont add
//
//     prevSum = sum;
//   }
//   return total;
// };

let x = candy([1, 0, 2]); // 5
// let x = candy([1, 2, 2]); // 4
// let x = candy([1, 2, 87, 87, 87, 2, 1]); // 13
// let x = candy([1, 2, 3, 4, 5, 6, 6, 6, 1, 3, 2]); // 28
// let x = candy([29, 51, 87, 87, 72, 12]); // 12
console.log(x);
