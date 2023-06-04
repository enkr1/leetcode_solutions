function validPath(n, edges, source, destination) {
  // Step 1: Build adjacency list
  let graph = buildGraph(n, edges);
  console.log("graph")
  console.log(graph)


  // Step 2: Initialize BFS
  let queue = [];
  queue.push(source);

  // Step 3: Initialize visited array
  let visited = Array(n).fill(false);

  // console.log("visited")
  // console.log(visited)

  visited[source] = true; // this is how the duplicated was prevented.

  // Step 4: Perform BFS
  while (queue.length > 0) {
    let currentVertex = queue.shift();
    console.log("currentVertex: " + currentVertex)


    // Step 4.1: Check if destination is reached
    if (currentVertex === destination) {
      console.log(`> Found ${currentVertex} === ${destination}`)
      return true;
    }

    console.log("graph[currentVertex]: " + graph[currentVertex])

    // Step 4.2: Iterate through adjacent vertices
    for (let neighbor of graph[currentVertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  // Step 5: No valid path found
  return false;
}

function buildGraph(n, edges) {
  // const graph = new Array(n).fill(null).map(() => []);
  const graph = Array.from({ length: n }, () => []);
  // console.log("init")
  // console.log(graph)

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  return graph;
}

// let x = validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)
// let x = validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)
// let x = validPath(1, [], 0, 0)
let x = validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9)
console.log("x")
console.log(x)
