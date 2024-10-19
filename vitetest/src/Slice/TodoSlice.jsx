import { createSlice, nanoid } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  todos: [
    {
      text: "react project",
      id: 1,
    },
  ],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
