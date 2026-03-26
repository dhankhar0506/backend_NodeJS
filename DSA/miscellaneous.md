# Miscellaneous

## Greedy Algorithm

A Greedy Algorithm makes the best choice at each step (locally optimal) hoping to achieve a global optimal solution. It prioritizes immediate gains without considering future consequences.

**Example: Coin Change Problem**
- Coins available: [1, 2, 5]
- Target: 4
- Greedy approach: Pick 5 (too large) → Pick 2 → Pick 2 = **3 coins**
- Optimal: Pick 2 + 2 = **2 coins**

**Disadvantage:** Not always correct; may fail for complex problems.

---

## Searching Algorithms

**Searching Types:**
- Linear Search: O(n)
- Binary Search: O(log n) - Divides array into halves

**Sorting Algorithms:**

| Algorithm | Time Complexity |
|-----------|-----------------|
| Bubble Sort | O(n²) |
| Selection Sort | O(n²) |
| Insertion Sort | O(n²) |
| Merge Sort | O(n log n) |
| Quick Sort | O(n log n) avg |

---

## Dynamic Programming (DP)

Dynamic Programming solves problems by breaking them into smaller subproblems and storing results to avoid redundant calculations.

**Two Approaches:**
1. **Memoization (Top-Down):** Recursion + Cache
2. **Tabulation (Bottom-Up):** Iterative with table

**Example: Fibonacci Sequence**

Without DP: fib(5) recalculates fib(3) and fib(2) multiple times.

| n | fib(n) |
|---|--------|
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |

**Why DP is Needed:**
- ✅ Avoids repeated calculations
- ✅ Significantly improves performance
- ❌ Without DP: Exponential time complexity