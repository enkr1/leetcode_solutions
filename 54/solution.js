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

  let spiralList = [];

  const moveNext = (r, c, dir) => {
    let nextDir = nextDirection.get(dir);
    let { r: newR, c: newC } = formula.get(nextDir);

    newR += r + (r === matrix.length ? -1 : 0) + (r < 0 ? 1 : 0)
    newC += c + (c === matrix[0].length ? -1 : 0) + (c < 0 ? 1 : 0)

    return { r: newR, c: newC, dir: nextDir };
  }

  const explore = (r, c, dir, tries) => {
    // edge
    if (
      r === matrix.length ||
      c === matrix[0].length ||
      r < 0 ||
      c < 0
    ) {
      let next = moveNext(r, c, dir);
      explore(next.r, next.c, next.dir, tries);
      return;
    }

    // visited - end
    if (matrix.length < tries) {
      return;
    }

    if (Infinity === matrix[r][c]) {

      let nextDir = nextDirection.get(dir);
      let { r: newR, c: newC } = formula.get(nextDir);

      newR += r + (r === matrix.length ? -1 : 0) + (r < 0 ? 1 : 0) - ((formula.get(dir).r));
      newC += c + (c === matrix[0].length ? -1 : 0) + (c < 0 ? 1 : 0) - ((formula.get(dir).c));

      explore(newR, newC, nextDir, tries + 1);
      return;
    }

    spiralList.push(matrix[r][c]);
    matrix[r][c] = Infinity;

    let dirFormula = formula.get(dir);
    explore(r + dirFormula.r, c + dirFormula.c, dir, tries)
  }

  explore(0, 0, "r", 0);
  return spiralList;
};
