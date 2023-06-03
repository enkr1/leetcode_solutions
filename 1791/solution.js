/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let visited = new Map();

  for (let i = 0; i < edges.length; i++) {
    for (let uv = 0; uv < edges[i].length; uv++) {
      if (visited.has(edges[i][uv])) {
        return edges[i][uv];
      }

      visited.set(edges[i][uv], true)
    }
  }
};
