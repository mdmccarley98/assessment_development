# GCL: Floyd Warshall

## Item ID
2831

## Claim
2

## Claim Behavior (evidence)
> In computer science, the Floyd–Warshall algorithm (also known as Floyd's algorithm, the Roy–Warshall algorithm, the Roy–Floyd algorithm, or the WFI algorithm) is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices. Although it does not return details of the paths themselves, it is possible to reconstruct the paths with simple modifications to the algorithm. Versions of the algorithm can also be used for finding the transitive closure of a relation R, or (in connection with the Schulze voting system) widest paths between all pairs of vertices in a weighted graph.

## Target Level 
4

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the statements about the code below:
<br><br>
I) The code outputs the shortest path from each node to all other nodes for all possible inputs
<br>
II) The code has asymptotic runtime complexity of O(n^3)
<br>
III) The code uses an adjacency list to represent the graph
<br><br>
Which statements are TRUE?

## Code Snippet (optional)
```java
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
```

## Answer Key
II

## Distractors

### 1.
I 

### 2.
I and III

### 3.
None of the available options is correct.


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - INF is 99999, max int is 2147483647
- Distractor 2
    - III is also wrong, graph is being represented by a adjacency matrix
- Distractor 3
    - II is correct, so this is wrong.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

