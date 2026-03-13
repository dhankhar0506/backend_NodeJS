import { useState } from "react"


function App() {
  const [counter, setCounter] = useState(0)

  function handleCounter() {
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>+</button>
    </>
  )
}

export default App
