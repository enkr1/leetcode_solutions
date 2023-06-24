/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
const longestString = (x, y, z) => {
  let map = new Map(), leftCompliment = new Map(), rightCompliment = new Map(), string = "AA";

  map.set("AA", x - 1)
  map.set("BB", y)
  map.set("AB", z)

  leftCompliment.set("A", ["AB", "BB"])
  leftCompliment.set("B", ["AA"])
  rightCompliment.set("A", ["BB"])
  rightCompliment.set("B", ["AB", "AA"])

  //   fromString(x, "AA")
  //   fromString(y, "BB")
  //   fromString(z, "AB")
  //
  //   const fromString = (n, placeholder) => {
  //     for (let i = 0; i < n; i++) {
  //       string.push(placeholder);
  //     }
  //   }

  const expandToLeft = () => {
    let complimentOfFirstChar = [...leftCompliment.get(string[0])];
    console.log(`l -> string[0]:${string[0]}, complimentOfFirstChar:${complimentOfFirstChar}, string:${string}`);
    console.log(leftCompliment)
    console.log(complimentOfFirstChar)

    while (0 !== complimentOfFirstChar.length) {
      console.log("????")
      console.log(complimentOfFirstChar)
      let curr = complimentOfFirstChar.shift();
      console.log(`l -> map.get(curr):${curr}`)
      console.log(`l --> curr1:${curr}`)
      if (map.get(curr) > 0) {
        map.set(curr, map.get(curr) - 1)
        string = `${curr}${string}`;
        console.log(`l --> ${string}`)
        console.log(`l --> curr2:${curr}`)

        return expandToLeft();
      }
    }
  }

  const expandToRight = () => {
    let lastChar = string[string.length - 1], complimentOfLastChar = [...rightCompliment.get(lastChar)];
    console.log(`r -> lastChar:${lastChar}, complimentOfLastChar:${complimentOfLastChar}`);

    while (0 !== complimentOfLastChar.length) {
      let curr = complimentOfLastChar.shift();
      console.log(`r -> map.get(curr):${curr}`)
      if (map.get(curr) > 0) {
        let abCount = map.get(curr);
        if ("AB" === curr) {
          for (let i = 0; i < abCount; i++) {
            map.set(curr, map.get(curr) - 1)
            string += curr;
          }
        } else {
          map.set(curr, map.get(curr) - 1)
          string += curr;
        }
        console.log(`r --> ${string}`)
        return expandToRight();
      }
    }
  }

  expandToLeft();
  expandToRight();

  console.log(string)

  return string.length;
};


let x = null;
// x = longestString(2, 5, 1) // 12
// x = longestString(3, 2, 2) // 14
// x = longestString(1, 34, 1) // 8
x = longestString(2, 5, 1) // 12
console.log(x)
