import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { allPatients } from "../../services/patientsService";
const storedPatients = JSON.parse(localStorage.getItem("patients"));
const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patients: storedPatients || null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPatients.fulfilled, (state, action) => {
        state.patients = action.payload;
        state.loading = false;
        localStorage.setItem("patients", JSON.stringify(action.payload));
      })
      .addCase(getAllPatients.rejected, (state, action) => {
        // Handle rejection if needed
      });
  },
});

export const getAllPatients = createAsyncThunk(
  "patients/getPatients",
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
// export const { getPatients } = patientsSlice.actions;/

export default patientsSlice.reducer;
