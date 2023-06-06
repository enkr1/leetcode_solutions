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

let o = Array.from({ length: 3 }, () => []);
o[2] = [1, 3, 4]
console.log(o)

let x = Array(3).fill([]);
x[1].push(2)
console.log(x)
