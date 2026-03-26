# Hashing

## What is Hashing?

Hashing is a technique used to map data (keys) to a fixed index in a table using a hash function.

**Formula:** Key → Hash Function → Index → Store/Retrieve Quickly

### Why is Hashing Needed?
- Fast Access
- Efficient Data Storage
- Improves Performance

## How Hashing Works?

Input key (e.g., "apple") → Apply hash function → Get index (e.g., 5) → Store value at that index

## Hash Table Fundamentals

A Hash Table is a data structure that:
- Stores key–value pairs
- Uses hashing for fast operations

### Key Concepts

**Hash Function**
- Function that converts key → index

**Collision**
- When two keys map to the same index
- Example: `h("ab") = 5` and `h("ba") = 5` → Collision

**Collision Handling Techniques**
- **Chaining:** Store multiple elements in same bucket (linked list)
- **Open Addressing:** Find another empty slot
    - Linear Probing
    - Quadratic Probing
    - Double Hashing

**Load Factor**
- `Load Factor = (Number of elements) / (Table size)`
- Indicates how full the table is

**Rehashing**
- Resize table when load factor increases
- Recompute hash values

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|---------------|
| Very fast operations O(1) | Collisions possible |
| Efficient for large data | Extra memory required |
| Simple concept | Performance depends on hash function |

## Performance Comparison

### Why is Hashing Faster?

Hashing uses a hash function to directly compute data location instead of searching, reducing time complexity from O(n) to O(1).

**Array Search:** O(n) - Sequential search
```
Find 50: Check 10 ❌ → Check 20 ❌ → Check 30 ❌ → Check 40 ❌ → Check 50 ✅
```

**Hashing:** O(1) - Direct access
```
hash(50) = 4 → Go directly to index 4 → Found instantly
```

## Collision Details

### What Happens?
When two different keys map to the same index:
```
hash("ab") = 5
hash("ba") = 5 ❗ (Collision)
```

### Why It Happens?
- Hash function is not perfect
- Limited size of table

### Solutions

**Chaining**
- Store multiple elements at same index using linked list
- Example: `Index 5 → ["ab" → "ba" → "xy"]`
- Advantage: Easy to implement

**Open Addressing**
- Find another empty slot instead of storing multiple elements
- **Linear Probing:** Check next slot one by one
- **Quadratic Probing:** Jump in a pattern (by squares)
- **Double Hashing:** Use another hash function

## Load Factor & Rehashing

### Load Factor Example
```
Elements = 8
Table Size = 10
Load Factor = 0.8
```

**Impact:**
- High load factor → More collisions
- Low load factor → Better performance

### Rehashing Process
When table becomes too full:
1. Increase size (e.g., 10 → 20)
2. Recalculate all hash values
3. Reinsert all elements

**Why needed?**
- Reduce collisions
- Maintain O(1) performance