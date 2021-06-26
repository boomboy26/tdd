import { useState } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div data-test='app-counter'>
      <h1>
        Counter is <span data-test='text-counter'>{counter}</span>
      </h1>
      <button
        data-test='button-counter'
        onClick={() => setCounter(counter + 1)}
      >
        increase counter
      </button>
    </div>
  );
}

export default Counter;
