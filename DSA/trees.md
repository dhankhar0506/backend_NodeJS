# Trees

## What are Trees?

- A tree is a non-linear hierarchical data structure where elements (called nodes) are connected in a parent–child relationship.
- It starts from a root node and branches into multiple levels.

## Why Do We Need Trees?

- **Faster Searching**
    - Example: Binary Search Tree
    - Time Complexity: O(log n) (average)
- **Hierarchical Data Representation**
    - File systems
    - DOM

## Key Terminology

| Term | Definition |
|------|-----------|
| Node | Element of tree |
| Root | Top node |
| Edge | Connection between two nodes |
| Parent | Node with children |
| Child | Node below parent |
| Leaf | Node with no children |
| Internal Node | Node with at least one child |
| Height | Longest path |
| Depth | Distance from root |
| Subtree | Smaller tree inside tree |
| Degree of Node | Number of children a node has |
| Degree of Tree | Maximum degree of any node in the tree |
| Siblings | Nodes with the same parent |
| Ancestors | All nodes above a node (parent, grandparent, etc.) |
| Descendants | All nodes below a node |

## Types of Trees

- **Binary Tree** → Max 2 children
- **Binary Search Tree (BST)** → Sorted structure
- **Balanced Tree** → Height minimized
- **Heap** → Used in priority queues

## Binary Tree

A binary tree is a tree where each node has at most 2 children (left and right).

### Types of Binary Trees

- **Full Binary Tree**: Each node has 0 or 2 children
- **Complete Binary Tree**: All levels filled except last
- **Perfect Binary Tree**: All nodes have 2 children

### Traversals ⭐

- **Inorder (LNR)**: Left → Node → Right
- **Preorder (NLR)**: Node → Left → Right
- **Postorder (LRN)**: Left → Right → Node

## Binary Search Tree (BST)

A BST is a binary tree with the rule: **Left subtree < Node < Right subtree**

### Key Properties

- Left nodes → smaller values
- Right nodes → greater values
- No duplicates (typically)

## Self-Balancing Trees

- Red-Black Tree
- AVL Tree

## Heap (Special Tree)

A heap is a complete binary tree that satisfies two properties:

### Properties

1. **Complete Binary Tree**: All levels filled except possibly the last; last level filled left to right
2. **Heap Property**: Parent-child ordering maintained

### Types of Heap

- **Min Heap**: Parent ≤ Children (smallest at root)
- **Max Heap**: Parent ≥ Children (largest at root)

### Operations

- **Insertion**: Add element at end, then heapify up
- **Deletion (Root)**: Remove root, replace with last element, then heapify down

## Heapify Concept ⭐

- **Heapify Up**: Used after insertion; move element up until heap property satisfied
- **Heapify Down**: Used after deletion; move element down until heap property satisfied

