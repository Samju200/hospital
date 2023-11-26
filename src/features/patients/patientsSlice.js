import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { allPatients } from "../../services/patientsService";
// const storedPatients = JSON.parse(localStorage.getItem("patients"));
const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patients: null,
  },
  reducers: {
    getPatients: (state, action) => {
      state.patients = action.payload;
      localStorage.setItem("patients", JSON.stringify(state.patients));
    },
    nullPatients: (state) => {
      state.patients = null;
    },
  },
});

export const getAllPatients = createAsyncThunk(
  "patients/getAllPatients",
  async () => {
    try {
      const getAllPatients = await allPatients();

      // Dispatch the user or token to the store
      return getAllPatients; // Adjust this based on your actual response structure
    } catch (error) {
      throw error;
    }
  }
);

export const { getPatients, nullPatients } = patientsSlice.actions;

export default patientsSlice.reducer;
