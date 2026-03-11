# JavaScript

## What is JavaScript?

JavaScript is a high-level, interpreted programming language primarily used to make web pages interactive.

### Key Features:
- Handle user events (click, hover, submit)
- Update HTML & CSS dynamically
- Create backend servers using Node.js

### Language Characteristics:
- **Interpreted Language**: Translates code sentence by sentence during execution (unlike compilation which translates everything first)
- **Dynamically Typed**: Variables don't require explicit type declaration; types are determined at runtime
- **Asynchronous Programming**: Built-in support for non-blocking operations via:
  - Callbacks
  - Promises
  - Async/Await
  - Event Loop

---

## User Input

### Browser Functions for User Interaction:

```javascript
// prompt() - Get user input
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`);

// confirm() - Yes/No dialog
let isBoss = confirm("Are you the boss?");
alert(isBoss);

// alert() - Display message
alert("Hello!");
```

---

## Data Types

### Primitive Data Types
Store single simple values and are immutable:
- **String**: Text data
- **Number**: Integers and decimals
- **Boolean**: `true` or `false`
- **Undefined**: Variable declared but no value assigned
- **Null**: Intentional empty value
- **Symbol**: Unique identifier
- **BigInt**: Large integers (use `n` suffix)

### Non-Primitive Data Types
Store complex data and references:
- **Object**: Key-value pairs
- **Array**: Ordered collection
- **Function**: Reusable code block

### Type Checking:
```javascript
typeof undefined        // "undefined"
typeof 0               // "number"
typeof 10n             // "bigint"
typeof true            // "boolean"
typeof "foo"           // "string"
typeof Symbol("id")    // "symbol"
typeof Math            // "object"
typeof null            // "object" (quirk)
typeof alert           // "function"
```

---

## Equality Operators

- **`==`** (Loose): Compares values only (type coercion)
- **`===`** (Strict): Compares value and data type

---

## Type Conversion

### With Operators:
- **`+`**: If one operand is a string, JavaScript converts the other to a string
- **`-`, `*`, `%`**: Always convert values to numbers

### Explicit Conversion:

**String Conversion:**
```javascript
let value = true;
value = String(value);  // "true"
```

**Numeric Conversion:**
```javascript
let str = "123";
let num = Number(str);  // 123

Number("   123   ");    // 123
Number("123z");         // NaN
Number(true);           // 1
Number(false);          // 0
```

**Boolean Conversion:**
```javascript
Boolean(1);             // true
Boolean(0);             // false
Boolean("hello");       // true
Boolean("");            // false
Boolean("0");           // true (non-empty string)
```

---

## Control Flow

### if / else if / else

```javascript
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

### switch / case

```javascript
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid Day");
}
```

### Loops

**for loop:**
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**while loop:**
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**do...while loop:**
```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### Ternary Operator

```javascript
condition ? value_if_true : value_if_false

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
```

### break and continue

- **`break`**: Stops the loop completely
- **`continue`**: Skips current iteration

---

## Variables: var vs let vs const

A variable is a named storage for data.

### Variable Naming Rules:
- Must contain only letters, digits, `$`, and `_`
- First character cannot be a digit

### Comparison:

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Re-declaration | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| Re-assignment | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| Hoisted | ✅ Yes | ✅ Yes (TDZ) | ✅ Yes (TDZ) |

---

## Hoisting

Hoisting means JavaScript moves variable and function declarations to the top of their scope before execution.

---

## Temporal Dead Zone (TDZ)

The time between variable hoisting and initialization where the variable cannot be accessed:

```javascript
console.log(a);  // ReferenceError
let a = 10;      // TDZ ends here
```

---

## Functions

Functions are reusable blocks of code that execute when called.

### Function Declaration
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));  // 8
```
- Hoisted (can be called before declaration)

### Function Expression
```javascript
const add = function(a, b) {
  return a + b;
};
```
- Not hoisted (callable only after definition)

### Arrow Function (ES6)
```javascript
const add = (a, b) => a + b;
```

### IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
  console.log("Runs immediately");
})();
```

### Anonymous Functions
Functions without a name, often used with `setTimeout` and `setInterval`

---

## Higher Order Functions (HOF)

A function that:
- Takes another function as an argument, OR
- Returns a function

---

## Callback Functions

A function passed as an argument to another function and executed later:

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("John", () => console.log("Callback executed!"));
```

---

## Pure vs Impure Functions

**Pure Function:**
- Always returns the same output for the same input
- Does not modify external variables

**Impure Function:**
- Modifies external variables
- Output can vary for the same input

---

## Closures

A closure occurs when a function remembers variables from its outer scope even after the outer function has finished executing:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();  // 1
counter();  // 2
```

---

## setTimeout and setInterval

- **`setTimeout`**: Executes a function once after a delay
- **`setInterval`**: Executes a function repeatedly at fixed intervals
- **`clearTimeout()` / `clearInterval()`**: Stops the timer

---

## Objects

An object is a collection of key-value pairs.

### Creating Objects:

```javascript
// Object literal
const user = {
  name: "Gourav",
  age: 22,
  city: "Punjab"
};
console.log(user.name);

// Constructor
const user = new Object();
user.name = "Gourav";
user.age = 22;
```

### Object Methods:

```javascript
Object.keys(obj)        // Returns array of keys
Object.values(obj)      // Returns array of values
Object.entries(obj)     // Returns [key, value] pairs

Object.assign({}, obj1, obj2)  // Merges objects
Object.freeze(obj)      // Prevents modifications
Object.seal(obj)        // Allows updates, not add/delete
```

### Destructuring:

```javascript
const { name, age } = user;
```

### Spread Operator:

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = { ...obj1, ...obj2 };  // { a: 1, b: 2 }
```

### Looping:

```javascript
const user = { name: "Gourav", age: 22 };
for (let key in user) {
  console.log(key, user[key]);
}
```

### Copying Objects:

**Shallow Copy:** `const obj2 = {...obj1};`  
Nested objects still share reference.

**Deep Copy:** `const obj2 = JSON.parse(JSON.stringify(obj1));`

### Constructor Function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Gourav", 22);
```

### ES6 Class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Access
user.name
user["name"]

// Update
user.age = 25;

// Delete
delete user.city;
```

---

## Arrays

### Creating Arrays:

```javascript
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);  // "Apple"
```

### Array Methods:

```javascript
arr.length              // Get length
arr.push(4)            // Add at end
arr.pop()              // Remove from end
arr.unshift(1)         // Add at beginning
arr.shift()            // Remove from beginning

arr.slice(1, 3)        // Copy portion
arr.splice(1, 2)       // Add/remove elements
arr.join("-")          // Join with separator
arr.includes(2)        // Check existence
arr.indexOf(3)         // Find index
```

### Looping:

```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((num) => console.log(num));
```

### Higher Order Methods:

```javascript
arr.map(x => x * 2)              // Transform each element
arr.filter(x => x > 2)           // Filter elements
arr.reduce((sum, x) => sum + x)  // Reduce to single value
arr.find(x => x > 2)             // First match
arr.some(x => x > 2)             // At least one match
arr.every(x => x > 2)            // All match
```

### Spread and Destructuring:

```javascript
const result = [...arr1, ...arr2];  // Combine arrays
const [a, b] = arr;                 // Destructure
```

### String Methods with Arrays:

```javascript
const arr = ["JS", "React"];
arr.join("-")           // "JS-React"

const str = "JS,React,Node";
str.split(",")          // ["JS", "React", "Node"]
```

---

## Operators

### Arithmetic:

```javascript
+ (Addition)      // alert(2 + 2 + '1') => "41"
- (Subtraction)
* (Multiplication)
/ (Division)
% (Remainder)
** (Exponentiation)  // 2 ** 2 = 4
```

### Unary Plus (Type Conversion):

```javascript
let apples = "2";
let oranges = "3";
alert(+apples + +oranges);  // 5
```

### Assignment:

```javascript
a = b = c = 2 + 2;  // Chained assignment
n += 5;             // n = n + 5
n *= 2;             // n = n * 2

counter++;          // Post-increment (returns old value)
++counter;          // Pre-increment (returns new value)
```

### Bitwise:

```javascript
& (AND)       | (OR)      ^ (XOR)     ~ (NOT)
<< (LEFT SHIFT)   >> (RIGHT SHIFT)   >>> (ZERO-FILL RIGHT SHIFT)
```

### Comparison:

```javascript
alert('2' > 1);              // true
alert(null === undefined);   // false
alert(null == undefined);    // true
alert(null >= 0);            // true
```

### Logical:

```javascript
|| (OR)   &&  (AND)   ! (NOT)
```

### Nullish Coalescing (`??`):

Returns right value only if left is `null` or `undefined`:

```javascript
let name = null;
let result = name ?? "Guest";  // "Guest"

let count = 0;
let result = count ?? 10;      // 0 (not falsy, just nullish check)
```

**Falsy Values in JavaScript:**
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

