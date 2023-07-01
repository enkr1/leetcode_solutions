/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let foundList = [],
    visited = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false))


  const exploreNextWord = (word, i, r, c) => {
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

    visited[r][c] = false;

    return res;
  }

  for (let i = 0; i < words.length; i++) {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === words[i][0]) {
          if (exploreNextWord(words[i], 0, r, c) && !foundList.includes(words[i])) {
            foundList.push(words[i]);
          }
        }
      }
    }
  }

  return foundList;
};
