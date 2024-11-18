import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Toolkit/TodoSlice";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
}

export default TodoForm;
