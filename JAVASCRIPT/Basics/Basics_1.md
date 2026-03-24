# What is Variables?

- A variable is a container used to store data in a program.
  - let name = "Gourav"
  - let age = 25
- we use variables
  - Store data
  - Reuse data

## Types of Variables in JavaScript?

- [var]
  - Old way (avoid)
  - Can change value ✅
  - Can declare again ✅
  - Not safe ❌
    - [Example]
    - var x = 10;
    - var x = 20; // allowed ❌ (confusing)
  
- [let]
  - Can change value ✅
  - Cannot declare again ❌
    - [Example]
    - let x = 10;
    - x = 20; // ✅
  
- [const]
  - Cannot change ❌
  - Cannot declare again ❌
  - Most safe 🔒

## What is Data types and its types?

- Data types define what kind of value a variable can store.
  - [Primitive] (Basic)
    - [String](text)
      - Backticks are used to create template literals (modern way to write strings).
        - ` `
      - String Interpolation (Most Important) :  You can insert variables using ${}
        - const name = "Gourav";
          const age = 25;
          console.log(`My name is ${name} and I am ${age} years old`);
    - [Number]
      - The number type represents both integer and floating point numbers.
      - Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
        - alert( 1 / 0 ); // Infinity
      - NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
        - alert( "not a number" / 2 ); // NaN, such division is erroneous
    - [Boolean] (true/false)
    - [Undefined] - Variable declared but no value\
      - undefined == 0 // false
    - [Null] - Intentionally empty
      - null == 0 // true
    - [BigInt]
    - [Symbol] - Unique values (advanced use)
  - [Non-Primitive] (Reference Types)
    - Object
    - Array
    - Function

## what is pass by value and pass by Refrence?

- [Pass_by_Value] = A copy of the value is passed
                    Changes do NOT affect original
                    let a = 10;
                    let b = a;
                    b = 20;
                    console.log(a); // 10 ✅ (unchanged)
                    console.log(b); // 20
- [Pass_by_Refrence] = The reference (address) is passed
                       Changes affect original
                    let obj1 = { name: "Gourav" };
                    let obj2 = obj1;
                    obj2.name = "Rahul";
                    console.log(obj1.name); // Rahul ❗ (changed)

## What is shallow copy and deep Copy ?

- [Shallow_Copy] = Copies only the top level
                 = Nested objects are still shared (same reference)
                 = const user1 = {
                    name: "Gourav",
                    address: { city: "Delhi" }
                    };
                    const user2 = { ...user1 }; // shallow copy
                    user2.address.city = "Mumbai";
                    console.log(user1.address.city); // ❗ Mumbai (changed!)

- [Deep_Copy] = Copies everything (including nested objects)
              = Completely independent copy
            = const user1 = {
            name: "Gourav",
            address: { city: "Delhi" }
            };

            const user2 = structuredClone(user1); // deep copy

            user2.address.city = "Mumbai";

            console.log(user1.address.city); // ✅ Delhi (unchanged)

## Interaction: alert, prompt, confirm?

- alert: This one we’ve seen already. It shows a message and waits for the user to press “OK”.
  - alert("Hello");
- prompt : The function prompt accepts two arguments
  - result = prompt(title, [default]);
- confirm : The function confirm shows a modal window with a question and two buttons: OK and Cancel.
  - let isBoss = confirm("Are you the boss?");

## Type Conversions?

- Number():
  - let x = "100";
  - let num = Number(x);
- parseInt() (Integer only)
  - let x = "100px";
    let num = parseInt(x);
    console.log(num); // 100
- Unary(shortcut to convert into number)
  - let x = "50";
    let num = +x;
    console.log(num); // 50

## What is Type Coercion in JavaScript?

- Type coercion means JavaScript automatically converts one data type to another when needed.
- (String + Number) =  console.log("10" + 5); // "105"(string)
- ➖ ➗ ✖ (Math operations) = Number
  - "5" - 2 = 3
    "5" * 2 = 10
    "5" / 2 = 2.5
- Weird Cases (Important)
  - "5" + true   // "5true"
    "5" - true   // 4
    true + true  // 2
    null + 1     // 1
    undefined + 1 // NaN

## falsy vs truty values

- [Falsy_Value:]
  - false
  0
  -0
  ""        // empty string
  null
  undefined
  NaN
- [Truthy_Values]
  - "hello"
    "0"
    1
    -1
    []
    {}
    true

## What are Operators in JS?

- Operators are symbols used to perform operations on values (operands).
- Types of Operators in JS
  - Arithmetic Operators ➕ ➖ ✖ ➗
  - Assignment Operators (=)
    - let x = 10;
    x += 5; // x = x + 5 → 15
    x -= 2; // 13
    x *= 2; // 26
  - Comparison Operators : Compare values → return true/false
    - console.log(5 == "5");  // true ❗ (type coercion)
    console.log(5 === "5"); // false ✅
    console.log(5 != 3);    // true
    console.log(5 > 3);     // true
    console.log(5 < 3);     // false
  - Logical Operators
    let a = true;
    let b = false;
    console.log(a && b); // false (AND)
    console.log(a || b); // true  (OR)
    console.log(!a);
  - Ternary Operator
    - let age = 18;
    let result = age >= 18 ? "Adult" : "Minor";
    console.log(result)
  - Bitwise Operators : Bitwise operators work on binary (0 & 1)
    - 5 → 101
    - 3 → 011
    - AND (&)
      - console.log(5 & 3);
      - 101
        011
        001 → 1
    - OR (|)
      - 101
        011
        111 → 7
    - XOR (^)
    - 101
      011
      110 → 6
    - LeftShift
      - console.log(5 << 1);
    - RightShift
      - console.log(5 >> 1);
  - Comma : The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
    - let a = (1 + 2, 3 + 4);
    - alert( a )
  
## Loose Equaity vs strong Equaity

- (==) : Compares value only doesnot compare data types
- (===) : Compares value + type
  - false == 0    // true ❗
    false === 0   // false ✅

    null == undefined  // true ❗
    null === undefined // false ✅

## Prefix vs Postfix Increment (++) in JavaScript?

- Prefix (++i) :  First increase, then use the value
  - let i = 1;
    let result = ++i;
    console.log(i);      // 2
    console.log(result); // 2
- Postfix (i++) : First use, then increase
  - let i = 1;
    let result = i++;
    console.log(i);      // 2
    console.log(result); // 1

## Conditional branching

- let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
    if (year < 2015) {
    alert( 'Too early...' );
    } else if (year > 2015) {
    alert( 'Too late' );
    } else {
    alert( 'Exactly!' );
    }
- Ternary Operator : let result = condition ? value1 : value2;
  
## Nullish coalescing operator '??'

- Returns right side only if left is null or undefined
  - let name = null ?? "Guest";
    console.log(name); // "Guest"
- 0 ?? 100   // 0 ✅
  - 0 is NOT null/undefined in case of nullish coaslescing but in
  - AND and OR : 0 && "guest" -> it treated 0 as falsy value

## Loops in JS?

Loops are used to repeat code multiple times.

### Types of Loop

- **for loop** – Use when you know how many times to run
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```

- **While Loop** – Runs while condition is true
    ```javascript
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
    ```

- **do...While** – Runs at least once (even if condition is false)
    ```javascript
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);
    ```

- **for...of loop** – Iterate over array values
    ```javascript
    let arr = [10, 20, 30];
    for (let value of arr) {
        console.log(value);
    }
    ```

- **for...in loop** – Iterate over object keys 🔑
    ```javascript
    let user = { name: "Gourav", age: 25 };
    for (let key in user) {
        console.log(key, user[key]);
    }
    ```

### Loop Control Statements

- **break** – Stop loop
    ```javascript
    for (let i = 0; i < 5; i++) {
        if (i === 3) break;
        console.log(i);
    }
    ```

- **continue** – Skip current iteration
    ```javascript
    for (let i = 0; i < 5; i++) {
        if (i === 2) continue;
        console.log(i);
    }
    ```

## Switch Statement

A switch statement runs different code based on different values.

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

## Functions in JS

A function is a block of reusable code.

**Function = Reusable code**

```javascript
function add(a, b) {
    return a + b;
}

let result = add(2, 3);
console.log(result); // 5
```

### Types of Functions

- **Function Declaration** – Hoisted ✔ (can call before declaration)
    ```javascript
    function sayHi() {
        console.log("Hi");
    }
    ```

- **Function Expression** – Not hoisted ❌
    ```javascript
    const sayHello = function () {
        console.log("Hello");
    };
    ```

- **Arrow Function** – Short syntax ✔
    ```javascript
    const add = (a, b) => a + b;
    ```
    > Note: No `this` of its own ❗, Not hoisted ❌

- **Anonymous Function** – Function without a name
    ```javascript
    setTimeout(function () {
        console.log("Run after 2 sec");
    }, 2000);
    ```

- **Callback Function** – A function passed as an argument, executed later
    ```javascript
    function greet(name, callback) {
        console.log("Hello " + name);
        callback(); // calling callback
    }

    function sayBye() {
        console.log("Bye!");
    }

    greet("Gourav", sayBye);
    ```

- **Arrow Function Callback**
    ```javascript
    greet("Gourav", () => {
        console.log("Finished!");
    });
    ```