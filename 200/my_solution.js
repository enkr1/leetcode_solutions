/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // console.log(grid)
  let map = {};

  // mapify the list - all of the island
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ("1" === grid[i][j]) map[`${j}${i}`] = { x: j, y: i };
    }
  }

  console.log(map)
  // console.log("map[Object.keys(map)[0]]")
  // console.log(map[Object.keys(map)[0]])
  // let nbOfIslands = processMap(map[Object.keys(map)[0]], map, {}, 0)
  let nbOfIslands = processMap(map, {}, 0)
  console.log("nbOfIslands")
  console.log(nbOfIslands)
  return nbOfIslands;
};

const processMap = (map, pointer_map, max_key) => {
  console.log("___________________________ processMap ___________________________")
  let first = map[Object.keys(map)[0]];
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
  right = findNeighbours(first, { ...map, ...pointer_map }, 'x', 1, 0, [])
  // bottom = y + 1
  console.log("~> bottom")
  bottom = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, 1, [])
  // left = x - 1
  console.log("~> left")
  left = findNeighbours(first, { ...map, ...pointer_map }, 'x', -1, 0, [])

  console.log(`~> max_key: ${max_key}`)
  // console.log("pointer_map[[Object.keys(map)[0]]]")
  // console.log(pointer_map[[Object.keys(map)[0]]])
  // console.log([Object.keys(map)[0]])

  // pointer_map[[Object.keys(map)[0]]] = max_key;
  let new_max_key = max_key + 1;
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
    max_key++;
    // console.log("new_max_key")
    // console.log(new_max_key)
    pointer_map[Object.keys(map)[0]] = new_max_key;
    console.log("Deleting ... " + Object.keys(map)[0]);
    delete map[Object.keys(map)[0]];
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

    for (let i = 0; i < curr_list.length; i++) {
      pointer_map[curr_list[i]] = new_max_key;
      delete map[curr_list[i]];
    }

    max_key = new_max_key;
  }

  // delete map[Object.keys(map)[0]];

  console.log("_____ OUTPUT ____")
  // console.log("map")
  // console.log(map)
  console.log("pointer_map")
  console.log(pointer_map)
  // console.log("max_key")
  // console.log(max_key)

  // return processMap(next_first, map, pointer_map, max_key);
  return processMap(map, pointer_map, max_key);
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
//   ["1", "0", "1", "", "0"],
//   ["1", "0", "0", "1", "1"]
// ]);

numIslands([
  ["1", "1", "1"],
  ["1", "0", "1"],
  ["1", "1", "1"]
])

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
