import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./authSlice";

const store = configureStore({
  reducer: AuthSlice.reducer,
});

export default store;
