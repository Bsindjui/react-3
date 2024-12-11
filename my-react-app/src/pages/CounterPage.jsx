import React, { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Counter Page</h1>
      <h2>{count}</h2>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterPage;
