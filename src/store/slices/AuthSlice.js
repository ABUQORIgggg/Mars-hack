import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: localStorage.getItem('isAuth') || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("isAuth", true)
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem("isAuth")
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
