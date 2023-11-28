import React, { useEffect } from "react";
import Logo from "../img/logo.jpeg";
import "./patientContact.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../features/patients/patientsSlice";

function PatientContact() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients?.patients);

  useEffect(() => {
    // Dispatch the action to fetch all patients when the component mounts
    dispatch(getAllPatients());
  }, [dispatch]);

  return (
    <div className="patient-contact">
      <h1>
        SAMJU HOSPITAL MEDSOFT <span>v1.0</span>
      </h1>
      <img src={Logo} alt="logo" />
      <h2>Patient Contact</h2>
      <div className="contact">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Registration Number</th>
              <th>Full Name</th>
              <th>PhoneNumber</th>
            </tr>
          </thead>
          <tbody>
            {patients?.map((patient, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="regN">{patient.registrationNumber}</td>
                <td className="fullname">
                  {patient.firstname} {patient.surname}
                </td>
                <td>{patient.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="btn-close">
        <Link to="/">Close</Link>
      </button>
    </div>
  );
}

export default PatientContact;
