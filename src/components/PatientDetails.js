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
        <h2>Nurse Info About the Patient</h2>
        <div className="nurse">
          {patient?.nurses.map((nurse, index) => (
            <div key={index} className="report-details">
              <p>Nurse Name: {nurse.fullName}</p>
              <p>Department: {nurse.department}</p>
              <p> Nurse Report: {nurse.reports}</p>
              <p>
                {" "}
                Date:
                {nurse.day}-{nurse.month}-{nurse.year}
              </p>
            </div>
          ))}
        </div>
        <h2>Doctors Info About the Patient</h2>
        <div className="nurse">
          {patient?.doctors.map((doctor, index) => (
            <div key={index} className="report-details">
              <p>Doctor Name: {doctor.fullName}</p>
              <p>Department: {doctor.department}</p>
              <p> Doctor Report: {doctor.reports}</p>
              <p>
                {" "}
                Date:
                {doctor.day}-{doctor.month}-{doctor.year}
              </p>
            </div>
          ))}
        </div>
        <h2>Lab Test Info About the Patient</h2>
        <div className="nurse">
          {patient?.laboratories.map((lab, index) => (
            <div key={index} className="report-details">
              <p>Lab Scientist Name: {lab.fullName}</p>

              <p> Test Report: {lab.testReports}</p>
              <p>
                {" "}
                Date:
                {lab.day}-{lab.month}-{lab.year}
              </p>
            </div>
          ))}
        </div>
        <h2>Phamarcy Info About the Patient</h2>
        <div className="nurse">
          {patient?.pharmacies.map((pham, index) => (
            <div key={index} className="report-details">
              <p>Phamarcist Name: {pham.fullName}</p>

              <p> Drugs: {pham.drugs}</p>
              <p>
                {" "}
                Date:
                {pham.day}-{pham.month}-{pham.year}
              </p>
            </div>
          ))}
        </div>
        <h2>Radiology images Info About the Patient</h2>
        <div className="nurse">
          {patient?.radiology.map((rad, index) => (
            <div key={index} className="report-details">
              <p>Radiologist Name: {rad.fullName}</p>
              {rad.images && (
                <img
                  src={rad.images}
                  alt={`Radiology  for ${rad.fullName}`}
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
              <p>Radiology Reports: {rad.reports}</p>
              <p>
                {" "}
                Date:
                {rad.day}-{rad.month}-{rad.year}
              </p>
            </div>
          ))}
        </div>
        <h2>Account Info About the Patient</h2>
        <div className="nurse">
          {patient?.accounts.map((account, index) => (
            <div key={index} className="report-details">
              <p>Accountant Name: {account.fullName}</p>

              <p>
                {" "}
                Amount Paid:{" "}
                {parseFloat(account.amount).toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </p>
              <p>
                {" "}
                Date:
                {account.day}-{account.month}-{account.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
