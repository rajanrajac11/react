import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../store/authSlice";

const store = configureStore({
  reducer: authSliceReducer,
});

export default store;
