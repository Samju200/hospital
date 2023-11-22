import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { patientByRegistrationNumber } from "../../services/patientService";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patient: null,
  },
  reducers: {
    getPatient: (state, action) => {
      state.patient = action.payload;
    },
  },
});

export const getPatientByRegistrationNumber = createAsyncThunk(
  "patient/getPatientByRegistrationNumber",
  async (registrationNumber, { dispatch }) => {
    try {
      const getPatientByRegistration = await patientByRegistrationNumber(
        registrationNumber
      );

      // Dispatch the user or token to the store
      dispatch(getPatient(getPatientByRegistration)); // Adjust this based on your actual response structure
    } catch (error) {
      throw error;
    }
  }
);

export const { getPatient } = patientSlice.actions;

export default patientSlice.reducer;
