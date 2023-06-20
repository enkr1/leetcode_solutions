/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  let doesExist = false;
  // , wordList = word.split("");
  // console.log(wordList);
  // wordList.shift()
  // console.log(wordList);

  const expand = (r, c, visit, i) => {
    console.log(`r:${r}, c:${c}, i:${i}, visit:`)
    // console.log(wordList)
    console.log(visit)
    // console.log(i)
    // console.log(word.length)
    // console.log(i === word.length)

    if (i === word.length) {
      console.log(">>>>>>>> >TRUE")
      doesExist = true;
    }

    if (
      r === board.length ||
      c === board[0].length ||
      r < 0 ||
      c < 0 ||
      1 === visit[r][c]
    ) {
      return;
    }

    if (word[i] !== board[r][c]) return;

    console.log(`${word[i]} vs ${board[r][c]}`)
    visit[r][c] = 1;
    i++
    // wordList.shift();

    // expand(r, c + 1, visit, wordList);
    // expand(r + 1, c, visit, wordList);
    // expand(r, c - 1, visit, wordList);
    // expand(r - 1, c, visit, wordList);
    expand(r, c + 1, visit, i);
    expand(r + 1, c, visit, i);
    expand(r, c - 1, visit, i);
    expand(r - 1, c, visit, i);
  }

  // console.log(board)
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (!doesExist && word[0] === board[r][c]) {
        console.log(`>>>>> ${word[0]} === ${board[r][c]}`)
        let visit = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => 0))
        // let wordList = word.split("");
        // expand(r, c, visit, wordList);
        expand(r, c, visit, 0);
      }
    }
  }

  // console.log(board)

  return doesExist;
};

let x = null;
// x = exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED")

// x = exist([
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"]
// ], "ABCCED")//true

x = exist([
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"]
], "ABCEFSADEESE") // true

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


console.log("Result")
console.log(x)
