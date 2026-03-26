import { useRef } from "react";

function App() {
  const count = useRef(0);

  function handleClick() {
    count.current++;
    console.log(count.current);
  }

  return (
    <>
      <h1>{count.current}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App