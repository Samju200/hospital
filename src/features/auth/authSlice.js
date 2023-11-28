import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authService";
import { register } from "../../services/userService";
const storedUser = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(""));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { dispatch }) => {
    try {
      const user = await login(username, password);

      // Dispatch the user or token to the store
      dispatch(setUser(user)); // Adjust this based on your actual response structure
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
      throw error;
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username, password, fullName, phoneNumber, role }, { dispatch }) => {
    try {
      const registerUser = await register(
        username,
        fullName,
        password,
        phoneNumber,
        role
      );

      dispatch(setUser(registerUser));
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
      throw error;
    }
  }
);
export const { setUser, logout, setError } = authSlice.actions;

export default authSlice.reducer;
