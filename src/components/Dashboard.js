import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { sideTabs } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllPatients } from "../features/patients/patientsSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(sideTabs[0]);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPatients);
  });
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-details">
        <div className="sidebar">
          <ul>
            {sideTabs.map((tab) => {
              return (
                <li key={tab.id}>
                  <button
                    onClick={() => handleTabClick(tab)}
                    className={`sidetab ${
                      activeTab.label === tab.label ? "active" : ""
                    }`}
                  >
                    {tab.icon}
                    <p>{tab.label}</p>
                  </button>
                  <p className="greater">{tab.greater}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right_side">{activeTab.content}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
