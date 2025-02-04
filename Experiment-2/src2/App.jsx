import React, { useState } from "react";
import "./App.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-box">
        <h1>🔥 Counter App 🔥</h1>
        <p>Count is: <span className="count">{count}</span></p>
        <div className="buttons">
          <button className="btn increment" onClick={() => setCount(count + 1)}>➕ Increment</button>
          <button className="btn decrement" onClick={() => setCount(count - 1)}>➖ Decrement</button>
          <button className="btn reset" onClick={() => setCount(0)}>🔄 Reset</button>
        </div>
      </div>
    </div>
  );
}
