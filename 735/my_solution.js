/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let result = []

  //   const pushOrIgnore = (n) => {
  //     let last = result[result.length - 1]
  //     console.log(`pushOrIgnore - n: ${n}, l: ${last}`)
  //     console.log(result)
  //
  //
  //     if (last > n || last < 0) {
  //       // if ((result[result.length - 1] ?? -Infinity) < n) result.push(-n)
  //       return
  //     }
  //
  //     if (last == n) {
  //       console.log("l===n")
  //       result.pop()
  //     } else if (last < n) {
  //       console.log("l<n")
  //       result.pop()
  //       result.push(-n)
  //     }
  //
  //     return pushOrIgnore(n)
  //   }

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i]
    if (curr > 0 || i === 0) {
      result.push(curr);
      continue;
    }

    // console.log(`-> in here curr: ${curr}`)
    console.log(`> i: ${i}, curr: ${curr}`)
    console.log(result)
    curr *= -1;

    // let last = result[result.length - 1];
    // console.log(`> last: ${last}, curr: ${curr}`)

    let last = null, idx = result.length - 1, collided = false;
    while (idx >= 0) {
      last = result[idx] // last in result
      console.log(`-> idx: ${idx}, last: ${last}`)

      if (
        (last < 0) // same direction
        || (last > curr) // bigger
      ) break // prev/last > curr
      // all positive

      console.log(result)

      // if (result.length > 0)

      result.pop();
      if (last === curr) {
        collided = true;
        break;
      }
      idx--;
    }

    if (collided) continue

    console.log("after")
    console.log(result)
    // console.log(`--> last: ${last}, curr: ${curr}`)
    // if (last < 0) last *= -1;
    // if ((result[result.length - 1] ?? -Infinity) < curr) result.push(-curr)
    if (last < curr) result.push(-curr)
    // curr is <

    // pushOrIgnore(curr)
  }

  return result;
};

let x =
  // asteroidCollision([-2, 1, -2, -2]) // [-2,-2,-2]
  // asteroidCollision([-2, -2, 1, -1]) // [-2,-2]
  // asteroidCollision([-2, -1, 1, 2])
  // asteroidCollision([5, 10, -15])
  // asteroidCollision([5, 10, -5])
  // asteroidCollision([8, -8])
  asteroidCollision([10, 2, -5])
console.log("Res")
console.log(x)
