/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let divByThree = i % 3 === 0, divByFive = i % 5 === 0, val = "";

    if (divByThree) val += "Fizz";
    if (divByFive) val += "Buzz";
    if (!divByThree && !divByFive) val += `${i}`

    result.push(val);
  }

  return result;
};

let x = null;
x = fizzBuzz(3);//

console.log("Result")
console.log(x)
