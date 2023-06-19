/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  if (matrix.length === 1) return matrix[0];
  let nextDirection = new Map(), formula = new Map();
  nextDirection.set("r", "b")
  nextDirection.set("b", "l")
  nextDirection.set("l", "t")
  nextDirection.set("t", "r")

  formula.set("r", { r: 0, c: 1 })
  formula.set("b", { r: 1, c: 0 })
  formula.set("l", { r: 0, c: -1 })
  formula.set("t", { r: -1, c: 0 })

  console.log(nextDirection)
  console.log(formula)

  let spiralList = [];

  const moveNext = (r, c, dir) => {
    let nextDir = nextDirection.get(dir);
    let { r: newR, c: newC } = formula.get(nextDir);
    console.log(`>> Going nextDir:${nextDir}, newR:${r + newR + (r === matrix.length ? -1 : 0)}, newC:${c + newC + (c === matrix[0].length ? -1 : 0)}`)
    // let isREdge = r > matrix.length, isCEdge = c > matrix[0].length;
    // console.log("matrix[0].length ")
    // console.log(matrix[0].length)

    newR += r + (r === matrix.length ? -1 : 0) + (r < 0 ? 1 : 0)
    newC += c + (c === matrix[0].length ? -1 : 0) + (c < 0 ? 1 : 0)

    return { r: newR, c: newC, dir: nextDir };
  }

  const explore = (r, c, dir, tBorder, rBorder, bBorder, lBorder) => {
    console.log(`> r:${r}, c:${c}, dir:${dir}, tBorder:${tBorder}, rBorder:${rBorder}, bBorder:${bBorder}, lBorder:${lBorder}`)

    // edge
    console.log(r - bBorder === matrix.length)
    console.log(c - rBorder === matrix[0].length)
    console.log((dir === "t" && r < 0 + tBorder))
    console.log((dir === "l" && c < 0 + lBorder))
    console.log((dir === "r" && c + rBorder === matrix[0].length))
    console.log((dir === "b" && r + bBorder === matrix.length))
    if (
      r - bBorder === matrix.length ||
      c - rBorder === matrix[0].length ||
      (dir === "t" && r < 0 + tBorder) ||
      (dir === "l" && c < 0 + lBorder) ||
      (dir === "r" && c + rBorder === matrix[0].length) ||
      (dir === "b" && r + bBorder === matrix.length)
    ) {
      let next = moveNext(r, c, dir);

      explore(
        next.r + (next.dir === "r" ? tBorder : 0) + (next.dir === "l" ? -bBorder : 0),
        next.c + (next.dir === "b" ? -rBorder : 0) + (next.dir === "t" ? lBorder : 0),
        next.dir,
        tBorder + (next.dir === "r" ? 1 : 0),
        rBorder + (next.dir === "b" ? 1 : 0),
        bBorder + (next.dir === "l" ? 1 : 0),
        lBorder + (next.dir === "t" ? 1 : 0));
      return;
    }

    // visited - end
    // if (matrix.length < tries) {
    //   return;
    // }

    if (Infinity === matrix[r][c]) {
      // let next = moveNext(r, c, dir);
      // explore(next.r, next.c, next.dir, tries + 1);

      //       let nextDir = nextDirection.get(dir);
      //       let { r: newR, c: newC } = formula.get(nextDir);
      //       console.log(`>> Going newR:${r + newR + (r === matrix.length ? -1 : 0)}, newC:${c + newC + (c === matrix[0].length ? -1 : 0)}`)
      //       // let isREdge = r > matrix.length, isCEdge = c > matrix[0].length;
      //       console.log("matrix[0].length ")
      //       console.log(matrix[0].length)
      //
      //       newR += r + (r === matrix.length ? -1 : 0) + (r < 0 ? 1 : 0) - ((formula.get(dir).r));
      //       newC += c + (c === matrix[0].length ? -1 : 0) + (c < 0 ? 1 : 0) - ((formula.get(dir).c));
      //
      //       explore(newR, newC, nextDir, tBorder, rBorder, bBorder, lBorder);
      return;
    }

    spiralList.push(matrix[r][c]);
    matrix[r][c] = Infinity;

    let dirFormula = formula.get(dir);
    // console.log(`> r:${r}, c:${c}, addR:${dirFormula.r}, addC:${dirFormula.c}`)
    // if next we turn
    // matrix[r + dirFormula.r][c + dirFormula.c];
    explore(r + dirFormula.r, c + dirFormula.c, dir, tBorder, rBorder, bBorder, lBorder)
  }

  explore(0, 0, "r", 1, 0, 0, 0);
  console.log(matrix)
  return spiralList;
};

let x = null;

// [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,99,98,97,96,95,94,93,92,91,81,71,61,51,41,31,21,11,12,13,14,15,16,17,18,19,29,39,49,59,69,79,89,88,87,86,85,84,83,82,72,62,52,42,32,22,23,24,25,26,27,28,38,48,58,68,78,77,76,75,74,73,63,53,43,33,34,35,36,37,47,57,67,66,65,64,54,44,45,46,56,55]
// x = spiralOrder([
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//   [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//   [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//   [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//   [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//   [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//   [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
// ]);

// [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]
x = spiralOrder([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]);

// x = spiralOrder([[1]]);

// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
// x = spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]);

// [1,2,3,4,8,12,11,10,9,5,6,7]
// x = spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]);

// [1,2,3,6,9,8,7,4,5]
// x = spiralOrder([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]);
console.log("> R")
console.log(x)
