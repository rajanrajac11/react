import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Toolkit/TodoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  return (
    <div className="flex justify-around items-center p-4">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id} className="flex justify-between items-center">
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
