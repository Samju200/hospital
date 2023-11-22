import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Logo from "../img/logo1.jpeg";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { sideTabs } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { MdMenu } from "react-icons/md";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(sideTabs[0]);
  const [showSide, setShowSide] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleShowClick = () => {
    setShowSide(!showSide);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-logo">
          <div className="logoH">
            <img src={Logo} alt="logo" />
            <h1>Samju</h1>
          </div>

          <div>
            <MdMenu className="menu" onClick={handleShowClick} />
          </div>
        </div>

        <div className="header-side">
          <FaUserCircle className="header-icon" />
          <IoIosNotifications className="header-icon" />
          <p>{user?.username}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
      <div className="dashboard-details">
        <div className={`sidebar ${showSide ? "visible" : ""}`}>
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
    </div>
  );
}

export default Dashboard;
