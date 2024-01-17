import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authService";
import { register } from "../../services/userService";
const storedUser = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = true;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(""));
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { dispatch }) => {
    try {
      dispatch(setUser({ loading: true }));
      const user = await login(username, password);

      dispatch(setUser(user));
      dispatch(setUser({ user, loading: false }));
    } catch (error) {
      console.log(error);
      dispatch(setUser({ loading: false }));
      dispatch(setError(error.message));
      throw error;
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { dispatch }) => {
    try {
      const registerUser = await register(formData);

      dispatch(setUser(registerUser));
    } catch (error) {
      console.log(error);
      dispatch(setError(`${error.message} check your username and password`));
      throw error;
    }
  }
);
export const { setUser, logout, setError } = authSlice.actions;

export default authSlice.reducer;
