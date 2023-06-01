let obj = {};
console.log(obj["a"])
if (obj["a"]) {
  console.log("y")
} else {
  console.log("n")
}



function extractWords(str) {
  // replace(/[^\p{L}\s]/gu, '').replace(/\s+/g, ' ').trim()
  // return str.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, ' ').trim();
  return str.replace(/[^a-zA-Z]+/g, '').trim();
  return str.replace(/[^a-zA-Z\s]+/g, ' ').trim();

}


// let str ="qw1 19jod12901j2@J(!@#"
let str = "A man, a plan, a canal: Panama";
console.log(extractWords(str));
