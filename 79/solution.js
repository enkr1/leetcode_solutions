/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  let visit = new Set();

  const expand = (r, c, i) => {
    if (i === word.length) return true;

    if (
      r === board.length ||
      c === board[0].length ||
      r < 0 ||
      c < 0 ||
      visit.has(`${r}${c}`) ||
      word[i] !== board[r][c]
    ) return false;

    visit.add(`${r}${c}`);
    i++

    let res = expand(r, c + 1, i) ||
      expand(r + 1, c, i) ||
      expand(r, c - 1, i) ||
      expand(r - 1, c, i);

    visit.delete(`${r}${c}`);

    return res;
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (word[0] === board[r][c]) {
        if (expand(r, c, 0)) return true;
      }
    }
  }

  return false;
};
