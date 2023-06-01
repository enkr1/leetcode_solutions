/**
 * @param {string} s
 * @return {boolean}
*/
const isPalindrome = (s) => {
  // process the string to trim &
  // gpt why what is this fking regex
  s = s.replace(/[^a-zA-Z0-9]+/g, '').trim().toLowerCase();
  //s= s.replace(/[a-zA-z]/g);
  console.log(s)
  //	for (let i = 0; i < s.length; i++) {

  let l = 0, r = s.length - 1;

  while (l <= r) {

    if (s[l] !== s[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

// let x = isPalindrome("A man, a plan, a canal: Panama")
// let x = isPalindrome("A man, a plan, a canal: Panama")
let x = isPalindrome("0P")
console.log("result")
console.log(x)
