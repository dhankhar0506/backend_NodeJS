# 🌐 Graph

## 📘 What is Graph?

A Graph is a non-linear data structure made up of:
- **Vertices (Nodes)** - points/entities
- **Edges (Connections)** - relationships between vertices

## 🎯 Why Use Graphs?

Perfect for connected data where relationships matter:
- Social networks
- Maps & navigation
- Recommendation systems

## 🔥 Graph Terminologies

### Basic Terms
- **Vertex (Node)** - A point/entity in a graph
- **Edge** - Connection between two vertices
- **Adjacent Vertices** - Two vertices connected by an edge

### Degree of Vertex
- **Undirected** - Number of edges connected to vertex
- **Directed** - In-degree (incoming) + Out-degree (outgoing)

### Path & Cycle
- **Path** - Sequence of vertices connected by edges (A → B → C)
- **Path Length** - Number of edges in path
- **Cycle** - Path that starts and ends at same node (A → B → C → A)

### Graph Types
| Type | Example |
|------|---------|
| Directed | A → B |
| Undirected | A — B |
| Weighted | Edges with cost/distance |
| Unweighted | No edge weights |
| Complete | Every vertex connects to every other |
| Tree | No cycles, connected |

## 🔁 Graph Traversal

### BFS (Breadth First Search)
- **Concept** - Explore level by level
- **Data Structure** - Queue
- **Uses** - Shortest path (unweighted), level order traversal
- **Example** - A → B → C → D

### DFS (Depth First Search)
- **Concept** - Go deep first, then backtrack
- **Data Structure** - Stack / Recursion
- **Uses** - Cycle detection, path finding
- **Example** - A → B → D → C

## 📏 Shortest Path Algorithms

- **Dijkstra** - Shortest path in weighted graphs
- **Bellman-Ford** - Handles negative weights

## 🚀 Important Algorithms

| Algorithm | Purpose |
|-----------|---------|
| Dijkstra | Shortest path (weighted) |
| Bellman-Ford | Shortest path (negative weights) |
| Prim's | Minimum Spanning Tree |
| Kruskal's | Minimum Spanning Tree |

## 💾 Graph Storage

- **Adjacency List** - Stores neighbors for each vertex
- **Adjacency Matrix** - 2D array representation
