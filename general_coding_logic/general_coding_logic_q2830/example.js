const V = 4;
const INF = 99999;

function floydWarshall(graph) {
  const dist = [];
  let i, j, k;

  for (i = 0; i < V; i++) {
    for (j = 0; j < V; j++) {
      if(!dist[i]) dist[i] = []
      dist[i][j] = graph[i][j];
    }
  }

  for (k = 0; k < V; k++) {
    for (i = 0; i < V; i++) {
      for (j = 0; j < V; j++) {
        if (dist[i][j] > (dist[i][k] + dist[k][j])
          && (dist[k][j] != INF
            && dist[i][k] != INF)) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  for (i = 0; i < V; i++) {
    for (j = 0; j < V; j++) {
      if (dist[i][j] == INF) console.log("INF     ");
      else console.log(dist[i][j] + "     ");
    }
    console.log("\n");
  }
}

function main() {
  const graph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0]
  ];
  floydWarshall(graph);
}