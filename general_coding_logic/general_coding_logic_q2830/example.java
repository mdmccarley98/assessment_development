class Example {
  static final int V = 4;
  static final int INF = 99999;

  static void floydWarshall(int[][] graph) {
    int[][] dist = new int[V][V];
    int i, j, k;

    for (i = 0; i < V; i++) {
      for (j = 0; j < V; j++) {
        dist[i][j] = graph[i][j];
      }
    }

    for (k = 0; k < V; k++) {
      for (i = 0; i < V; i++) {
        for (j = 0; j < V; j++) {
          if (dist[i][j] > (dist[i][k] + dist[k][j]) && (dist[k][j] != INF && dist[i][k] != INF))
            dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }

    for (i = 0; i < V; i++) {
      for (j = 0; j < V; j++) {
        if (dist[i][j] == INF) System.out.print("INF     ");
        else System.out.print(dist[i][j] + "     ");
      }
      System.out.println();
    }
  }

  public static void main(String... args) {
    int[][] graph = new int[][] {
        { 0, 5, INF, 10 },
        { INF, 0, 3, INF },
        { INF, INF, 0, 1 },
        { INF, INF, INF, 0 }
    };

    floydWarshall(graph);
  }
}
