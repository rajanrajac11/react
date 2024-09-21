import { CounterContext, CounterProvider } from "../Context/CounterContext";
import React, { useContext } from "react";

function Counter() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <h1>Count = {count}</h1>
    </>
  );
}

export default Counter;
