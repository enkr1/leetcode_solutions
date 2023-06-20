/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  let doesExist = false;

  const expand = (r, c, visit, wordList) => {
    if (0 === wordList.length) {
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

    if (wordList[0] === board[r][c]) {
      visit[r][c] = 1;
      wordList.shift();

      expand(r, c + 1, visit, wordList);
      expand(r + 1, c, visit, wordList);
      expand(r, c - 1, visit, wordList);
      expand(r - 1, c, visit, wordList);
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (!doesExist && word[0] === board[r][c]) {
        let visit = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => 0))
        let wordList = word.split("");
        expand(r, c, visit, wordList);
      }
    }
  }

  return doesExist;
};
