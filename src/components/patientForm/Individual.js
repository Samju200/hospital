import React, { useState } from "react";
import "./patient.css";
import Logo from "../../img/logo.jpeg";
import { Link } from "react-router-dom";
import api from "../../api/axiosConfig";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Individual() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const regNumbers = Math.floor(Math.random() * 100000);
  const [formData, setFormData] = useState({
    registrationType: "Individual",
    registrationNumber: `${regNumbers}`,
    patientStatus: "",
    title: "",
    surname: "",
    firstname: "",
    phoneNumber: "",
    dateOfBirth: "",
    age: "",
    address: "",
    nextOfKinName: "",
    nextOfKinAddress: "",
    nextOfKinPhoneNumber: "",
  });

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
        "/api/patient/create",

        formData
      );
      if (response.data) {
        setResponse(response.data);
        setFormData({
          registrationType: "Individual",
          hmoType: "",
          registrationNumber: `${regNumbers}`,
          patientStatus: "",
          title: "",
          surname: "",
          firstname: "",
          phoneNumber: "",
          dateOfBirth: "",
          age: "",
          address: "",
          nextOfKinName: "",
          nextOfKinAddress: "",
          nextOfKinPhoneNumber: "",
        });
        setError("");

        return response.data;
      }
    } catch (error) {
      setError("Error registering patient:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="patient">
        <h1>
          SAMJU HOSPITAL MEDSOFT <span>v1.0</span>
        </h1>
        <img src={Logo} alt="logo" />
        <h2>Individual Patient Registration</h2>
        <div className="form-container">
          <p> {response}</p>
          <p className="error">{error}</p>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label>Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                placeholder=" Enter the patient Registration Number"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Patient Status</label>
              <select
                name="patientStatus"
                value={formData.patientStatus}
                onChange={handleChange}
              >
                <option value="">Please Select patient Status</option>
                <option value="emergercy">Emergercy</option>
                <option value="non_emergercy">Not Emergercy</option>
              </select>
            </div>
            <div className="input-group">
              <label>Title</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              >
                <option value="">Please Select Patient title</option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
                <option value="master">Master</option>
                <option value="doctor">Dr</option>
              </select>
            </div>

            <div className="input-group">
              <label>
                Surname <span>*</span>
              </label>
              <input
                type="text"
                name="surname"
                placeholder=" Enter the patient Surname"
                required
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>
                Firstname <span>*</span>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder=" Enter the patient Firstname"
                required
                value={formData.firstname}
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
                Date Of Birth <span>*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                placeholder=" Enter the patient Date Of Birth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>
                Age <span>*</span>
              </label>
              <input
                type="text"
                name="age"
                placeholder=" Enter the patient Age"
                required
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>
                Address <span>*</span>
              </label>
              <textarea
                name="address"
                rows="3"
                required
                placeholder=" Enter the patient Address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="input-group">
              <label>
                Next Of Kin FullName <span>*</span>
              </label>
              <input
                type="text"
                name="nextOfKinName"
                placeholder=" Enter the patient Next Of Kin FullName"
                value={formData.nextOfKinName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>
                Next Of Kin Address <span>*</span>
              </label>
              <textarea
                name="nextOfKinAddress"
                rows="3"
                placeholder=" Enter the patient Next of Kin Address"
                required
                value={formData.nextOfKinAddress}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="input-group">
              <label>
                Next Of Kin of Number <span>*</span>
              </label>
              <input
                type="text"
                name="nextOfKinPhoneNumber"
                placeholder=" Enter the patient Next Of Kin PhoneNumber"
                required
                value={formData.nextOfKinPhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="btn-button">
              <button type="submit" className="btn">
                Register Patient
              </button>
              <button type="button" className="btn-close">
                <Link to="/">Close</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Individual;
