import React, { useEffect } from "react";
import Logo from "../img/logo.jpeg";
import "./patientContact.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPatients,
  getPatientByFirstName,
  getPatientByReg,
} from "../features/patients/patientsSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pagination from "./Pagination";

function PatientContact() {
  const dispatch = useDispatch();
  const { filteredPatients } = useSelector((state) => state.patients);
  const { currentPage, postsPerPage } = useSelector(
    (state) => state.pagination
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPatients?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  useEffect(() => {
    // Dispatch the action to fetch all patients when the component mounts
    dispatch(getAllPatients());
  }, [dispatch]);

  const handleFilterChangeReg = (event) => {
    const searchTerm = event.target.value;
    dispatch(getPatientByReg(searchTerm));
  };
  const handleFilterChangeFirstName = (event) => {
    const searchTerm = event.target.value;
    dispatch(getPatientByFirstName(searchTerm));
  };
  return (
    <div>
      <Navbar />

      <div className="patient-contact">
        <h1>
          SAMJU HOSPITAL MEDSOFT <span>v1.0</span>
        </h1>
        <img src={Logo} alt="logo" />
        <h2>Patient Contact</h2>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search by Reg Number"
            onChange={handleFilterChangeReg}
          />
          <input
            type="text"
            placeholder="Search by firstName"
            onChange={handleFilterChangeFirstName}
          />
        </div>
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
              {currentPosts?.map((patient, index) => (
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
        <Pagination />
      </div>

      <Footer />
    </div>
  );
}

export default PatientContact;
