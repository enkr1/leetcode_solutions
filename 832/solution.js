/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
  let result = Array.from({ length: image.length }, () => Array.from({ length: image[0].length }, () => []));
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      result[row][image[row].length - 1 - col] = image[row][col] ^ 1;
    }
  }
  return result;
};

