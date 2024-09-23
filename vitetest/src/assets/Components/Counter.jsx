import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(() => count + 1);
  };
  const decreaseCount = () => {
    setCount(() => count - 1);
    setCount(() => count - 1);
    setCount(() => count - 1);
    setCount(() => count - 1);
  };
  return (
    <>
      <button onClick={increaseCount} className="bg-green-500 p-3 rounded-xl">
        Increase {count}
      </button>
      <button onClick={decreaseCount} className="bg-red-500 p-3 rounded-xl">
        Decrease {count}
      </button>
      <h1>Count = {count}</h1>
    </>
  );
}

export default Counter;
