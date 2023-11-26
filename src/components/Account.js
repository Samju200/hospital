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

function Account() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const patient = useSelector((state) => state.patient.patient);
  const [search, setSearch] = useState("");
  const [message, setmessage] = useState();
  const [error, setError] = useState();
  const [patientErr, setPatientErr] = useState();
  const [showPatientDetail, setShowPatientDetail] = useState(false);

  const [formData, setFormData] = useState({
    fullName: `${user?.fullName}`,
    phoneNumber: `${user?.phoneNumber}`,
    amount: "",
    registrationNumber: ``,
  });

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    dispatch(getPatientByRegistrationNumber(search));
    setmessage("");
    setError("");
    if (!patient) {
      setPatientErr("Patient Not Found");
    }
  };
  useEffect(() => {
    if (patient) {
      setShowPatientDetail(true);
    }
  }, [patient]);

  const closeModal = () => {
    setShowPatientDetail(false);
    setPatientErr("");
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
        "/api/account/create",

        formData
      );
      if (response.data) {
        console.log(response.data);
        setmessage(
          `Amount to be paid for Registration Number: ${patient.registrationNumber} registered successfully!`
        );
        dispatch(nullPatient());
        setFormData({
          amount: "",
          fullName: `${user?.fullName}`,
          phoneNumber: `${user?.phoneNumber}`,
        });
        setSearch("");
        return response.data;
      }
    } catch (error) {
      console.error("Error registering patient:", error);
      setError(`An error occurred while registering the patient.${error}`);
    }
  };

  return (
    <div className="section">
      <div className="search">
        <form onSubmit={handleSearchSubmit}>
          <p className="error">{patientErr}</p>
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
      <h1> Account Report</h1>
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
            Amounts <span>*</span>
          </label>
          <textarea
            name="amount"
            rows="6"
            required
            placeholder=" Enter Your Report"
            value={formData.amount}
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

export default Account;
