import React from 'react';
import { useStore } from 'store';

const App: React.FC = () => {
  const { count, increase, decrease } = useStore();

  return (
    <div className="app">
      <h1>Counter: {count}</h1>
      {/* <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button> */}
    </div>
  );
};

export default App;