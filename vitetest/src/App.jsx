import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-wrap bg-gray-400 justify-center items-center w-full h-screen">
      <div>
        <TodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
