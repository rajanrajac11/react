import React, { useEffect, useState } from "react";

import { CounterProvider } from "./Context/CounterContext";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <CounterProvider value={{ count, setCount }}>
      <Counter />
    </CounterProvider>
  );
}

export default App;
