import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import "./consultation.css";
import PatientDetails from "./PatientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  getPatientByRegistrationNumber,
  nullPatient,
} from "../features/patient/patientSlice";

function Radiology() {
  const [message, setmessage] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { patient, patientError } = useSelector((state) => state.patient);
  const [search, setSearch] = useState("");
  const [error, setError] = useState();
  const [showPatientDetail, setShowPatientDetail] = useState(false);
  const [fullName, setFullName] = useState(`${user?.fullName}`);
  const [phoneNumber, setPhoneNumber] = useState(`${user?.phoneNumber}`);
  const [file, setFile] = useState(null);
  const [reports, setReports] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    dispatch(getPatientByRegistrationNumber(search));
    setmessage("");
    setError("");
  };
  useEffect(() => {
    if (patient) {
      setShowPatientDetail(true);
    }
  }, [patient]);
  const closeModal = () => {
    setShowPatientDetail(false);
    setError("");
  };
  useEffect(() => {
    // Assuming patient is an object with registrationNumber property
    setRegistrationNumber(`${patient?.registrationNumber}` || "");
    //
  }, [patient]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("file", file);
      formData.append("reports", reports);
      formData.append("registrationNumber", registrationNumber);
      const response = await api.post("/api/radiology/create", formData);
      console.log(fullName, phoneNumber, file, reports, registrationNumber);
      if (response.data) {
        setmessage(
          `Radiology Images for Registration Number ${patient.registrationNumber} registered successfully!`
        );
        setError("");
        dispatch(nullPatient());
        setReports("");
        setFile("");
        setSearch("");

        return response.data;
      }
    } catch (error) {
      console.error("Error registering patient:", error);
      console.log(error.response);
      setError(
        `An error occurred while registering the patient.${error.message}`
      );
      console.log({
        fullName,
        phoneNumber,
        file,
        reports,
        registrationNumber,
      });
      setmessage("");
    }
  };

  return (
    <div className="section">
      <div className="search">
        <form onSubmit={handleSearchSubmit}>
          <p className="error">{patientError}</p>
          <p>Search for patient</p>
          <input
            type="text"
            placeholder="Patient Registration Number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <h1>Raidology Images Report</h1>
      {message ? (
        <p className="message">{message}</p>
      ) : (
        <p className="error">{error}</p>
      )}
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label>
            FullName <span>*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>
            PhoneNumber <span>*</span>
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>
            Radiology Images <span>*</span>
          </label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <div className="input-group">
          <label>
            Reports <span>*</span>
          </label>
          <textarea
            name="reports"
            rows="6"
            required
            placeholder=" Enter Your Report"
            value={reports}
            onChange={(e) => setReports(e.target.value)}
          ></textarea>
        </div>

        <div className="btn-button">
          <button type="submit" className="btn">
            Submit Report
          </button>
          <button type="button" className="btn-close">
            <Link to="/">Close</Link>
          </button>
        </div>
      </form>

      {showPatientDetail && (
        <div className="overlay">
          <div className="modal">
            <button onClick={closeModal}>Close</button>
            <PatientDetails patient={patient} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Radiology;
