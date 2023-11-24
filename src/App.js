import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Hmo from "./components/patientForm/Hmo";
import Records from "./components/Records";
import Family from "./components/patientForm/Family";
import Company from "./components/patientForm/Company";
import Individual from "./components/patientForm/Individual";
import PatientContact from "./components/PatientContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />

          <Route path="/register" element={<User />} />
          <Route path="/records" element={<Records />} />
          <Route path="/hmo-patient-form" element={<Hmo />} />
          <Route path="/family-patient-form" element={<Family />} />
          <Route path="/company-patient-form" element={<Company />} />
          <Route path="/individual-patient-form" element={<Individual />} />
          <Route path="/patient-contacts" element={<PatientContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
