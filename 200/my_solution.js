/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  console.log(grid)
  // let islandList = [];
  let map = {};

  // mapify the list - all of the island
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ("1" === grid[i][j]) {
        // islandList = [...islandList, { x: j, y: i }]
        // map.set({ x: j, y: i }, grid[i][j])
        map[`${j}${i}`] = { x: j, y: i };
      }
    }
  }

  // console.log(islandList)
  // console.log("debug")
  console.log(map)

  // console.log(Object.keys({}).length)
  // let first = map["11"]
  // let processMap = { ...map };

  // a = ['11', '22']
  // b = ['33', '44']
  // console.log([...a, b])
  // console.log([...a, ...b])
  // console.log([...[a]])
  // delete processMap["11"]
  let obj = processMap(map, [], {}, 0)
  console.log("number of islands")
  console.log(obj)

};

const processMap = (map, curr_list, pointer_map, max_key) => {
  if (0 === Object.keys(map).length) {
    console.log("-> object 0 now:")
    console.log("pointer_map")
    console.log(pointer_map)
    console.log("xx")
    console.log()

    return new Set(Object.values(pointer_map)).size;
  }

  let first = map[Object.keys(map)[0]];
  console.log(`==============> first key: ${Object.keys(map)[0]}, max_key: ${max_key}, value: `)
  console.log(first)

  // TODO: Think of a way to point back which list I can join as a group.
  console.log("~> top")
  top = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, -1, [])
  console.log(top)
  // right = x + 1
  console.log("~> right")
  right = findNeighbours(first, { ...map, ...pointer_map }, 'x', 1, 0, [])
  console.log(right)
  // bottom = y + 1
  console.log("~> bottom")
  bottom = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, 1, [])
  console.log(bottom)
  // left = x - 1
  console.log("~> left")
  left = findNeighbours(first, { ...map, ...pointer_map }, 'x', -1, 0, [])
  console.log(left)

  console.log("__________________________________")
  console.log("max_key")
  console.log(max_key)


  let new_max_key = max_key + 1;
  if (0 === top.length && 0 === right.length && 0 === bottom.length && 0 === left.length) {
    console.log("~> A: no neighbours node")
    console.log(curr_list);
    max_key++;
    console.log("new_max_key")
    console.log(new_max_key)
    pointer_map[Object.keys(map)[0]] = new_max_key;
    console.log("Deleting ... " + Object.keys(map)[0]);
    delete map[Object.keys(map)[0]];
    // result = [...result, [curr_list]]; // -> [[]] Layer it 1 level deeper.
    // console.log("~> A: curr_list before cleaning")
    // curr_list = [];
    // console.log(curr_list)
  } else {
    // curr_list = [...curr_list, ...[Object.keys(map)[0]], ...top, ...right, ...bottom, ...left];
    curr_list = [...[Object.keys(map)[0]], ...top, ...right, ...bottom, ...left];

    console.log("~ B: curr_list before cleaning")

    console.log(curr_list)

    // TODO: Find exists
    for (let i = 0; i < curr_list.length; i++) {
      if (pointer_map[curr_list[i]]) {
        console.log("!!!!!!!!!!!! it is in the pointer !!!!!!!!!!!!")
        console.log("pointer_map[curr_list[i]]")
        console.log(pointer_map[curr_list[i]])
        new_max_key = pointer_map[curr_list[i]]; // the group that found in the pointer.
      }
    }

    for (let i = 0; i < curr_list.length; i++) {
      console.log("new_max_key")
      console.log(new_max_key)
      console.log("it AINT in the pointer - max_key -> " + (max_key + 1) + " - curr_list[i] " + curr_list[i] + " - new_max_key: " + new_max_key)
      console.log(curr_list[i])
      pointer_map[curr_list[i]] = new_max_key;
      delete map[curr_list[i]];
    }

    max_key = new_max_key;
  }

  console.log("_____ OUTPUT ____")
  console.log("map")
  console.log(map)
  console.log("pointer_map")
  console.log(pointer_map)
  console.log("max_key")
  console.log(max_key)

  return processMap(map, curr_list, pointer_map, max_key);
}

// Find neighbours going outwards like a +, neighbours will include the current node
const findNeighbours = (current_node, map, attr, x_operator, y_operator, neighbours) => {
  // console.log("findNeighbours -> map")
  // console.log(map)
  // console.log(`attr: ${attr}, x_operator: ${x_operator}, y_operator: ${y_operator}`)

  if (undefined === current_node || (0 === current_node[attr] && (-1 === x_operator || -1 === y_operator))) {
    console.log(`Returning neighbours: ${neighbours}`)
    return neighbours;
  }
  // console.log("current_node[attr]")
  // console.log(current_node[attr])

  let new_key = `${current_node.x + x_operator}${current_node.y + y_operator}`;
  current_node = map[new_key];
  console.log("new_key")
  console.log(new_key)
  console.log("current_node")
  console.log(current_node)
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

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["1", "0", "1", "", "0"],
  ["1", "0", "0", "1", "1"]
]);
