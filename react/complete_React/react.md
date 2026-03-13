# React Notes

## What is React?

- React is a JavaScript library for building user interfaces, especially single-page applications (SPAs) with dynamic updates.
- Created and maintained by Meta.
- Before React, manual DOM manipulation was slow and hard to manage in large apps.

## Real DOM vs Virtual DOM

- When state or props change, React creates a new Virtual DOM and compares it with the previous one using a diffing algorithm. Only changed parts of the real DOM are updated.

## What is DOM?

- DOM = Document Object Model, a tree structure of the webpage created by the browser.

```html
<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>
```

- Before React, developers used:
  - `getElementById()`
  - `querySelector()`
  - `createElement()`
  - `appendChild()`
  - `removeChild()`
  - `innerHTML`

## UI Updates in React

- DOM nodes represent elements.
- JavaScript can access/modify nodes, recalculate layout, and repaint the screen.

```text

JS change → DOM update → Layout calculation → Paint → UI updated

```

- Real DOM is slow; every change triggers browser work.

```javascript

for(let i=0; i<1000; i++){
  document.getElementById("list").innerHTML += "<li>Item</li>";
}

```

- Browser updates DOM 1000 times.

### Virtual DOM

- Virtual DOM is a lightweight JavaScript copy of the real DOM.

```javascript

{
  type: "h1",
  props: {
    children: "Hello"
  }
}

```

```text

State Change → New Virtual DOM → Compare with previous → Diff → Update changed elements in Real DOM

```

- React re-renders components and creates a new Virtual DOM when state or props change.

## Why Normal Variables Don't Update UI

- React only tracks state and props for re-rendering.
- Normal variables don't trigger UI updates.

## Core React Concepts

### Component-Based Architecture

- Components are reusable UI pieces.

```text

App
├── Header
├── Sidebar
├── ProductList
└── Footer

```

- Enables code reuse, easy maintenance, and better organization.

### JSX

- JSX lets you write HTML inside JavaScript.

```javascript

const element = <h1>Hello Gourav</h1>

```

- JSX is compiled to JavaScript.

### State

- State management in React.

### Props

- Props pass data from parent to child components.

```javascript

<Greeting name="Gourav"/>

```

### Reconciliation

- React updates the DOM efficiently by comparing Virtual DOMs.

```text

State changes → Component re-renders → New Virtual DOM → Compare → Diff → Update real DOM

```

- Only changed elements are updated.

### Hooks

- Hooks let functional components use React features.

**useState:**

```javascript

const [count, setCount] = useState(0)

```

**useEffect:**

```javascript

useEffect(() => {
  fetchData()
}, [])

```

**useRef:**

```javascript

const inputRef = useRef()

```

- Stores values without causing re-render.

### Unidirectional Data Flow

- Data flows from parent to child.

### Performance Concepts

- `useMemo`
- `useCallback`
- Lazy loading
- Code splitting

## State Management in React

- State is an object holding values that change and trigger re-renders.

### Simple State Update

```javascript

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```

### useReducer (Complex State Logic)

```javascript

import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
    </div>
  );
}

```

### Context API (Global State)

```javascript

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Gourav");

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return <h1>Hello {user}</h1>;
}

```

## Code Splitting

- Code Splitting is a technique where a large JavaScript bundle is divided into smaller chunks so the browser loads only the code that is required.
- Without code splitting:
  - `bundle.js` contains everything:
    - Home
    - About
    - Contact
    - Dashboard
    - Reports
- With code splitting:
  - `main.js`
  - `home.chunk.js`
  - `about.chunk.js`
  - `report.chunk.js`
- **Benefit:** Faster initial loading, smaller bundle size, better performance

## Lazy Loading

- Lazy Loading means loading a component only when it is needed, instead of loading everything at the start.
- Instead of loading all the components when app starts:
  - Home
  - About
  - Contact
  - Reports
  - Dashboard
- Load only: When user clicks About, then load:

## React.lazy()

- `React.lazy()` is a React function used to lazy load components using dynamic import.
- Example:
  ```javascript
  const ComponentName = React.lazy(() => import("./ComponentName"));
  ```
- Usage:
  ```javascript
  import React from "react";
  const About = React.lazy(() => import("./About"));
  ```

## Suspense

- Since lazy components load asynchronously, React needs something to display while the component downloads.
- Example:
  ```javascript
  <Suspense fallback={<Loader />}>
    <LazyComponent />
  </Suspense>
  ```

```
User opens app
↓
Home component loads
↓
User clicks About
↓
React.lazy triggers dynamic import
↓
Browser downloads about.chunk.js
↓
Suspense shows loading UI
↓
About component renders
```

## What is a bundler and need of bundler?

- Without a bundler, a React application would not run properly because browsers cannot understand JSX and modern module syntax. Bundlers compile JSX, combine multiple files into optimized bundles, reduce HTTP requests, and improve performance.
- Without Bundler: You would need to load scripts manually. This becomes unmanageable for large applications.
  ```html
  <script src="Header.js"></script>
  <script src="Sidebar.js"></script>
  <script src="Footer.js"></script>
  <script src="App.js"></script>
  ```
- React components are written using JSX.
  ```javascript
  function App() {
    return <h1>Hello World</h1>;
  }
  ```
  - But browsers only understand regular JavaScript, not JSX.
  - Bundlers use tools like Babel to perform this conversion.
- Optimization or Minification:
  - Before optimization:
    ```javascript
    function add(a, b) {
      return a + b;
    }
    ```
  - After bundling:
    ```javascript
    function add(a,b){return a+b}
    ```
- Without bundlers → larger files and slower loading.

- Without a Bundler:
  - If we do not use a bundler in a React application, every JavaScript file must be loaded separately by the browser.
  ```html
  <script src="Header.js"></script>
  <script src="Sidebar.js"></script>
  <script src="Footer.js"></script>
  <script src="Login.js"></script>
  <script src="Registration.js"></script>
  <script src="App.js"></script>
  ```

**Simple Flow**

**Without bundler:**
```
Browser
  ↓
Multiple HTTP Requests
  ↓
Header.js
Sidebar.js
Footer.js
Login.js
Registration.js
```

**With bundler:**
```
Browser
  ↓
Single optimized bundle
  ↓
bundle.js
```
