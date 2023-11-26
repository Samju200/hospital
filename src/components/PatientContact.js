import React, { useEffect, useState } from "react";
import Logo from "../img/logo.jpeg";
import "./patientContact.css";
import api from "../api/axiosConfig";
import { Link } from "react-router-dom";

function PatientContact() {
  const [patients, setPatients] = useState([]);

  const patientContact = async () => {
    try {
      const response = await api.get(`/api/patients`);

      if (response.data) {
        setPatients(response.data);
        console.log(response.data);
        return response.data;
      } else {
        throw new Error("patients not found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error getting patient");
    }
  };
  useEffect(() => {
    patientContact();
  });
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
            {patients.map((patient, index) => (
              <tr key={patient.id}>
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
