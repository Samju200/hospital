import React, { useEffect, useState } from "react";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice";
import Logo from "../img/logo1.jpeg";
function User() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser({ username, fullName, password, phoneNumber, role }));
  };
  return (
    <div className="user">
      <form onSubmit={handleFormSubmit}>
        <h1>
          SAMJU HOSPITAL MEDSOFT <span>v1.0</span>
        </h1>
        <img src={Logo} alt="logo" />
        <h2 className="account-header">USER REGISTRATION</h2>
        <div className="form-input">
          <input
            type="text"
            name="username"
            placeholder=" Enter User Name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="fullname"
            placeholder=" Enter User Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-input">
          <input
            type="password"
            name="password"
            placeholder=" Enter User Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            name="phonenumber"
            placeholder=" Enter User Phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-input">
          <select
            name="role"
            className="role"
            placeholder=" Enter User role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Please Select</option>
            <option value="receptionist">Receptionist</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="laboratory">Laboratory</option>
            <option value="radiology">Radiology</option>
            <option value="phamarcy">Phamarcy</option>
            <option value="accountant">Accountant</option>
          </select>
        </div>

        <input type="submit" value="Register" />
      </form>

      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </div>
  );
}

export default User;
