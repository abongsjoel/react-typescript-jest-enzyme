import React from "react";
import "./App.css";

function App() {
  const initialState = 0;
  const [counter, setCounter] = React.useState<number>(initialState);

  return (
    <div className="App">
      <h1>This is the counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="decrement-btn" onClick={() => setCounter((prev) => prev - 1)}>
        Decrement
      </button>
      <button id="increment-btn" onClick={() => setCounter((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
