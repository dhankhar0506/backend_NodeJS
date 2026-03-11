# [JavaScript]

## what is JS?

- JavaScript is a high-level, interpreted programming language mainly used to make web pages interactive.
- Handle user events (click, hover, submit)
- Update HTML & CSS dynamically
- Create backend servers using Node.js
- Js is Interpreted Language
  - Compilation → Translate the entire book first, then read it.
  - Interpretation → Translate sentence by sentence while reading.
- Dynamically Typed
- JavaScript is a dynamically typed language, meaning we don't need to declare variable types explicitly. The type is determined automatically at runtime and a variable can hold different types of values during execution.
- Asynchronous Programming(built in Feature) : JavaScript can handle non-blocking operations using
    Callbacks
    Promises
    Async / Await
    Event Loop.

## how to take input from user in JS?

- let age = prompt('How old are you?', 100);
- alert(`You are ${age} years old!`); // You are 100 years old!

- We covered 3 browser-specific functions to interact with visitors:
  - Alert()
  - prompt()
  - confrim
    - let isBoss = confirm("Are you the boss?");
      alert( isBoss );

## Data Types in JS?

- Primitive Data Types:
  - Primitive data types store single simple values and are immutable (cannot be changed directly).
  - String, Number, Boolean.
  - Undefined: A variable declared but no value assigned.
  - Null:Represents an intentional empty value.
  - Symbol, BigInt
  
- Non-Primitive Data Types
  - These store complex data and references in memory.
  - Object Array Function.

- typeof undefined // "undefined"
- typeof 0 // "number"
- typeof 10n // "bigint"-> n represent the bigint
- typeof true // "boolean"
- typeof "foo" // "string"
- typeof Symbol("id") // "symbol"
- typeof Math // "object"  (1)
- typeof null // "object"  (2)
- typeof alert // "function"  (3)
  
## == vs === in JavaScript?

== Loose Equality Compares values only.
=== Strict Equality Compares value and datatype.

## Type Conversion in JavaScript with +, -, *, %

- (+) If one value is a string, JavaScript converts the other value into a string.
- (-,*,%) operators always converts values into numbers.

- [String_Conversion]
  - let value = true;
  - alert(typeof value); // boolean
  - value = String(value); // now value is a string "true"
  - alert(typeof value); // string
  
- [Numeric_Conversion]
      - let str = "123";
      - alert(typeof str); // string
      - let num = Number(str); // becomes a number 123
      - alert(typeof num); // number

      - alert( Number("   123   ") ); // 123
      - alert( Number("123z") );      // NaN (error reading a number at "z")
      - alert( Number(true) );        // 1
      - alert( Number(false) );       // 0

      - let age = Number("an arbitrary string instead of a number");
      - alert(age); // NaN, conversion failed

- [Boolean_Conversion]
  - alert( Boolean(1) ); // true
  - alert( Boolean(0) ); // false

  - alert( Boolean("hello") ); // true
  - alert( Boolean("") ); // false

  - alert( Boolean("0") ); // true
  - alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

## control Flow in JS?

- [if_elseIf_else]
  
- let marks = 75;
- if (marks >= 90) {
  console.log("Grade A");
- } else if (marks >= 60) {
  console.log("Grade B");
- } else {
  console.log("Grade C");
- }

- [switch_case]
  
- let day = 2;
- switch (day) {
  - case 1:
    console.log("Monday");
    break;

  - case 2:
    console.log("Tuesday");
    break;

  - default:
    console.log("Invalid Day");
  }

-[Loops(Iteration)]
  <!-- for -->
- for (let i = 1; i <= 5; i++) {
- console.log(i);
  }

  <!-- =while -->
- let i = 1;
- while (i <= 5) {
  console.log(i);
  i++;
}

<!--do while -->
- let i = 1;
- do {
  console.log(i);
  i++;
} while (i <= 5);

- [ternary_operator]
- condition ? value_if_true : value_if_false
- let age = 20
- let result = age >= 18 ? "Adult" : "Minor";
- console.log(result);

- [break]: Stops the loop completely.
- [continue]: Skips current iteration.

## Explain Varibale and What the difference between var vs let vs const

- A variable is a “named storage” for data. We can use varibales to Store data.
  There are two limitations on variable names in JavaScript:
    The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit.

- [Var]
- works inside a function, not block.
- Re-declaration Allowed and  Re-assignment Allowed
- Hoisted

- [let]
- Block Scoped
- Re-declaration NOT allowed
  - let a = 10
  - let a = 20.
- Re-assignment Allowed
  - let a = 10;
  - a = 20; // allowed.

- [Const]=  Block Scoped, Re-declaration and  Re-assignment  NOT allowed.

## . What is Hoisting?

- Hoisting means JavaScript moves variable and function declarations to the top of their scope before execution.

## What is Temporal Dead Zone (TDZ)?

Temporal Dead Zone is the time between variable hoisting and its initialization where the variable cannot be used.
    console.log(a);
    let a = 10
    Variable hoisted
    TDZ starts
    console.log(a) → ERROR
    a = 10 (TDZ ends)

## Function = reusable block of code that runs when call?

- Function = reusable block of code that runs when called
- Function Declaration -> function add(a, b) {
                            return a + b;
                            }
                            console.log(add(5, 3));
                        - Hoisted
                        - Can be called before declaration
- Function Expression : Not hoisted like declaration. Runs only after definition.
- Arrow Function (ES6): Short syntax function.
                      - const add = (a,b) => a + b;
- IFFI : Function that runs immediately after creation.
- Anonymous Function: Function without a name example :  settimeout and setTimeinterval

## Higher Order Functions (HOF)

- A Higher Order Function is a function that:
    Takes another function as argument
    OR
    Returns a function

## Callback Functions

- A callback function is a function passed as an argument to another function and executed later.

## Pure vs Impure Functions

- A pure function:Always returns the same output for the same input and Does not change external variables.
- Impure FunctionAnn:Modifies external variables and Output can change.

## Closures (Very Important)

- A closure happens when a function remembers variables from its outer scope even after the outer function has finished executing.

## setTimeout and setInterval?

- setTimeout and setInterval are JavaScript timer functions used to run code after some time.
- setTimeout runs a function only once after a delay.
- setInterval runs a function repeatedly after a fixed time interval.
- To stop interval  we used : clearTimeout() or  clearInterval()

## What is an Object?

- An object is a collection of key–value pairs.
  - const user = {
    name: "Gourav",
    age: 22,
    city: "Punjab"
    };
    console.log(user.name)
- const user = new Object();
    user.name = "Gourav";
    user.age = 22;
- Important Object Methods
  - Object.keys()
  - Object.values()
  - Object.entries()
  - Object.assign() => Copies objects.
    - const obj1 = {a:1};
    - const obj2 = {b:2};
    - const result = Object.assign({}, obj1, obj2);
    - console.log(result);
  - Object.freeze() : Prevents modification.
  - Object.seal(): Allows update but not add/delete.
  
- Object Destructuring (ES6): 
                            - const user = {
                                name:"Gourav",
                                age:22
                            };
                            const {name, age} = user
- Spread Operator with Objects:
                            const obj1 = {a:1}
                            const obj2 = {b:2}
                            const result = {...obj1, ...obj2}
                            console.log(result)
- Looping in object
     const user = {
      name:"Gourav",
      age:22
    };

    for(let key in user){
    console.log(key, user[key]);
    }

- Shallow vs Deep Copy
- shallow copy:
  - const obj2 = {...obj1};
  - Nested objects still share reference.
- Deep Copy
  - const obj2 = JSON.parse(JSON.stringify(obj1));

- Constructor function:  
    function Person(name, age){
        this.name = name;
        this.age = age;
    }
    const p1 = new Person("Gourav",22)

- Using Class (ES6):
    class Person{
        constructor(name, age){
        this.name = name;
        this.age = age;
        }
    }
  - user.name // access
  - user["name"] // access
  - user.age = 25; // update
  - delete user.city; // delete

## what is array in JS?

- creating => const fruits = ["Apple", "Banana", "Mango"];
- Access Array Elements : Arrays use indexing (starts from 0).
                        - console.log(fruits[0]);
- Modify Array:  fruits[3] = "Orange"
- Important Array Properties
  - length => arr.length
  - push() : Adds element at the end
           : arr.push(4);
  - pop()  : Removes element from end
           :  arr.pop() , arr.pop(2)
  - unshift():Adds element at beginning  
  - shift(): Removes element from beginning
- Looping :  
  - for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    }

  - arr.forEach((num)=>{
      console.log(num);
    });
- Higher Order Methods
  - map() : Creates a new array
  - filter() : Filters elements based on condition.
  - reduce() : Reduces array to single value.
  - find() : Returns first matching element
  - some() : Returns true if at least one matches
  - every() : Returns true if all match.
- Array Searching Methods
  - arr.includes(2); // true
  - arr.indexOf(3) // 2
- Array Manipulation Methods
  - arr.slice(1,3); // Returns copy of array
  - arr.splice(1,2) // Add/remove elements.
- spread operator : const result = [...arr1,...arr2];
- Array Destructuring
    const arr = [10,20,30];
    const [a,b] = arr;
    console.log(a);
-Join: 
    const arr = ["JS","React"];
    arr.join("-") // JS-React
-Split:
    const str = "JS,React,Node";
    str.split(","); // ["JS","React","Node"]

## Operators in JS?

- Addition +,
  - alert(2 + 2 + '1' ); // "41" and not "221"
  - alert('1' + 2 + 2); // "122" and not "14"

  - let apples = "2";
    let oranges = "3";
    // both values converted to numbers before the binary plus
    alert( +apples + +oranges ); // 5 // (+) before variable convert string into number

- Subtraction -,
- Multiplication *,
- Division /,
- Remainder %,

- Exponentiation **.
  - alert( 2 ** 2 ) // square  
  - alert( 4 ** (1/2) ) // square root

- Assignment operator
  - let a, b, c;
  - a = b = c = 2 + 2;
  - alert( a ); // 4
  - alert( b ); // 4
  - alert( c ); // 4

  - let n = 2;
  - n += 5; // now n = 7 (same as n = n + 5)
  - n *= 2; // now n = 14 (same as n = n * 2)
  - alert( n ); // 14

  - let counter = 0;
  - alert( counter++ ); // 0  

  - let counter = 0;
  - alert( ++counter ); // 1

  - let counter = 1;
  - let a = counter++; // (*) changed ++counter to counter++
  - alert(a); // 1

  - let counter = 1;
  - let a = ++counter; // (*)
  - alert(a); // 2

- Bitwise operators
  - AND ( & )
  - OR ( | )
  - XOR ( ^ )
  - NOT ( ~ )
  - LEFT SHIFT ( << )
  - RIGHT SHIFT ( >> )
  - ZERO-FILL RIGHT SHIFT ( >>> )

- Comma
  - let a = (1 + 2, 3 + 4);
  - alert( a ); // 7 (the result of 3 + 4) 

- Comparison
  - alert( '2' > 1 ); // true, string '2' becomes a number 2
  - alert( '01' == 1 ); // true, string '01' becomes a number 1 

  - alert( true == 1 ); // true
  - alert( false == 0 ); // true

  - alert( null === undefined ) // false (typeof null-> object and typeof undefined-> undefined)
  - alert( null == undefined ); // true

  - alert( null > 0 );  // (1) false
  - alert( null == 0 ); // (2) false
  - alert( null >= 0 ); // (3) true

  - alert( undefined > 0 ); // false (1)
  - alert( undefined < 0 ); // false (2)
  - alert( undefined == 0 ); // false (3)

- Logical operators
  - || (OR)
    - alert( true || true );   // true
    - alert( false || true );  // true
    - alert( true || false );  // true
    - alert( false || false ); // false
  - && (AND)
    - result = a && b;
    - alert( true && true );   // true
    - alert( false && true );  // false
    - alert( true && false );  // false
    - alert( false && false ); // false
  - ! (NOT)
    - Returns the inverse value.
    - alert( !true ); // false
    - alert( !0 ); // true

## Nullish coalescing operator '??'

- The Nullish Coalescing Operator returns the right value only when the left value is null or undefined.
  - If value1 is null or undefined → return value2
  - Otherwise → return value1
  - let name = null;
  - let result = name ?? "Guest";
  - console.log(result) // Guest

- let count = 0;
  - let result = count || 10;
  - console.log(result); // 10 beacuse when we used this it takes 0 as falsy value and return 10
    - false
    - 0
    - ""
    - null
    - undefined
    - NaN

- let count = 0;
- let result = count ?? 10;
- console.log(result);// 0 because it check null and undefined only in nullish operator 
