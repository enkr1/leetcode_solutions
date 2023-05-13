/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  console.log(grid)
  let map = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ("1" === grid[i][j]) map[`${j}${i}`] = { x: j, y: i };
    }
  }

  return processMap(map, [], {}, 0);
};

const processMap = (map, curr_list, pointer_map, max_key) => {
  if (0 === Object.keys(map).length) return new Set(Object.values(pointer_map)).size;

  let first = map[Object.keys(map)[0]];

  top = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, -1, [])
  right = findNeighbours(first, { ...map, ...pointer_map }, 'x', 1, 0, [])
  bottom = findNeighbours(first, { ...map, ...pointer_map }, 'y', 0, 1, [])
  left = findNeighbours(first, { ...map, ...pointer_map }, 'x', -1, 0, [])

  let new_max_key = max_key + 1;
  if (0 === top.length && 0 === right.length && 0 === bottom.length && 0 === left.length) {
    max_key++; // New group
    pointer_map[Object.keys(map)[0]] = new_max_key;
    delete map[Object.keys(map)[0]];
  } else {
    curr_list = [...[Object.keys(map)[0]], ...top, ...right, ...bottom, ...left];

    for (let i = 0; i < curr_list.length; i++) {
      if (pointer_map[curr_list[i]]) new_max_key = pointer_map[curr_list[i]]; // the group that found in the pointer.
    }

    for (let i = 0; i < curr_list.length; i++) {
      pointer_map[curr_list[i]] = new_max_key;
      delete map[curr_list[i]];
    }

    max_key = new_max_key;
  }

  return processMap(map, curr_list, pointer_map, max_key);
}

// Find neighbours going outwards like a +, neighbours will include the current node
const findNeighbours = (current_node, map, attr, x_operator, y_operator, neighbours) => {
  if (undefined === current_node || (0 === current_node[attr] && (-1 === x_operator || -1 === y_operator))) return neighbours;

  let new_key = `${current_node.x + x_operator}${current_node.y + y_operator}`;
  current_node = map[new_key];

  if (current_node) neighbours = [...neighbours, new_key]

  return findNeighbours(current_node, map, attr, x_operator, y_operator, neighbours);
}
