import React from "react";
import "./App.css";

function App() {
  const initialState = 0;
  const [counter, setCounter] = React.useState<number>(initialState);

  return (
    <div className="App">
      <h1>This is the counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn">Increment</button>
    </div>
  );
}

export default App;
