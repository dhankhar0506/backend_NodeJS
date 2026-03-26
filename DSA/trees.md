# Trees

## What is Trees?

A Tree is a non-linear hierarchical data structure where elements (called nodes) are connected in a parent–child relationship. It starts from a root node and branches into multiple levels.

## Why Do We Need Trees?

- **Faster Searching** - Example: Binary Search Tree with O(log n) average time complexity
- **Hierarchical Data Representation** - File systems, DOM structures

## Key Terminology

| Term | Definition |
|------|-----------|
| Node | Element of tree |
| Root | Top node |
| Parent | Node with children |
| Child | Node below parent |
| Leaf | Node with no children |
| Height | Longest path |
| Depth | Distance from root |
| Subtree | Smaller tree inside tree |

## Types of Trees

- **Binary Tree** - Max 2 children
- **Binary Search Tree (BST)** - Sorted structure
- **Balanced Tree** - Height minimized
- **Heap** - Used in priority queues

## Binary Tree

A Binary Tree is a tree where each node has at most 2 children: Left child and Right child.

### Types of Binary Trees
- **Full Binary Tree** - Each node has 0 or 2 children
- **Complete Binary Tree** - All levels filled except last
- **Perfect Binary Tree** - All nodes have 2 children

### Traversals ⭐ (VERY IMPORTANT)
- **Inorder (LNR)** - Left → Node → Right
- **Preorder (NLR)** - Node → Left → Right
- **Postorder (LRN)** - Left → Right → Node

## Binary Search Tree (BST)

A BST is a binary tree with the rule: **Left subtree < Node < Right subtree**

### Key Properties
- Left nodes → smaller
- Right nodes → greater
- No duplicates (usually)

## Self-Balancing Trees

- Red-Black Tree
- AVL Tree

## Heap (Special Tree)

A Heap is a complete binary tree with two types:
- **Min Heap** - smallest at root
- **Max Heap** - largest at root

### Heap Properties ⭐ (VERY IMPORTANT)
1. **Complete Binary Tree** - All levels filled except possibly the last; last level filled left to right
2. **Heap Property** - Min Heap: Parent ≤ Children | Max Heap: Parent ≥ Children

### Min Heap Example
```
    10
   /  \
  20   30
```

### Max Heap Example
```
    50
   /  \
  30   40
```

### Operations
- **Insertion** - Add element at end, then fix using heapify up
- **Deletion (Root)** - Remove root, replace with last element, then fix using heapify down

## Heapify Concept ⭐ (VERY IMPORTANT)

- **Heapify Up** - Used after insertion to move element up until heap property is satisfied
- **Heapify Down** - Used after deletion to move element down until heap property is satisfied

