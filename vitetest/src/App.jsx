import React from "react";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="flex flex-wrap bg-gray-400 justify-center items-center w-full h-screen">
      <div>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
