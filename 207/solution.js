/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  // Step 1: Build the graph (adjacency list)
  const graph = buildGraph(numCourses, prerequisites);

  // Step 2: Perform topological sort
  const inDegree = new Array(numCourses).fill(0);
  for (let [course, pre] of prerequisites) {
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length > 0) {
    const course = queue.shift();
    count++;

    for (const neighbor of graph[course]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Step 3: Check the count
  return count === numCourses;
};

// Helper function to build the graph
function buildGraph(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill().map(() => []);
  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }
  return graph;
}

console.log(canFinish(2, [[1, 0]])); // Output: true
console.log(canFinish(2, [[1, 0], [0, 1]])); // Output: false
