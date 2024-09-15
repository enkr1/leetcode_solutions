// let obj = {};
// console.log(obj["a"])
// if (obj["a"]) {
//   console.log("y")
// } else {
//   console.log("n")
// }
//
//
//
// function extractWords(str) {
//   // replace(/[^\p{L}\s]/gu, '').replace(/\s+/g, ' ').trim()
//   // return str.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, ' ').trim();
//   return str.replace(/[^a-zA-Z]+/g, '').trim();
//   return str.replace(/[^a-zA-Z\s]+/g, ' ').trim();
//
// }
//
//
// // let str ="qw1 19jod12901j2@J(!@#"
// let str = "A man, a plan, a canal: Panama";
// console.log(extractWords(str));


//
// let x = [1, 2, 3];
// console.log(x); // Output: [1, 2, 3]
//
// let y = [...x];
// // console.log(y.splice(2, 0, 4)); // Output: []
// y.splice(0, 0, 4)
//
// console.log(y); // Output: [1, 2, 4, 3]

// console.log(2 % 2 == 0);
// console.log(3 % 2 == 0);
// console.log(4 % 2 == 0);
//
// const fizzBuzz = (n) => {
//   let result = "";
//   if (n % 3 === 0) result = "Fizz"
//   if (n % 5 === 0) result += "Buzz"
//   return result;
// }
// let fb = fizzBuzz(15)
// console.log("fb")
// console.log(fb)
//
//

// Fill
// let o = Array.from({ length: 3 }, () => []);
// let o = Array(3).fill([])//.map(() => []);
// o[2] = [1, 3, 4]
// console.log(o)
//
// let x = Array(3).fill([]);
// x[1].push(2)
// // x[1] = 2
// console.log(x)
//

// n = 5;
// const g =
//   // Array(n).fill([]);
// // Array(n).fill().map(() => []);
// Array.from({ length: n }, () => []);
// g[1].push(2)
//
// console.log(g)


// Set
// let set = new Set();
// let x = [2, 2]
// set.add([1, 2])
// set.add([0, 3])
// set.add(x)
// console.log(set)
// console.log(set.has([0, 2]))
// console.log(set.has([0, 3]))
// console.log(set.has([1, 2]))
// console.log(set.has(x))

// // Map
// let map = new Map([["key", "value"], ["rrsrsr", true]])
// console.log(map)
// console.log(map.values()) // "value", true
// for (let value of map.values()) {
//   console.log(`in loop:${value}`)
// }

// Array
// let l = [];
// console.log(l)
// l[1] = [1, 2, 3];
// console.log(l)

// Null
// console.log(null + 1);

// Decimal
// console.log(Math.round(324631.99999999994));

// console.log(0 > 0);

// console.log(0 ^ 0);
// console.log(1 ^ 0);
// // convert 0 -> 1; 1 -> 0
// console.log(0 ^ 1);
// console.log(1 ^ 1);
// console.log()
// console.log(0 & 0);
// console.log(1 & 0);
// console.log(0 & 1);
// console.log(1 & 1);

// Array
// console.log(Array(26).fill(0));


// let x = [1, 2, 3]
// console.log(x)
// console.log("splicing index 1 from x")
// x.splice(1, 1)
// console.log(x)

let x = 1;
console.log("x")
console.log(x)

x = [1, 2, 3];
console.log("> x")
console.log(x)
