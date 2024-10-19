import React, { useState } from "react";
import { addTodo } from "../Slice/TodoSlice";
import { useDispatch } from "react-redux";
function AddTodo() {
  const dispatch = useDispatch();

  const [input, setInput] = useState();
  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput(" ");
  };
  return (
    <div className="flex flex-wrap justify-between items-center w-80 bg-pink-600 p-1">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={handleTodo}
        className="p-1 bg-pink-400 hover:bg-pink-500"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
