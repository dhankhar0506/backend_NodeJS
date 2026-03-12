# What is React?

- React is a JavaScript library used to build user interfaces (UI), especially for single-page applications (SPAs) where the page updates dynamically without reloading
- It was created and maintained by Meta
- Before React, websites were built with manual DOM manipulation, which was slow and hard to manage in large applications

## What is DOM?

- DOM = Document Object Model
- It is the tree structure of the webpage created by the browser

```html
<body>
    <h1>Hello</h1>
    <button>Click</button>
</body>
```

- Before React, developers manually updated the DOM using:
  - `getElementById()`
  - `querySelector()`
  - `createElement()`
  - `appendChild()`
  - `removeChild()`
  - `innerHTML`

## How UI Updates in React and What is DOM and Virtual DOM?

- DOM stands for Document Object Model
- Each element becomes a DOM node (object)
- JavaScript can:
  - Access and modify these nodes
  - Recalculate layout
  - Repaint the screen

```
JS change → DOM update → Layout calculation → Paint → UI updated
```

- This process is expensive
- **Problem With Real DOM:**
  - The Real DOM is slow because every change triggers browser work

```javascript
for(let i=0; i<1000; i++){
  document.getElementById("list").innerHTML += "<li>Item</li>";
}
```

- The browser updates the DOM 1000 times

### Virtual DOM

- Virtual DOM is a lightweight JavaScript copy of the real DOM
- This is just a JavaScript object, so it is very fast
- Virtual DOM representation:

```javascript
{
  type: "h1",
  props: {
    children: "Hello"
  }
}
```

```
State Change → New Virtual DOM created → React compares with previous Virtual DOM 
→ Find differences (Diffing) → Update only changed elements in Real DOM
```

- In React, when state or props change, React runs the component again and creates a new Virtual DOM

## Why Normal Variables Don't Update UI?

- The reason normal JavaScript variables don't update the UI is because React does not track them and they do not trigger a re-render
- React only re-renders when state or props change
  - When state changes → React re-renders → UI updates
  - When props change → React re-renders → UI updates

## Why React Doesn't Detect This Change?

- Because React only listens to:
  - State updates
  - Props updates
- Normal variables are just JavaScript values inside the function
- React doesn't track them

## Core and Most Important Concepts of React

### Component-Based Architecture

- A component is a reusable piece of UI

```
App
├── Header
├── Sidebar
├── ProductList
└── Footer
```

- Reusable code
- Easy maintenance
- Better organization

### JSX (JavaScript + HTML)

- React uses JSX, which lets us write HTML inside JavaScript

```javascript
const element = <h1>Hello Gourav</h1>
```

- JSX is converted into JavaScript

### State

State management in React

### Props (Data Passing)

- Props allow components to receive data from parent components

```javascript
<Greeting name="Gourav"/>
```

### Reconciliation (React Diffing Algorithm)

- Reconciliation is the process React uses to update the DOM efficiently

```
State changes → Component re-renders → New Virtual DOM created 
→ Compare with old Virtual DOM → Find differences → Update real DOM
```

- React never updates the whole page
- It updates only the changed elements

### Hooks

- Hooks allow functional components to use React features

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
- Store values without causing re-render

### Unidirectional Data Flow

- React follows one-way data flow
- Parent → Child

### React Performance Concepts

- useMemo
- useCallback
- Lazy loading
- Code splitting
