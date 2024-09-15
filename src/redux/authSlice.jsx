import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userData: null,
    token: null
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userData = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
