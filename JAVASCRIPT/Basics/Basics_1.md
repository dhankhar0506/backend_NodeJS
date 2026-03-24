# JavaScript Basics

## Variables

A variable is a container that stores data in a program.

```javascript
let name = "Gourav";
let age = 25;
```

**Use cases:**
- Store data
- Reuse data

### Variable Types

| Type | Reassign | Redeclare | Safety | Notes |
|------|----------|-----------|--------|-------|
| `var` | ✅ | ✅ | ❌ | Old way - avoid |
| `let` | ✅ | ❌ | ✅ | Modern standard |
| `const` | ❌ | ❌ | 🔒 | Most safe - preferred |

---

## Data Types

JavaScript has two categories of data types:

### Primitive Types
- **String**: Text values
    - Template literals: `` `Hello ${name}` ``
- **Number**: Integer and floating-point values
    - `Infinity`: Greater than any number
    - `NaN`: Result of invalid operations
- **Boolean**: `true` or `false`
- **Undefined**: Declared but no value assigned
- **Null**: Intentionally empty
- **BigInt**: Large integers
- **Symbol**: Unique identifiers

### Non-Primitive Types
- Object
- Array
- Function

---

## Pass by Value vs Pass by Reference

**Pass by Value** (Primitives)
```javascript
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)
```

**Pass by Reference** (Objects/Arrays)
```javascript
let obj1 = { name: "Gourav" };
let obj2 = obj1;
obj2.name = "Rahul";
console.log(obj1.name); // Rahul (changed)
```

---

## Shallow Copy vs Deep Copy

**Shallow Copy** (nested objects still linked)
```javascript
const user2 = { ...user1 };
user2.address.city = "Mumbai";
console.log(user1.address.city); // Mumbai (affected)
```

**Deep Copy** (completely independent)
```javascript
const user2 = structuredClone(user1);
user2.address.city = "Mumbai";
console.log(user1.address.city); // Delhi (unchanged)
```

---

## Interaction Methods

```javascript
alert("Message");
prompt("Question?", "default");
confirm("Are you sure?");
```

---

## Type Conversion

```javascript
Number("100");        // 100
parseInt("100px");    // 100
+"50";                // 50 (unary operator)
```

---

## Type Coercion

JavaScript automatically converts types:

| Operation | Result | Type |
|-----------|--------|------|
| `"10" + 5` | `"105"` | String |
| `"5" - 2` | `3` | Number |
| `"5" * 2` | `10` | Number |

---

## Truthy vs Falsy Values

**Falsy:** `false`, `0`, `""`, `null`, `undefined`, `NaN`

**Truthy:** Everything else (`"0"`, `[]`, `{}`, `1`, etc.)

---

## Operators

### Comparison
- `==` (loose equality - ignores type)
- `===` (strict equality - checks type)
- `!=`, `>`, `<`, `>=`, `<=`

### Logical
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

### Assignment
```javascript
x += 5;  x -= 2;  x *= 2;  x /= 4;
```

### Ternary
```javascript
age >= 18 ? "Adult" : "Minor"
```

### Bitwise
`&`, `|`, `^`, `<<`, `>>`

### Increment/Decrement
- **Prefix** (`++i`): Increment first, use after
- **Postfix** (`i++`): Use first, increment after

---

## Nullish Coalescing (`??`)

Returns right side only if left is `null` or `undefined`:

```javascript
let name = null ?? "Guest";  // "Guest"
0 ?? 100;                     // 0 (0 is not nullish)
```

---

## Conditional Statements

```javascript
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}
```

