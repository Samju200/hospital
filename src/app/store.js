import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import patientReducer from "../features/patient/patientSlice";
import patientsReducer, {
  getAllPatients,
} from "../features/patients/patientsSlice";
import paginationReducer from "../features/pagination/paginationSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
    patients: patientsReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* other middleware */),
});

// Manually dispatch the async thunk to fetch data when your app initializes, for example, in the main App component.
store.dispatch(getAllPatients());
