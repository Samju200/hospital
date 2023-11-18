import React from "react";
import "./records.css";

function Records() {
  return (
    <div>
      <div id="records" class="tab">
        <div class="record">
          {" "}
          <h1 class="records-header">Records/ Reception Menu </h1>
          <div class="record-details">
            <div class="card">
              <a href="patientRegistration.php">
                <div class="card-title"> HMO Patient Registration</div>
              </a>
            </div>

            <div class="card">
              <a href="patientRegistration.php">
                {" "}
                <div class="card-title">Company Patient Registration</div>
              </a>
            </div>

            <div class="card">
              <a href="patientRegistration.php">
                <div class="card-title">Family Registration</div>
              </a>
            </div>

            <div class="card">
              <a href="patientRegistration.php">
                <div class="card-title">Individual Registration</div>
              </a>
            </div>

            <div class="card">
              <div class="card-title">Patient Contact</div>
            </div>

            <div class="card">
              <div class="card-title">Book Appointment</div>
            </div>

            <div class="card">
              <div class="card-title">HMO Manager</div>
            </div>

            <div class="card">
              <div class="card-title">Smart Card Reader</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
