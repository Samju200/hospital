import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import "./consultation.css";
import PatientDetails from "./PatientDetails";
import { useDispatch, useSelector } from "react-redux";
import { getPatientByRegistrationNumber } from "../features/patient/patientSlice";

function Radiology() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const patient = useSelector((state) => state.patient.patient);
  const [search, setSearch] = useState("");

  const [showPatientDetail, setShowPatientDetail] = useState(false);

  const [formData, setFormData] = useState({
    fullName: `${user.fullName}`,
    phoneNumber: `${user.phoneNumber}`,
    images: "",
    reports: "",
    registrationNumber: ``,
  });

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
    dispatch(getPatientByRegistrationNumber(search));
    setShowPatientDetail(true);
  };

  const closeModal = () => {
    setShowPatientDetail(false);
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
        "/api/doctor/create",

        formData
      );
      if (response.status === 200) {
        console.log(response.data);
        console.log(formData);
        console.log(patient);

        alert("Radiology registered successfully!");
        navigate("/");

        return response.data;
      }
    } catch (error) {
      console.error("Error registering patient:", error);
      alert("An error occurred while registering the patient.");
    }
  };

  return (
    <div className="section">
      <div className="search">
        <form onSubmit={handleSearchSubmit}>
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
            Radiology Images <span>*</span>
          </label>
          <input
            type="file"
            name="images"
            placeholder=" Enter the patient Phonenumber"
            required
            value={formData.images}
            onChange={handleChange}
          />
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
            value={formData.reports}
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

export default Radiology;
