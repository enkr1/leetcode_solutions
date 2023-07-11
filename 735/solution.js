/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let result = []

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i]
    if (curr > 0 || i === 0) {
      result.push(curr);
      continue;
    }

    curr *= -1;

    let last = null, idx = result.length - 1, collided = false;
    while (idx >= 0) {
      last = result[idx] // last in result

      if (
        (last < 0) // same direction
        || (last > curr) // bigger
      ) break // prev/last > curr

      result.pop();

      if (last === curr) {
        collided = true;
        break;
      }

      idx--;
    }

    if (collided) continue;
    if (last < curr) result.push(-curr)
  }

  return result;
};
