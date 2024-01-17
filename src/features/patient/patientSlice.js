import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { patientByRegistrationNumber } from "../../services/patientService";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patient: null,
    patientError: null,
  },
  reducers: {
    getPatient: (state, action) => {
      state.patient = action.payload;
    },
    nullPatient: (state) => {
      state.patient = null;
    },
    errorPatient: (state, action) => {
      state.patientError = action.payload;
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

      dispatch(getPatient(getPatientByRegistration));
      dispatch(errorPatient(""));
    } catch (error) {
      dispatch(errorPatient(`Patient not found ${error.message}`));
      throw error;
    }
  }
);

export const { getPatient, nullPatient, errorPatient } = patientSlice.actions;

export default patientSlice.reducer;
