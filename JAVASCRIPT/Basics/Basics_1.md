# What is Variables?

- A variable is a container used to store data in a program.
    - `let name = "Gourav"`
    - `let age = 25`
- We use variables to:
    - Store data
    - Reuse data

## Types of Variables in JavaScript

- **var**
    - Old way (avoid)
    - Can change value ✅
    - Can declare again ✅
    - Not safe ❌
        - Example: `var x = 10; var x = 20;` // allowed ❌ (confusing)
    
- **let**
    - Can change value ✅
    - Cannot declare again ❌
        - Example: `let x = 10; x = 20;` // ✅
    
- **const**
    - Cannot change ❌
    - Cannot declare again ❌
    - Most safe 🔒

## What is Data Types and Its Types?

- Data types define what kind of value a variable can store.
    - **Primitive (Basic)**
        - **String** (text)
            - Backticks are used to create template literals (modern way to write strings): `` ` ` ``
            - String Interpolation (Most Important): You can insert variables using `${}`
                ```javascript
                const name = "Gourav";
                const age = 25;
                console.log(`My name is ${name} and I am ${age} years old`);
                ```
        - **Number**
            - The number type represents both integer and floating point numbers.
            - Infinity represents the mathematical Infinity ∞. It is a special value greater than any number.
                ```javascript
                alert( 1 / 0 ); // Infinity
                ```
            - NaN represents a computational error.
                ```javascript
                alert( "not a number" / 2 ); // NaN
                ```
        - **Boolean** (true/false)
        - **Undefined** - Variable declared but no value
            - `undefined == 0` // false
        - **Null** - Intentionally empty
            - `null == 0` // true
        - **BigInt**
        - **Symbol** - Unique values (advanced use)
    - **Non-Primitive (Reference Types)**
        - Object
        - Array
        - Function

## Pass by Value vs Pass by Reference

- **Pass by Value**: A copy of the value is passed; changes do NOT affect original
    ```javascript
    let a = 10;
    let b = a;
    b = 20;
    console.log(a); // 10 ✅ (unchanged)
    console.log(b); // 20
    ```
- **Pass by Reference**: The reference (address) is passed; changes affect original
    ```javascript
    let obj1 = { name: "Gourav" };
    let obj2 = obj1;
    obj2.name = "Rahul";
    console.log(obj1.name); // Rahul ❗ (changed)
    ```

## Shallow Copy vs Deep Copy

- **Shallow Copy**: Copies only the top level; nested objects are still shared
    ```javascript
    const user1 = {
        name: "Gourav",
        address: { city: "Delhi" }
    };
    const user2 = { ...user1 }; // shallow copy
    user2.address.city = "Mumbai";
    console.log(user1.address.city); // ❗ Mumbai (changed!)
    ```

- **Deep Copy**: Copies everything including nested objects; completely independent
    ```javascript
    const user1 = {
        name: "Gourav",
        address: { city: "Delhi" }
    };
    const user2 = structuredClone(user1); // deep copy
    user2.address.city = "Mumbai";
    console.log(user1.address.city); // ✅ Delhi (unchanged)
    ```

## Interaction: alert, prompt, confirm

- **alert**: Shows a message and waits for user to press "OK"
    ```javascript
    alert("Hello");
    ```
- **prompt**: Accepts two arguments
    ```javascript
    result = prompt(title, [default]);
    ```
- **confirm**: Shows a modal window with OK and Cancel buttons
    ```javascript
    let isBoss = confirm("Are you the boss?");
    ```

## Type Conversions

- **Number()**
    ```javascript
    let x = "100";
    let num = Number(x);
    ```
- **parseInt()** (Integer only)
    ```javascript
    let x = "100px";
    let num = parseInt(x);
    console.log(num); // 100
    ```
- **Unary** (shortcut to convert to number)
    ```javascript
    let x = "50";
    let num = +x;
    console.log(num); // 50
    ```

## What is Type Coercion in JavaScript?

- Type coercion means JavaScript automatically converts one data type to another when needed.
- **String + Number** = String
    ```javascript
    console.log("10" + 5); // "105" (string)
    ```
- **Math operations** (➖ ➗ ✖) = Number
    ```javascript
    "5" - 2  // 3
    "5" * 2  // 10
    "5" / 2  // 2.5
    ```
- **Weird Cases** (Important)
    ```javascript
    "5" + true   // "5true"
    "5" - true   // 4
    true + true  // 2
    null + 1     // 1
    undefined + 1 // NaN
    ```

## Falsy vs Truthy Values

- **Falsy Values:**
    - `false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, `NaN`

- **Truthy Values:**
    - `"hello"`, `"0"`, `1`, `-1`, `[]`, `{}`, `true`

## What are Operators in JS?

- Operators are symbols used to perform operations on values (operands).

### Types of Operators in JS

- **Arithmetic Operators** ➕ ➖ ✖ ➗
- **Assignment Operators**
    ```javascript
    let x = 10;
    x += 5;  // x = x + 5 → 15
    x -= 2;  // 13
    x *= 2;  // 26
    ```
- **Comparison Operators** (Compare values → return true/false)
    ```javascript
    console.log(5 == "5");   // true ❗ (type coercion)
    console.log(5 === "5");  // false ✅
    console.log(5 != 3);     // true
    console.log(5 > 3);      // true
    console.log(5 < 3);      // false
    ```
- **Logical Operators**
    ```javascript
    let a = true;
    let b = false;
    console.log(a && b);  // false (AND)
    console.log(a || b);  // true  (OR)
    console.log(!a);      // false (NOT)
    ```
- **Ternary Operator**
    ```javascript
    let age = 18;
    let result = age >= 18 ? "Adult" : "Minor";
    console.log(result);
    ```
- **Bitwise Operators** (work on binary: 0 & 1)
    - AND (&): `5 & 3` → `1`
    - OR (|): `5 | 3` → `7`
    - XOR (^): `5 ^ 3` → `6`
    - LeftShift: `5 << 1` → `10`
    - RightShift: `5 >> 1` → `2`
- **Comma Operator**: Used to write shorter code
    ```javascript
    let a = (1 + 2, 3 + 4);
    alert(a);  // 7
    ```

## Loose Equality vs Strong Equality

- **(==)**: Compares value only; does not compare data types
- **(===)**: Compares value + type
    ```javascript
    false == 0    // true ❗
    false === 0   // false ✅

    null == undefined  // true ❗
    null === undefined // false ✅
    ```

## Prefix vs Postfix Increment (++) in JavaScript

- **Prefix (++i)**: First increase, then use the value
    ```javascript
    let i = 1;
    let result = ++i;
    console.log(i);      // 2
    console.log(result); // 2
    ```
- **Postfix (i++)**: First use, then increase
    ```javascript
    let i = 1;
    let result = i++;
    console.log(i);      // 2
    console.log(result); // 1
    ```

## Conditional Branching

```javascript
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year < 2015) {
    alert('Too early...');
} else if (year > 2015) {
    alert('Too late');
} else {
    alert('Exactly!');
}
```

**Ternary Operator:**
```javascript
let result = condition ? value1 : value2;
```

## Nullish Coalescing Operator (??)

- Returns right side only if left is null or undefined
    ```javascript
    let name = null ?? "Guest";
    console.log(name); // "Guest"
    ```
- `0 ?? 100` // 0 ✅ (0 is NOT null/undefined)
    - Note: In AND/OR operators, 0 is treated as a falsy value, but with nullish coalescing it is not