# TREES

## What is trees?

- A Tree is a non-linear hierarchical data structure where elements (called nodes) are connected like a parent–child relationship.
- It starts from a root node and branches into multiple levels.

## Why Do We Need Trees?

- Faster Searching
Example: Binary Search Tree
Time → O(log n) (average)
- Hierarchical Data Representation
  - File systems
  - DOM
  
## Key Terminology

Node → Element of tree
Root → Top node
Edge -> Connection between two nodes
Parent → Node with children
Child → Node below parent
Leaf → Node with no children
Internal Node -> Node with at least one child
Height → Longest path
Depth → Distance from root
Subtree → Smaller tree inside tree
Degree of Node -> Number of children a node has
Degree of Tree -> Maximum degree of any node in the tree
Siblings -> Nodes with the same parent 
Ancestors -> All nodes above a node (parent, grandparent…)
Descendants -> All nodes below a node
Subtree -> A tree formed by any node and its children

## Types of Trees

Binary Tree → Max 2 children
Binary Search Tree (BST) → Sorted structure
Balanced Tree → Height minimized
Heap → Used in priority queues

## Binary Tree

- A Binary Tree is a tree where each node has at most 2 children:
    Left child
    Right child
- Types of Binary Trees
  - Full Binary Tree : Each node has 0 or 2 children
  - Complete Binary Tree : All levels filled except last
  - Perfect Binary Tree : All nodes have 2 children
- Traversals (VERY IMPORTANT)
  - Inorder (LNR) Left → Node → Right
  - Preorder (NLR) Node → Left → Right 
  - Postorder (LRN) Left → Right → Node
  
## Binary Search Tree (BST)

- A BST is a binary tree with a rule: Left subtree < Node < Right subtree
- Key Properties
Left nodes → smaller
Right nodes → greater
No duplicates (usually)

## Self-Balancing Trees

- Red-Black Tree
- AVL Tree

## Heap (Special Tree)

- A Heap is a complete binary tree
- Min Heap → smallest at root
- Max Heap → largest at root
- A Heap is a special type of Binary Tree that satisfies two properties

1. Complete Binary Tree
All levels are filled except possibly the last
Last level filled from left to right
1. Heap Property
Min Heap → Parent ≤ Children
Max Heap → Parent ≥ Children

- Types of Heap
- Min Heap
Smallest element at root

       10
      /  \
    20    30

- Max Heap
Largest element at root 

       50
      /  \
    30    40

- Insertion
Add element at end
Fix using heapify up

- Deletion (Root)
Remove root
Replace with last element
Fix using heapify down

## Heapify Concept (VERY IMPORTANT)

- Heapify Up
Used after insertion
Move element up until property satisfied
- Heapify Down
Used after deletion
Move element down
