import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Slice/TodoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-pink-300 flex flex-wrap justify-between p-1 items-center w-80 rounded-md mt-1"
          >
            <span>{todo.text} </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="hover:bg-red-500 bg-red-600 p-2"
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default Todos;
