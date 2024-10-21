import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./AuthSlice";

const store = configureStore({
  reducer: authSliceReducer,
});

export default store;
