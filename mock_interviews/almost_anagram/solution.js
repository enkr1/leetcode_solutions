//
// 10
// "race",
// "beat",
// "brass",
// "grass",
// "sabre",
// "back",
// "chat",
// "cabs",
// "saga",
// "pack"
//
// Output:
// race 0
// beat 0
// brass 2
// grass 1
// sabre 1
// back 2
// chat 0
// cabs 1
// saga 0
// pack 1

// const readline = require('readline');

// 2. helper fn to find the words are only 1 in difference
const processAlmostAnagramPair = (list) => {
  // console.log("list")
  // console.log(list)
  // let mapList = [];
  //   // Create the readline interface
  //   const rl = readline.createInterface({
  //     input: process.stdin
  //   }), r2 = readline.createInterface({
  //     input: process.stdin,
  //     output: process.stdout
  //   });
  //
  //   // Prompt the user for input
  //   // 0. Collecting n and list of words
  //   let n = 0, l = [];
  //
  //   rl.question('0. Enter number: ', (userInput) => {
  //     n = userInput;
  //     for (let i = 0; i < n; i++) {
  //       r2.question(`${i + 1}. Enter word:`, (word) => {
  //         l.push(word);
  //         r2.close();
  //       });
  //     }
  //     rl.close();
  //   });

  let result = new Map();

  for (let i = 0; i < list.length; i++) {
    for (let k = 0; k < list.length; k++) {
      if (i !== k) { // Ignore the same node
        let curr = list[i];
        result.set(curr,
          (result.has(curr) ? result.get(curr) : 0) + (isAlmostAnagram(curr, list[k]) ? 1 : 0))
      }
    }
  }

  console.log("result")
  console.log(result)

  return result;
}

const isAlmostAnagram = (item1, item2) => {
  if (item1.length !== item2.length) return null;

  let char = item1.split(""), count = 0;
  let map1 = createMap(item1), map2 = createMap(item2);

  for (let i = 0; i < char.length; i++) {
    // console.log(char[i])
    // console.log(`${item1} => ${item2}`)
    // Here is a trick, as long as they have the same value AND ONLY if both of them have values (appeared) more than 0.
    // As we are doing deduction below.
    if ((map1.has(char[i]) && map2.has(char[i]))
      && (0 < map1.get(char[i])
        && 0 < map2.get(char[i]))
    ) {
      // console.log(`map1.get(char[i]):${map1.get(char[i])} === map2.get(char[i]):${map2.get(char[i])}`)
      map1.set(char[i], map1.get(char[i]) - 1)
      map2.set(char[i], map2.get(char[i]) - 1)
      count++;
    }
  }

  console.log(`${item1} x ${item2} - char.length:${char.length}, count:${count}, isAlmostAnagram?:${1 === (char.length - count)}`)
  return (1 === (char.length - count));  // Almost anagram => -1 | 1 word different
}

const createMap = (item) => {
  let map = new Map();
  if (undefined === item) return map;

  let char = item.split("");

  for (let i = 0; i < char.length; i++) {
    map.set(char[i], ((map.has(char[i])) ? map.get(char[i]) : 0) + 1)
  }

  // console.log("map")
  // console.log(map)

  return map;
}

// 10
// "race",
// "beat",
// "brass",
// "grass",
// "sabre",
// "back",
// "chat",
// "cabs",
// "saga",
// "pack"
//
// Output:
// race 0
// beat 0
// brass 2
// grass 1
// sabre 1
// back 2
// chat 0
// cabs 1
// saga 0
// pack 1

processAlmostAnagramPair(["race", "beat", "brass", "grass", "sabre", "back", "chat", "cabs", "saga", "pack"]);
