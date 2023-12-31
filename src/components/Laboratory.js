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

function Laboratory() {
  const [message, setmessage] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { patient, patientError } = useSelector((state) => state.patient);
  const [search, setSearch] = useState("");
  const [error, setError] = useState();
  const [showPatientDetail, setShowPatientDetail] = useState(false);

  const [formData, setFormData] = useState({
    fullName: `${user?.fullName}`,
    phoneNumber: `${user?.phoneNumber}`,
    testReports: "",
    registrationNumber: ``,
  });

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      registrationNumber: patient?.registrationNumber || "", // Set it dynamically
    }));
  }, [patient]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/lab/create",

        formData
      );
      if (response.data) {
        setmessage(
          `Lab Test for Registration Number: ${patient.registrationNumber} registered successfully!`
        );
        dispatch(nullPatient());

        setSearch("");
        setFormData({
          testReports: "",
          fullName: `${user?.fullName}`,
          phoneNumber: `${user?.phoneNumber}`,
        });
        return response.data;
      }
    } catch (error) {
      console.error("Error registering patient:", error);
      setError(`An error occurred while registering the patient.${error}`);
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
      <h1>Laboratory Test Report</h1>
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
            name="fullName"
            placeholder=" Enter Your Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>
            PhoneNumber <span>*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder=" Enter the patient Phonenumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>
            Test Reports <span>*</span>
          </label>
          <textarea
            name="testReports"
            rows="6"
            required
            placeholder=" Enter Your Report"
            value={formData.testReports}
            onChange={handleChange}
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

export default Laboratory;
