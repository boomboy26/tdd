import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App' data-test='component-app'>
      <h1 data-test='counter-display'>
        This counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <h2>Counter not below zero</h2>
      <button data-test='increment-button' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-test='decrement-button' onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
