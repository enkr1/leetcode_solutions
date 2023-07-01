/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let foundList = [],
    visited = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false)),
    directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1]
    ]

  console.log(board)
  console.log(words)

  // dfs
  const exploreNextWord = (word, i, r, c) => {
    console.log(`i:${i},w:${word},r:${r},c:${c}`)
    // console.log("visited")
    // console.log(visited)
    if (word.length === i) return true;
    if (
      r < 0 || c < 0 ||
      r === board.length || c === board[0].length ||
      visited[r][c] ||
      board[r][c] !== word[i]
    ) return false;


    visited[r][c] = true;
    i++;

    let res =
      exploreNextWord(word, i, r + 1, c) ||
      exploreNextWord(word, i, r, c + 1) ||
      exploreNextWord(word, i, r - 1, c) ||
      exploreNextWord(word, i, r, c - 1);

    //     console.log(`>>> looking at ${board[r][c]}`)
    //     if (word[i] === board[r][c]) {
    //       console.log(`>>> comparing with: ${word[i]} === ${board[r][c]} ?`)
    //       return true;
    //       // char.shift();
    //       // visited = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false));
    //     }
    //
    //     for (let [dr, dc] of directions) {
    //       if (exploreNextWord(char, i, r + dr, r + dc)) return true;
    //     }

    // Unmark current cell
    visited[r][c] = false;

    return res;
  }

  // const visited = [...Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false))]
  // console.log("visited")
  // console.log(visited)
  for (let i = 0; i < words.length; i++) {
    // let tmpVisited = [...visited];
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === words[i][0]) {
          console.log("____________________________________________")
          console.log(`checking:${board[r][c]} === ${words[i][0]}`)
          console.log(words[i]);
          // console.log(words[i].split("").splice(1, words[i].length - 1))
          // if (exploreNextWord(words[i].split("").splice(1, words[i].length - 1), r, c, tmpVisited)) {
          // if (exploreNextWord(words[i].split("").splice(1, words[i].length - 1), 0, r, c)) {
          if (exploreNextWord(words[i], 0, r, c) && !foundList.includes(words[i])) {
            console.log(" FOUND ASKLLDSAKSDLKJADSLJKASDLKJASDKLJS")
            foundList.push(words[i]);
          }
        }
      }
    }
  }

  return foundList;
};

/*
Input:
  board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
  words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
*/

let x =
  findWords(

    [["o", "a", "b", "n"], ["o", "t", "a", "e"], ["a", "h", "k", "r"], ["a", "f", "l", "v"]],
    ["oa", "oaa"]

    // [["a", "b"], ["c", "d"]],
    // ["abcb"]


    // [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]],
    // ["oath", "pea", "eat", "rain"]
  )

console.log("result")
console.log(x)
