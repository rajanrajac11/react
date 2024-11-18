import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Toolkit/TodoSlice";

const store = configureStore({
  reducer: todoReducer,
});
export default store;
