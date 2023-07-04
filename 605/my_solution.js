/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    console.log(`i:${i}`)
    if (
      ((flowerbed[i - 1] ?? 0) === 0) &&
      ((flowerbed[i + 1] ?? 0) === 0) &&
      (flowerbed[i] === 0)
    ) {
      console.log(`[i - 1]: ${(flowerbed[i - 1])}, [i]: ${(flowerbed[i])}, [i + 1]: ${(flowerbed[i + 1])}`)
      console.log(((flowerbed[i - 1] || 0) === 0))
      console.log(((flowerbed[i + 1] || 0) === 0))
      console.log((flowerbed[i] === 0))
      console.log("what")
      flowerbed[i] = 1;
      n--;
    }
  }

  console.log(`-> n:${n}`)

  return n <= 0;
};

let x =
  //   canPlaceFlowers([1, 0, 0, 0, 1], 1) // true
  canPlaceFlowers([1, 0, 0, 0, 0, 1], 2) // false
  // canPlaceFlowers([0, 0, 1, 0, 1], 1) // true
  // canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2) // true
  // canPlaceFlowers([0, 0, 1, 0, 0], 1) // true
  // canPlaceFlowers([0, 1, 0, 1, 0, 1, 0, 0], 1) // true

console.log("Result")
console.log(x)
