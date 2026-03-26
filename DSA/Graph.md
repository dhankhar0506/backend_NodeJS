# Graph

## What is a Graph?

A Graph is a non-linear data structure consisting of:
- **Vertices (Nodes)**: Points or entities
- **Edges (Connections)**: Links between vertices

Graphs represent relationships between objects.

**Example**: Social network where users are vertices and friendships are edges.

---

## Why Do We Need Graphs?

Graphs excel when data relationships matter:
- Social networks (connections between people)
- Maps & navigation (routes between locations)
- Web pages (hyperlinks)
- Recommendation systems

---

## Important Graph Terminologies

| Term | Definition | Example |
|------|-----------|---------|
| **Vertex** | A node in the graph | User in social network |
| **Edge** | Connection between two vertices | Friendship link |
| **Degree** | Number of edges connected to a vertex | User with 5 friends = degree 5 |
| **Path** | Sequence of vertices connected by edges | A → B → C |
| **Cycle** | Path starting and ending at same node | A → B → C → A |
| **Connected Graph** | All vertices reachable from each other | No isolated nodes |
| **Directed Graph** | Edges have direction | A → B (one-way) |
| **Undirected Graph** | No direction on edges | A — B (two-way) |
| **Weighted Graph** | Edges have weights (cost/distance) | Roads with distances |

---

## Graph Traversal

### Breadth-First Search (BFS)
Explores level by level, visiting nearest nodes first.

**Use case**: Shortest path in unweighted graphs

**Example**:
```
    A
   / \
  B   C
  |
  D
```
**Traversal**: A → B → C → D

**Data Structure**: Queue

### Depth-First Search (DFS)
Explores one path fully before backtracking.

**Use case**: Topological sorting, cycle detection

**Example**: (Same graph) A → B → D → (backtrack) → C

**Data Structure**: Stack / Recursion

---

## Important Graph Algorithms

### Dijkstra's Algorithm
Finds shortest path in weighted graphs (non-negative weights).

**Example**:
```
A --1--> B --2--> C
|_____4________|
```
Shortest path A to C: A → B → C (cost: 3)

### Bellman-Ford Algorithm
Finds shortest path, handles negative weights.

### Prim's Algorithm
Builds Minimum Spanning Tree (MST) by adding minimum edges.

### Kruskal's Algorithm
Builds MST by sorting edges and adding minimum-cost edges without cycles.

---

## Graph Representation

- **Adjacency List**: Stores neighbors of each vertex (space-efficient)
- **Adjacency Matrix**: 2D array representation (fast lookup)
