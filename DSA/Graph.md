# Graph

## what is graph?

- A Graph is a non-linear data structure made up of:
- Vertices (Nodes)
- Edges (Connections)
- It represents relationships between objects

## Why Do We Need Graphs?

- Graphs are perfect when data is connected, not just stored.
- Relationships matter
- If your problem involves connections, paths, or relationships → use Graph
- Social networks
- Maps & navigation

## IMPORTANT GRAPH TERMINOLOGIES

- Vertex (Node) :A point/entity in a graph
- Edge : A connection between two vertices
- Degree of Vertex : Number of edges connected to a vertex
  - In-degree → incoming edges
  - Out-degree → outgoing edges
- Adjacent Vertices : Two vertices connected by an edge
- Path : A sequence of vertices connected by edges // A → B → C
- Path Length : Number of edges in path
- Cycle : A path that starts and ends at same node // A → B → C → A
- Connected Graph: Every vertex is reachable from every other vertex 
- Disconnected Node : Some nodes are isolated 
- Directed Graph (Digraph) : Edges have direction //A → B (one-way)
- Undirected Graph : No direction in edges // A — B (two-way)
- Weighted Graph :  Edges have weights (cost/distance/time)
- Unweighted Graph : No weights on edges
- Complete Graph : Every vertex connected to every other
- Tree (Special Graph) A graph with: No cycles  and Connected
- Traversal: Visiting all nodes
  - BFS (Breadth First Search)
    - Explore level by level
    - Shortest path (unweighted)
    - Level order traversal
    - Start from a node
    - Visit all its neighbors
    - Explore nearest nodes first
    - Then neighbors of neighbors
    - A — B — D
      |   
      C
    - A → B → C → D
    - Queue
  - DFS (Depth First Search)
    - Go deep first, then backtrack
    - Explore one path fully before others
    - Stack / Recursion
    - A — B — D
      |   
      C
    A → B → D → C
- Shortest Path :  Minimum distance between nodes
  - Dijkstra
  - Bellman-Ford
- Store Graph 
  - Adjacency : Adjacency List Stores neighbors 
 - Adjacency Matrix 2D representation

## Important Graph Algorithms

- Dijkstra’s Algorithm
  - Find shortest path in weighted graph
  - A --1--> B --2--> C
    A --4--> C
- Bellman-Ford Algorithm
  - Shortest path (handles negative weights)
  - Handles negative weights
- Prim’s Algorithm
  - Minimum Spanning Tree (MST)
  - Build tree by adding minimum edge
  - Start from any node
  - Pick smallest edge connecting new node
  - Repeat
  - Grow tree gradually with minimum cost
- Kruskal’s Algorithm 
  - Minimum Spanning Tree
[Shortest_Path]
- Minimum distance between nodes
[Minimum_Spanning_Tree(MST)]
- Connect all nodes with minimum cost
- Minimum edges
- Minimum cost