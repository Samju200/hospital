import React from "react";
import "./records.css";
import { Link } from "react-router-dom";

function Records() {
  return (
    <div className="records">
      <div className="tab">
        <div className="record">
          {" "}
          <h1 className="records-header">Records/ Reception Menu </h1>
          <div className="record-details">
            <div className="card">
              <Link to="/hmo-patient-form">
                <div className="card-title"> HMO Patient Registration</div>
              </Link>
            </div>

            <div className="card">
              <Link to="/company-patient-form">
                <div className="card-title">Company Patient Registration</div>
              </Link>
            </div>

            <div className="card">
              <Link to="/family-patient-form">
                <div className="card-title">Family Registration</div>
              </Link>
            </div>

            <div className="card">
              <Link to="/individual-patient-form">
                <div className="card-title">Individual Registration</div>
              </Link>
            </div>

            <div className="card">
              <Link to="/patient-contacts">
                <div class="card-title">Patient Contact</div>
              </Link>
            </div>

            <div className="card">
              <div className="card-title">Book Appointment</div>
            </div>

            <div className="card">
              <div className="card-title">HMO Manager</div>
            </div>

            <div className="card">
              <div className="card-title">Smart Card Reader</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
