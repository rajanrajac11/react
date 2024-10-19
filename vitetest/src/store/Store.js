import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Slice/TodoSlice";

export const store = configureStore({
  reducer: TodoReducer,
});
