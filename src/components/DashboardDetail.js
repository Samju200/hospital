import React, { useEffect, useState } from "react";
import "./dashboardDetail.css";

function DashboardDetail() {
  const [year, setYear] = useState(2023);
  const [monthRegistration, setMonthRegistration] = useState([]);
  const [monthVisit, setMonthVisit] = useState([]);
  const [monthRender, setMonthRender] = useState([]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);
  const handleSelectChange = (event) => {
    setYear(event.target.value);
  };

  function updateRegistrationTable(year) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Simulated patient data (you can replace this with real data)
    const patientData = {
      January: Math.floor(Math.random() * 100),
      February: Math.floor(Math.random() * 100),
      March: Math.floor(Math.random() * 100),
      April: Math.floor(Math.random() * 100),
      May: Math.floor(Math.random() * 100),
      June: Math.floor(Math.random() * 100),
      July: Math.floor(Math.random() * 100),
      August: Math.floor(Math.random() * 100),
      September: Math.floor(Math.random() * 100),
      October: Math.floor(Math.random() * 100),
      November: Math.floor(Math.random() * 100),
      December: Math.floor(Math.random() * 100),
    };

    const updatedMonthRegistration = [];

    // Iterate through months and display patient counts
    for (const month of months) {
      updatedMonthRegistration[month] = patientData[month];
    }

    setMonthRegistration(updatedMonthRegistration);
  }

  function updateVisitTable(year) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Clear the existing table data

    // Simulated patient data (you can replace this with real data)
    const patientData = {
      January: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      February: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      March: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      April: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      May: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      June: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      July: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      August: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      September: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      October: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      November: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
      December: {
        HMO: Math.floor(Math.random() * 30),
        Company: Math.floor(Math.random() * 30),
        Private: Math.floor(Math.random() * 30),
      },
    };

    const updatedMonthVisit = [];

    // Iterate through months and display patient counts
    for (const month of months) {
      const { HMO, Company, Private } = patientData[month];
      updatedMonthVisit[month] = {
        HMO,
        Company,
        Private,
        Total: HMO + Company + Private,
      };
      // Calculate the total for the month
    }

    setMonthVisit(updatedMonthVisit);
  }

  function updatePatientRenderService(year) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Simulated patient data (you can replace this with real data)
    const patientData = {
      January: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      February: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      March: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      April: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      May: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      June: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      July: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      August: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      September: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      October: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      November: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
      December: {
        Lab: Math.floor(Math.random() * 30),
        Pharm: Math.floor(Math.random() * 30),
        Rad: Math.floor(Math.random() * 30),
      },
    };

    const updateMonthRenderService = {};
    // Iterate through months and display patient counts
    for (const month of months) {
      const { Lab, Pharm, Rad } = patientData[month];
      updateMonthRenderService[month] = {
        Lab,
        Pharm,
        Rad,
        Total: Lab + Pharm + Rad,
      };
    }
    setMonthRender(updateMonthRenderService);
  }

  useEffect(() => {
    updateRegistrationTable(year);
    updateVisitTable(year);
    updatePatientRenderService(year);
  }, [year]);

  return (
    <div>
      <div className="tab">
        <h1 className="dashboard-header">
          Dashbord <span>/ Overview</span>{" "}
        </h1>

        <div className="dashboard-cover">
          <div className="empty"></div>
          <div className="dashboard-content">
            <div className="dashboard-content-details">
              <h1 className="dashboard-content-header">Registration</h1>
              <label>Select Year</label>
              <br />
              <select onChange={handleSelectChange} value={year}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Patient Count</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(monthRegistration).map((month) => (
                    <tr key={month}>
                      <td> {month}</td>
                      <td>{monthRegistration[month]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="dashboard-content-details visit1">
              <h1 className="dashboard-content-header visit">Visit</h1>
              <label>Select Year</label>
              <br />
              <select onChange={handleSelectChange} value={year}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>HMO</th>
                    <th>Company</th>
                    <th>Private</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(monthVisit).map(([month, data]) => (
                    <tr key={month}>
                      <td> {month}</td>
                      <td>{data.HMO}</td>
                      <td>{data.Company}</td>
                      <td>{data.Private}</td>
                      <td>{data.Total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="dashboard-content-details service1">
              <h1 className="dashboard-content-header service">
                Service Render
              </h1>
              <label>Select Year</label>
              <br />
              <select onChange={handleSelectChange} value={year}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Lab</th>
                    <th>Pham</th>
                    <th>Rad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(monthRender).map(([month, data]) => (
                    <tr key={month}>
                      <td> {month}</td>
                      <td>{data.Lab}</td>
                      <td>{data.Pharm}</td>
                      <td>{data.Rad}</td>
                      <td>{data.Total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDetail;
