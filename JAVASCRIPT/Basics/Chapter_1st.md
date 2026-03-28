
# What is Variables?

- A variable is a container used to store data in a program.
  - `let name = "Gourav"`
  - `let age = 25`
- We use variables to:
  - Store data
  - Reuse data

## Types of Variables in JavaScript

| Type | Can Change | Can Redeclare | Safety |
|------|-----------|---------------|--------|
| `var` | ✅ | ✅ | ❌ Old way (avoid) |
| `let` | ✅ | ❌ | ✅ Recommended |
| `const` | ❌ | ❌ | 🔒 Most safe |

**Example:**
```javascript
var x = 10;
var x = 20; // ❌ Allowed but confusing

let y = 10;
y = 20; // ✅ Works
// let y = 30; ❌ Error

const z = 10;
// z = 20; ❌ Error
```

## Data Types in JavaScript

### Primitive Types (Basic)
- **String** (text)
  - Template literals: `` ` ` ``
  - String interpolation: `${variable}`
  ```javascript
  const name = "Gourav";
  const age = 25;
  console.log(`My name is ${name} and I am ${age} years old`);
  ```

- **Number** (integer & floating point)
  - `Infinity` - greater than any number
  - `NaN` - result of invalid mathematical operation
  ```javascript
  console.log(1 / 0); // Infinity
  console.log("text" / 2); // NaN
  ```

- **Boolean** (`true` / `false`)

- **Undefined** - variable declared but no value assigned
  ```javascript
  undefined == 0 // false
  ```

- **Null** - intentionally empty
  ```javascript
  null == 0 // true
  ```

- **BigInt** - for very large integers
- **Symbol** - unique values (advanced)

### Non-Primitive Types (Reference Types)
- Object
- Array
- Function

## Pass by Value vs Pass by Reference

### Pass by Value
A copy of the value is passed. Changes do NOT affect the original.
```javascript
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 ✅ (unchanged)
console.log(b); // 20
```

### Pass by Reference
The reference (address) is passed. Changes affect the original.
```javascript
let obj1 = { name: "Gourav" };
let obj2 = obj1;
obj2.name = "Rahul";
console.log(obj1.name); // Rahul ❗ (changed)
```

## Shallow Copy vs Deep Copy

### Shallow Copy
Copies only the top level. Nested objects are still shared.
```javascript
const user1 = {
  name: "Gourav",
  address: { city: "Delhi" }
};
const user2 = { ...user1 }; // shallow copy
user2.address.city = "Mumbai";
console.log(user1.address.city); // ❗ Mumbai (changed!)
```

### Deep Copy
Copies everything including nested objects. Completely independent.
```javascript
const user1 = {
  name: "Gourav",
  address: { city: "Delhi" }
};
const user2 = structuredClone(user1); // deep copy
user2.address.city = "Mumbai";
console.log(user1.address.city); // ✅ Delhi (unchanged)
```

## Browser Interaction Methods

```javascript
alert("Hello");                           // Shows message with OK button
prompt("Name?", "default");               // Shows input field
confirm("Are you the boss?");             // Shows OK/Cancel buttons
```

## Type Conversions

```javascript
// Number()
let x = "100";
let num = Number(x); // 100

// parseInt() - Integer only
let y = "100px";
let num2 = parseInt(y); // 100

// Unary operator (+)
let z = "50";
let num3 = +z; // 50
```

## Type Coercion

JavaScript automatically converts data types when needed.

```javascript
// Addition with string (concatenation)
console.log("10" + 5); // "105" (string)

// Math operations (convert to number)
console.log("5" - 2);     // 3
console.log("5" * 2);     // 10
console.log("5" / 2);     // 2.5

// Weird cases
console.log("5" + true);   // "5true"
console.log("5" - true);   // 4
console.log(true + true);  // 2
console.log(null + 1);     // 1
console.log(undefined + 1); // NaN
```

## Falsy vs Truthy Values

### Falsy Values
```javascript
false, 0, -0, "", null, undefined, NaN
```

### Truthy Values
```javascript
"hello", "0", 1, -1, [], {}, true
```

## Operators in JavaScript

### Arithmetic Operators
`+`, `-`, `*`, `/`, `%`, `**`

### Assignment Operators
```javascript
let x = 10;
x += 5;  // 15
x -= 2;  // 13
x *= 2;  // 26
```

### Comparison Operators
```javascript
console.log(5 == "5");   // true ❗ (type coercion)
console.log(5 === "5");  // false ✅ (strict)
console.log(5 != 3);     // true
console.log(5 > 3);      // true
```

### Logical Operators
```javascript
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)
```

### Ternary Operator
```javascript
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
```

### Bitwise Operators
```javascript
// 5 = 101, 3 = 011
console.log(5 & 3);   // 1 (AND)
console.log(5 | 3);   // 7 (OR)
console.log(5 ^ 3);   // 6 (XOR)
console.log(5 << 1);  // 10 (Left shift)
console.log(5 >> 1);  // 2 (Right shift)
```

## Equality: Loose vs Strict

| Operator | Compares | Example |
|----------|----------|---------|
| `==` | Value only | `false == 0` → `true` ❗ |
| `===` | Value + Type | `false === 0` → `false` ✅ |

```javascript
null == undefined   // true ❗
null === undefined  // false ✅
```

## Increment: Prefix vs Postfix

### Prefix (`++i`)
Increases first, then returns value.
```javascript
let i = 1;
let result = ++i;
console.log(i);      // 2
console.log(result); // 2
```

### Postfix (`i++`)
Returns value first, then increases.
```javascript
let i = 1;
let result = i++;
console.log(i);      // 2
console.log(result); // 1
```

## Conditional Statements

```javascript
let year = prompt('Year of ECMAScript-2015?', '');
if (year < 2015) {
  alert('Too early...');
} else if (year > 2015) {
  alert('Too late');
} else {
  alert('Exactly!');
}
```

### Ternary Operator
```javascript
let result = condition ? value1 : value2;
```

## Nullish Coalescing Operator (`??`)

Returns right side only if left is `null` or `undefined` (not falsy).
```javascript
let name = null ?? "Guest";      // "Guest"
console.log(0 ?? 100);           // 0 (not null/undefined)
```

## Loops

| Loop Type | Use Case |
|-----------|----------|
| `for` | When you know the number of iterations |
| `while` | When condition must be checked first |
| `do...while` | Always runs at least once |
| `for...of` | Iterate over array values |
| `for...in` | Iterate over object keys |

```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for...of loop
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

// for...in loop
let user = { name: "Gourav", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}
```

### Loop Control Statements
```javascript
break;    // Stop loop
continue; // Skip iteration
```

## Switch Statement

```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // default code
}
```

## Functions

### Function Declaration
```javascript
function add(a, b) {
  return a + b;
}
let result = add(2, 3); // 5
```
Hoisted ✔ (can call before declaration)

### Function Expression
```javascript
const sayHello = function () {
  console.log("Hello");
};
```
Not hoisted ❌

### Arrow Function
```javascript
const add = (a, b) => a + b;
```
Short syntax ✔ | No own `this` ❗ | Not hoisted ❌

### Callback Function
```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Gourav", sayBye);

// With arrow function
greet("Gourav", () => {
  console.log("Finished!");
});
```