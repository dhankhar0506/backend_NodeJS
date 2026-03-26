# LinkedList

## What is a Linked List?

A Linked List is a linear data structure where elements (called nodes) are stored non-contiguously and connected using pointers (links).

**Node Structure:**
```
[ DATA | NEXT ]
```

**Example:**
```
10 → 20 → 30 → NULL
```

Each node contains:
- **Data** (value)
- **Pointer** (reference to next node)

## Why Use Linked Lists?

- ✅ Dynamic size (grows/shrinks easily)
- ✅ Efficient insertion/deletion
- ✅ No contiguous memory required
- ✅ Ideal for frequent insert/delete operations

## Types of Linked Lists

1. **Singly Linked List**
2. **Doubly Linked List**
3. **Circular Linked List**

## Disadvantages

- ❌ No direct access (no indexing)
- ❌ Extra memory overhead for pointers
- ❌ More complex than arrays

## Key Differences: Arrays vs Linked Lists

| Feature | Array 🧱 | Linked List 🔗 |
|---------|----------|----------------|
| Memory Layout | Contiguous | Non-contiguous |
| Access Time | O(1) (direct) | O(n) (sequential) |
| Insertion | O(n) slow | O(1) fast (at head) |
| Deletion | O(n) slow | O(1) fast (at head) |
| Size | Fixed/Dynamic | Fully dynamic |
| Memory Usage | Less | More (extra pointer) |
| Traversal | Easy | Sequential only |
| Cache Friendly | Yes | No |
| Implementation | Simple | Complex |
