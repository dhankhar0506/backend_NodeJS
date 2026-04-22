# Basics

## "use strict"?

- "use strict" is a special line you put at the top of a JavaScript file to make the code run in strict mode.
- “Be more careful. Don’t allow mistakes silently.”
- Without use strict
  - x = 10; // creates a global variable
- With strict mode
  - x = 10; // ❌ Error: x is not declared.

## Variables

- A variable is like a container (box) where you store data
- Types of Variables in JS
  - var // Can be re-declared and Not block scoped
    - var x = 10;
    - var x = 20; // allowed (but risky)
  - let // Can change value and Cannot re-declare in same scope and Block scoped (safe)
  - const // Cannot change value and Must assign value at start

| Feature    | var ❌ | let ✅ | const 🔒 |
|------------|--------|--------|----------|
| Re-declare | ✅ Yes | ❌ No  | ❌ No    |
| Re-assign  | ✅ Yes | ✅ Yes | ❌ No    |
| Scope      | Function | Block | Block   |
| Use today  | ❌ Avoid | ✅ Yes | ✅ Yes   |

## Rule Variable Naming

- The name must contain only letters, digits, or the symbols $ and _.
- The first character must not be a digit.
- Reserved word cannot be as variable name
  - let let = 5
  - let return = 5

## Data Types

- Data types tell us what kind of value a variable is holding.
  - let name = "Gourav"; // string
  - let age = 25;        // number
- Types of Data Types:
  - Primitive Data Types: String (text), Number, Boolean (true | false),
    - Undefined: let x // Variable declared but no value // typeof -> undefined
    - Null: let y = null; // Intentionally empty value // typeof -> object
    - BigInt: Very large numbers
    - Symbol: let id = Symbol("id") // Unique value (rarely used)
  - Non-Primitive (Reference Types)
    - Object: let user = {
        name: "Gourav",
        age: 25
      };
    - Array: let fruits = ["apple", "banana", "mango"];
    - Function: function greet() {
        return "Hello";
      }
- Check Data Type = typeof variableName

## Dynamically Typed vs Statically Typed (simple terms)

- Dynamically typed → type decided at runtime (while code runs)
  - You don’t tell the type — JavaScript figures it out
- Statically typed → type decided before running (at compile time)
  - You must define the type

| Feature          | Dynamic (JS) 🟡 | Static (TS/Java) 🔵 |
|------------------|-----------------|---------------------|
| Type defined     | Runtime         | Before execution    |
| Can change type  | ✅ Yes          | ❌ No               |
| Errors caught    | Later           | Early               |
| Flexibility      | High            | Strict              |

[Compilation (Compiler)]:

- A compiler translates the entire code at once into machine code before running it.
- Errors are shown before execution
- Languages like C, C++

[Interpretation (Interpreter)]:

- An interpreter translates and runs the code line by line during execution.
- e.g., JavaScript, Python
- Errors are shown line by line during execution

## Numbers

- let a = 10;     // integer
- let b = 10.5;   // float
- let x = 10 / 0;     // Infinity
- let y = "abc" / 2;  // NaN // typeof NaN  // "number"
- toString() → number → string
  - let num = 100;
  - console.log(num.toString()); // "100"
- Number() → convert to number
  - Number("123");   // 123
  - Number("abc");   // NaN
- parseInt() → string → integer
  - parseInt("10.5"); // 10
- isNaN() → check if not a number // true / false
- Math.round(4.6);   // 5
- Math.floor(4.9);   // 4
- Math.ceil(4.1);    // 5
- Math.random();     // 0 to 1
- Math.max(10, 20);  // 20
- Math.min(10, 20);  // 10

## String

- let name = "Gourav" // Double quotes
- let city = 'Delhi'// Single quotes
- let message = `Hello World` // Backticks -> Used for dynamic values

- toUpperCase() & toLowerCase()
  - str.toUpperCase(); // "JAVASCRIPT"
  - str.toLowerCase(); // "javascript"

- slice()
  - let str = "JavaScript"
  - str.slice(0, 4); // "Java"

- includes()
  - let str = "Hello World";
  - str.includes("World"); // true

- indexOf()
  - let str = "Hello";
  - str.indexOf("e"); // 1

- replace()
  - let str = "Hello World";
  - str.replace("World", "Gourav"); // "Hello Gourav"

- trim()
  - let str = "   Hello   ";
  - str.trim() // Removes extra spaces

- concat() (or + operator)
  - let a = "Hello";
  - let b = "World";
  - a + " " + b // Hello World

- charAt()
  - let str = "Hello";
  - str.charAt(0); // "H"

- split() → convert to array
  - let str = "a,b,c";
  - console.log(str.split(",")); // ["a","b","c"]

## Array

- An array is a list that stores multiple values in one variable.
- let fruits = ["apple", "banana", "mango"];
- Accessing Values
  - fruits[0]; // "apple"
  - fruits[1]; // "banana"
- push() -> add at end
  - fruits.push("orange");// ["apple", "banana", "mango", "orange"]
- pop() → remove last
  - fruits.pop(); // removes "orange"
- unshift() → add at beginning
  - fruits.unshift("grapes") // ["grapes", "apple", ...]
- shift() → remove first
  - fruits.shift(); // removes "grapes"
- length → size of array
- includes() → check value
  - fruits.includes("apple"); // true
- indexOf() → find index
  - fruits.indexOf("banana"); // 1
- forEach() → loop
  - fruits.forEach(fruit => console.log(fruit));
- slice() → copy part
  - let arr = [1, 2, 3, 4];
  - arr.slice(1, 3); // [2, 3]
- splice() → add/remove
  - let arr = [1, 2, 3];
  - arr.splice(1, 1);  // removes 2 → [1, 3]
- join() → array to string
  - ["a", "b", "c"].join("-"); // "a-b-c"
- map() → transform data
  - let nums = [1, 2, 3];
  - let result = nums.map(n => n * 2);// [2, 4, 6]
- filter() → filter data
  - let nums = [1, 2, 3, 4];
  - let even = nums.filter(n => n % 2 === 0);// [2, 4]
- some()
  - Checks if at least ONE element satisfies condition
  - let nums = [1, 2, 3, 4];
  - let result = nums.some((n) => n > 3);
  - console.log(result); // true
- flat()
  - Converts nested array → single array
  - let arr = [1, 2, [3, 4]];
  - let result = arr.flat();
  - console.log(result); // [1, 2, 3, 4]
- find()
  - It returns the first element that matches a condition
  - let nums = [1, 2, 3, 4]
  - let result = nums.find((n) => n > 2);
  - console.log(result); // 3
- reduce()
  - Used to convert array into a single value
  - let nums = [1, 2, 3, 4];
  - let sum = nums.reduce((acc, curr) => acc + curr, 0)
  - console.log(sum); // 10
