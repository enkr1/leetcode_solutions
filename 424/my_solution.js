const characterReplacement = (s, k) => {
  let max = 0, char = s.split("");

  // loop thru the char, to move expand it by k if NOT the same (then decrease the tmpK)

  for (let i = 0; i < char.length; i++) {
    for (let j = i + 1; j < char.length; j++) {
      let count = 0, tmpK = k;
      // clean up
      if (char[i] !== char[j]) {
        if (tmpK > 0) {
          // increase count by 1 when same or k > 0 & not the same
          tmpK--;
          count++;
        } else { // stop when diff and k == 0
          continue;
        }
      } else {
        count++;
      }

      // get max from count and max
      max = Math.max(max, count);
    }
  }

  return max;
}
