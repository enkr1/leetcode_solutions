/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  // let doesExist = false;
  // , wordList = word.split("");
  // console.log(wordList);
  // wordList.shift()
  // console.log(wordList);
  console.log(board);
  console.log(word);
  // let visit = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => 0))
  let visit = new Set();

  const expand = (r, c, i) => {
    console.log(`r:${r}, c:${c}, i:${i}, visit:`)
    // console.log(wordList)
    console.log(visit)
    console.log("visited?:" + visit.has(`${r}${c}`))
    // console.log(i)
    // console.log(word.length)
    // console.log(i === word.length)

    if (i === word.length) {
      console.log(">>>>>>>> >TRUE")
      return true;
    }

    if (
      r === board.length ||
      c === board[0].length ||
      r < 0 ||
      c < 0 ||
      visit.has(`${r}${c}`) ||
      word[i] !== board[r][c]
    ) {
      return false;
    }

    // visit[r][c] = 1;
    visit.add(`${r}${c}`);
    console.log(visit)
    i++

    let res = expand(r, c + 1, i) ||
      expand(r + 1, c, i) ||
      expand(r, c - 1, i) ||
      expand(r - 1, c, i);

    console.log("... Deleting visit")
    console.log(visit)
    visit.delete(`${r}${c}`);
    console.log(visit)
    return res;
    // return expand(r, c + 1, i) ||
    //   expand(r + 1, c, i) ||
    //   expand(r, c - 1, i) ||
    //   expand(r - 1, c, i);
  }

  // console.log(board)
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (word[0] === board[r][c]) {
        console.log(`>>>>> ${word[0]} === ${board[r][c]}`)
        // let wordList = word.split("");
        // expand(r, c, visit, wordList);
        if (expand(r, c, 0)) return true;
      }
    }
  }

  return false;
};

let x = null;
// x = exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")

// x = exist([
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"]
// ], "ABCCED")//true

// x = exist([
//   ["A", "B", "C", "E"],
//   ["S", "F", "E", "S"],
//   ["A", "D", "E", "E"]
// ], "ABCEFSADEESE") // true

// x = exist(
//   [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
//   ], "ABCB") // false

// x = exist(
//   [
//     ["a", "b"],
//     ["c", "d"]
//   ], "abcd") // false

// x = exist(
//   [
//     ["a", "a", "a", "a"],
//     ["a", "a", "a", "a"],
//     ["a", "a", "a", "a"]
//   ], "aaaaaaaaaaab") // false

x = exist(
  [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"]
  ], "AAB") // true


console.log("Result")
console.log(x)
