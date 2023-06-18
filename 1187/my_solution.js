/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const makeArrayIncreasing = (arr1, arr2) => {
  console.log(arr1)
  console.log(arr2)

  //   let sortedArr2 = [], firstPartOfArr2 = arr2.slice(0, Math.ceil(arr2.length / 2)), secondPartOfArr2 = arr2.slice(Math.ceil(arr2.length / 2));
  //   console.log(firstPartOfArr2)
  //   console.log(secondPartOfArr2)
  //   console.log(arr2)
  //
  //   while (0 < firstPartOfArr2.length || 0 < secondPartOfArr2.length) {
  //     if (0 === firstPartOfArr2.length && 0 === secondPartOfArr2.length) break;
  //
  //     if (0 < firstPartOfArr2.length && firstPartOfArr2[0] < secondPartOfArr2[0]) {
  //       sortedArr2.push(firstPartOfArr2.shift());
  //     }
  //   }
  let count = 0, tmpnext = null;
  for (let i = 0; i < arr1.length; i++) {
    let next = arr1[i + 1];
    if (undefined === next || undefined === arr1[i + 2]) continue;

    console.log(`-> i:${i}, curr:${arr1[i]} - next:${next} < arr1[i]:${arr1[i]}`)
    if (next < arr1[i]) {

      // Get smallest
      let smallest = Infinity, smallestIdx = -1;
      for (let j = 0; j < arr2.length; j++) {
        console.log(`-> j:${j}, arr2[j]:${arr2[j]}`)

        if (tmpnext === arr2[j]) {
          console.log("ENd ...")
          return -1;
        }

        // if (arr1[i - 2] < arr2[j] && arr2[j] < arr1[i] && arr2[j] < smallest) {
        if (arr1[i - 1] < arr2[j] && arr2[j] < smallest) {
          console.log(`---> ${arr1[i - 1]} < [${arr2[j]}] < ${smallest}`)
          smallest = arr2[j];
          smallestIdx = j;
        }
      }


      if (Infinity !== smallest) {
        console.log("smallest:" + smallest)
        console.log("smallestIdx:" + smallestIdx)
        arr2.splice(smallestIdx, 1);
        arr1[i] = smallest;
        count++;
        // i--;
      }

      console.log("arr1:post")
      console.log(arr1)

      console.log("> arr2:post")
      console.log(arr2)
    }
  }

  console.log()


  return (0 === count) ? -1 : count;
};

let x = null;
// x = makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4]);
// x = makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1]);
// x = makeArrayIncreasing([1, 5, 3, 6, 7], [1, 6, 3, 3]);
// x = makeArrayIncreasing([7, 6, 3, 0, 3], [9]);
x = makeArrayIncreasing([0, 11, 6, 1, 4, 3], [5, 4, 11, 10, 1, 0]); // 5
x = makeArrayIncreasing([0, 10, 20, 30, 4], [1, 2, 3]); // 5

console.log("Result");
console.log(x);
