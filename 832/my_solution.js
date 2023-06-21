/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {

  let result = Array.from({ length: image.length }, () => Array.from({ length: image[0].length }, () => []));
  console.log(result)
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      result[row][image[row].length - 1 - col] = image[row][col] ^ 1;
    }
  }
  return result;
};

let x = null;
x = flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])
console.log("Result")
console.log(x)
