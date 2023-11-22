import React from "react";
import "./patientDetails.css";

function PatientDetails({ patient }) {
  return (
    <div className="patient-details ">
      <div className="scroll-button">
        <h1>
          {patient?.firstname} {patient?.surname} Patient information
        </h1>
        <h3>
          Registration Number : <span>{patient?.registrationNumber}</span>
        </h3>

        <div className="basic-info">
          <p>age: {patient?.age}</p>
          <p>PhoneNumber: {patient?.phoneNumber}</p>
        </div>
        <p>Address: {patient?.address}</p>
        <div className="nurse">
          <h2>Nurse Info About the Patient</h2>
          <p> Nurse Name</p>
          <p>Nurse Report</p>
        </div>
        <div className="nurse">
          <h2>Nurse Info About the Patient</h2>
          <p> Nurse Name</p>
          <p>Nurse Report</p>
        </div>
        <div className="nurse">
          <h2>Nurse Info About the Patient</h2>
          <p> Nurse Name</p>
          <p>Nurse Report</p>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
