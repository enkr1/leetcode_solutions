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
  let count = 0, tmpPrev = null;
  for (let i = 0; i < arr1.length; i++) {
    let prev = arr1[i - 1];
    if (undefined === prev || undefined === arr1[i - 2]) continue;

    console.log(`prev:${prev} > arr1[i]:${arr1[i]}`)
    if (prev > arr1[i]) {
      let tmpCount = 0;

      // Get smallest
      let toReplace = [], smallest = Infinity;
      for (let j = 0; j < arr2.length; j++) {
        console.log(`j:${j}`)
        console.log(arr2)
        console.log(`> ? ${arr1[i - 2]} < ${arr2[j]} < ${arr1[i]} - tmpPrev:${tmpPrev}, arr2[j]:${arr2[j]}`)
        if (tmpPrev === arr2[j]) {
          console.log("ENd")
          return -1;
        }
        if (arr1[i - 2] < arr2[j] && arr2[j] < arr1[i]) {
          // tmpCount++;
          // let btwItem = arr2[j];
          // arr2.splice(j, 1)
          // tmpPrev = btwItem;
          // console.log(`> Y ${arr1[i - 2]} < ${arr2[j]} < ${arr1[i + expand]}`)
          // arr1[i - 1] = btwItem;
          // console.log(arr1)
          toReplace.push(arr2[j])
          smallest = Math.min(smallest, arr2[j]);
        }

        count += tmpCount;
        console.log("toReplace")
        console.log(toReplace)
        console.log("arr1")
        console.log(arr1)
        console.log("smallest")
        console.log(smallest)
        arr1[i - 1] = smallest;
      }
    }
  }

  return (0 === count) ? -1 : count;
};

let x = null;
// x = makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4]);
// x = makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1]);
// x = makeArrayIncreasing([1, 5, 3, 6, 7], [1, 6, 3, 3]);
// x = makeArrayIncreasing([7, 6, 3, 0, 3], [9]);
x = makeArrayIncreasing([0, 11, 6, 1, 4, 3], [5, 4, 11, 10, 1, 0]);

console.log("Result");
console.log(x);
