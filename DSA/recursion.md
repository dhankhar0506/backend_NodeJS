# Recursion

## What is Recursion

Recursion is a technique where a function calls itself to solve a problem by breaking a big problem into smaller, identical subproblems.

### Key Components

#### Base Case
The condition where recursion stops
```javascript
if(n == 1) return 1;
```
**Example:** In factorial, when n reaches 1, stop recursing.

#### Recursive Case
Function calls itself with smaller input
```javascript
return n * factorial(n-1);
```
**Example:** `factorial(5) = 5 * factorial(4)`

#### Call Stack
Stores function calls in memory
- Each call goes into stack
- Removed after execution

#### Stack Overflow
Happens when recursion doesn't stop
- Too many function calls in memory
- **Example:** Missing base case causes infinite recursion

#### Recursion Tree
Tree representation of recursive calls showing the flow of execution

#### Backtracking
An algorithmic technique where we:
1. Try a solution
2. If it fails → undo (backtrack)
3. Try another option
4. Repeat until solution found

**Example:** N-Queens problem, maze solving
- Multiple possible solutions exist
- Need to explore all possibilities