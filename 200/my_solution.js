/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // console.log(grid)
  let map = {}, order_list = [];

  // mapify the list - all of the island
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ("1" === grid[i][j]) {
        map[`${j}${i}`] = { x: j, y: i };
        order_list.push(`${j}${i}`)
      }
    }
  }

  console.log("map")
  console.log(map)
  // console.log("order_list")
  // console.log(order_list)
  order_list.sort();
  //
  //   let reordered_map = {};
  //   for (const key of order_list) {
  //     reordered_map[key] = map[key];
  //     console.log("reordered_map")
  //     console.log(reordered_map)
  //   }

  // console.log("map[Object.keys(map)[0]]")
  // console.log(map[Object.keys(map)[0]])
  // let nbOfIslands = processMap(map[Object.keys(map)[0]], map, {}, 0)
  let nbOfIslands = processMap(map, {}, order_list, 0)
  console.log("nbOfIslands")
  console.log(nbOfIslands)
  return nbOfIslands;
};

const processMap = (map, pointer_map, order_list, max_key) => {
  console.log("___________________________ processMap ___________________________")
  // let first = map[Object.keys(map)[0]];
  let first = map[order_list[0]];
  console.log(order_list)
  console.log(first)

  if (0 === Object.keys(map).length) {
    console.log("Before ending - pointer_map")
    console.log(pointer_map)

    return new Set(Object.values(pointer_map)).size;
  }

  let curr_list = [];

  console.log("~> top")
  top = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, -1, [])
  // right = x + 1
  console.log("~> right")
  // console.log(top)
  right = findNeighbours(first, { ...map, ...pointer_map }, 'x', 1, 0, [])
  // bottom = y + 1
  console.log("~> bottom")
  // console.log([...top, ...right])
  bottom = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, 1, [])
  // left = x - 1
  console.log("~> left")
  // console.log([...top, ...right, ...bottom])
  left = findNeighbours(first, { ...map, ...pointer_map }, 'x', -1, 0, [])

  console.log("pointer_map")
  console.log(pointer_map)
  for (const key in pointer_map) {
    if (pointer_map.hasOwnProperty(key) && pointer_map[key] > max_key) {
      max_key = pointer_map[key];
    }
  }

  console.log(`~> max_key: ${max_key}`)
  let new_max_key = max_key + 1;

  console.log(`~> new_max_key: ${new_max_key}`)
  let expanded_list = [...top, ...right, ...bottom, ...left];
  // let next_first = map[expanded_list.sort()[0]] || map[Object.keys(map)[0]];
  // let next_first = map[Object.keys(map)[0]];
  // let next_first = map[expanded_list.sort((a, b) => a - b)[0]] || map[Object.keys(map)[0]];
  // console.log("____________________________ expanded_list")
  // console.log("expanded_list[0]")
  // console.log(expanded_list.sort())
  // console.log("map[expanded_list[0]]")
  // console.log(map[expanded_list[0]])
  // console.log("map[Object.keys(map)[0]]")
  // console.log(map[Object.keys(map)[0]])
  // console.log("next_first")
  // console.log(next_first)

  // if (0 === top.length && 0 === right.length && 0 === bottom.length && 0 === left.length) {
  if (0 === expanded_list.length) {
    console.log("~> A: no neighbours node")
    console.log(curr_list);
    console.log(first);
    console.log(pointer_map[order_list[0]]);
    max_key++;
    // console.log("new_max_key")
    // console.log(new_max_key)
    // pointer_map[Object.keys(map)[0]] = new_max_key;
    // console.log("Deleting ... " + Object.keys(map)[0]);
    // delete map[Object.keys(map)[0]];
    //
    pointer_map[order_list[0]] = new_max_key;
    console.log("Deleting ... " + order_list[0]);
    delete map[order_list[0]];

  } else {
    curr_list = [...[`${first.x}${first.y}`], ...expanded_list];
    // curr_list = [...top, ...right, ...bottom, ...left];

    console.log("~ B: curr_list before cleaning")
    console.log(curr_list)

    for (let i = 0; i < curr_list.length; i++) {
      if (pointer_map[curr_list[i]]) {
        console.log("!!!!!!!!!!!! it is in the pointer !!!!!!!!!!!!")
        console.log("pointer_map[curr_list[i]]")
        console.log(pointer_map[curr_list[i]])
        new_max_key = pointer_map[curr_list[i]]; // the group that found in the pointer.
        break;
      }
    }

    console.log("new_max_key, max_key: ")
    console.log(new_max_key, max_key)
    console.log("BEFORE - pointer_map")
    console.log(pointer_map)
    for (let i = 0; i < curr_list.length; i++) {
      let old_group = pointer_map[curr_list[i]];
      console.log(`----> old_group - ${old_group}, new_max_key - ${new_max_key}`)
      if (undefined !== old_group && old_group !== new_max_key) {
        console.log(`Convert the rest of the value ${old_group} to ${new_max_key}`)

        for (const key in pointer_map) {
          console.log("--------> Converting ...")
          console.log(`pointer_map[key]: ${pointer_map[key]}, old_group: ${old_group}`)
          if (pointer_map[key] === old_group) {
            pointer_map[key] = new_max_key;
          }
        }
      }

      pointer_map[curr_list[i]] = new_max_key;
      delete map[curr_list[i]];
    }

    max_key = new_max_key;
  }

  console.log("expanded_list // to be deleted from order_list")
  console.log(expanded_list)

  order_list.shift();
  order_list = order_list.filter(el => !expanded_list.includes(el));
  console.log("~> NEW: order_list")
  console.log(order_list)

  console.log("_____ OUTPUT ____")
  // console.log("map")
  // console.log(map)
  console.log("pointer_map")
  console.log(pointer_map)
  // console.log("max_key")
  // console.log(max_key)

  // return processMap(next_first, map, pointer_map, max_key);
  return processMap(map, pointer_map, order_list, max_key);
}

// Find neighbours going outwards like a +, neighbours will include the current node
const findNeighbours = (current_node, map, attr, x_operator, y_operator, neighbours) => {
  // console.log("findNeighbours -> map")
  // console.log(map)
  // console.log(`attr: ${attr}, x_operator: ${x_operator}, y_operator: ${y_operator}`)

  if (undefined === current_node || (0 === current_node[attr] && (-1 === x_operator || -1 === y_operator))) {
    console.log(`Returning neighbours: `)
    console.log(neighbours)
    return neighbours;
  }
  // console.log("current_node[attr]")
  // console.log(current_node[attr])

  let new_key = `${current_node.x + x_operator}${current_node.y + y_operator}`;
  current_node = map[new_key];
  // console.log("new_key")
  // console.log(new_key)
  // console.log("current_node")
  // console.log(current_node)
  // console.log("${current_node.x + x_operator}${current_node.y + y_operator}")
  // console.log(`${current_node.x + x_operator}${current_node.y + y_operator}`)
  // console.log("current_node.x")
  // console.log(current_node.x)
  // console.log("current_node.y")
  // console.log(current_node.y)

  if (current_node) {
    console.log(">>>>>> FOUND <<<<<<")
    console.log(current_node)
    neighbours = [...neighbours, new_key]
  }

  return findNeighbours(current_node, map, attr, x_operator, y_operator, neighbours);
}

// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "0", "1", "1"]
// ]);

// numIslands([
//   ["1", "1", "1"],
//   ["1", "0", "1"],
//   ["1", "1", "1"]
// ])

// numIslands([
//   ["1", "1", "1", "1"],
//   ["1", "0", "0", "1"],
//   ["1", "0", "0", "1"],
//   ["1", "1", "1", "1"]
// ])

// numIslands([["1", "0", "1", "1", "0", "1", "1"]])

// numIslands( [
//   ["1", "1", "1", "1"],
//   ["1", "1", "0", "0"],
//   ["0", "0", "1", "0"],
//   ["0", "0", "0", "1"]]
// )

// numIslands([
//   ["1", "1", "1", "1"],
//   ["1", "1", "1", "1"],
//   ["1", "1", "0", "1"],
//   ["1", "1", "1", "1"]]
// )

// numIslands([
//   ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1"],
//   ["1", "0", "1", "0", "1", "1", "1", "1", "1", "1"],
//   ["0", "1", "1", "1", "0", "1", "1", "1", "1", "1"],
//   ["1", "1", "0", "1", "1", "0", "0", "0", "0", "1"],
//   ["1", "0", "1", "0", "1", "0", "0", "1", "0", "1"],
//   ["1", "0", "0", "1", "1", "1", "0", "1", "0", "0"],
//   ["0", "0", "1", "0", "0", "1", "1", "1", "1", "0"],
//   ["1", "0", "1", "1", "1", "0", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1", "1", "1", "1", "0", "1"],
//   ["1", "0", "1", "1", "1", "1", "1", "1", "1", "0"]
// ])

numIslands([
  ["0", "1", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "1", "0", "1", "1", "0", "0", "0"],
  ["0", "1", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "1"],
  ["1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1", "0", "1", "1", "0"],
  ["0", "1", "0", "1", "1", "0", "1", "0", "0", "0", "1", "0", "0", "1", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "1", "0", "1", "0", "0", "0", "1", "1", "0", "1", "0", "0", "1", "0", "0", "0", "0"],
  ["1", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "1", "0", "1", "1", "1", "0", "1", "0", "1", "1", "1", "1", "0", "0", "0", "1"],
  ["1", "0", "0", "1", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1"],
  ["0", "0", "0", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "0"],
  ["1", "0", "1", "0", "1", "0", "0", "1", "1", "1", "0", "1", "1", "0", "0", "1", "1", "0", "0", "0"],
  ["0", "1", "0", "0", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "0", "0", "1", "0"],
  ["1", "0", "0", "0", "1", "1", "1", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "1"],
  ["0", "0", "0", "0", "1", "0", "1", "1", "0", "1", "0", "1", "0", "1", "1", "1", "1", "0", "0", "0"],
  ["0", "1", "1", "0", "0", "0", "0", "1", "0", "0", "1", "1", "1", "0", "0", "1", "1", "0", "1", "0"],
  ["1", "0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "0", "0", "1", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "1", "0", "1", "0", "0", "1", "0", "1", "0", "0", "1", "0", "0", "1", "1", "1"],
  ["0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "1", "1", "0", "1", "1", "1", "0", "0", "0", "0"],
  ["0", "0", "1", "0", "0", "0", "0", "0", "0", "1", "1", "0", "1", "0", "1", "0", "0", "0", "1", "1"],
  ["1", "0", "0", "0", "1", "0", "1", "1", "1", "0", "0", "1", "0", "1", "0", "1", "1", "0", "0", "0"]
])
