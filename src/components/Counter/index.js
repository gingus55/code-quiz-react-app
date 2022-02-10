import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseClick = () => {
    setCount(count + 1);
  };

  const decreaseClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Click count: {count}</p>
      <button type="button" onClick={increaseClick}>
        Increment
      </button>
      <button type="button" onClick={decreaseClick}>
        Decrement
      </button>
    </div>
  );
};
