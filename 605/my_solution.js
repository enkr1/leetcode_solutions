/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;

  let placeNeeded = 1;
  for (let i = 0; i < n; i++) {
    placeNeeded += 2;
  }

  return (flowerbed.length - 2) >= placeNeeded;
};
