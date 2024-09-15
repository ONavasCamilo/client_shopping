import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userData: {},
    token: null
  },
  reducers: {
    setNewUser(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload.newUser;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userData = {};
      state.token = null;
    },
  },
});

export const { setNewUser, logout } = AuthSlice.actions;
