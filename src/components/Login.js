import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };
  return (
    <div>
      <div className="login">
        <h1>
          SAMJU HOSPITAL MEDSOFT <span>v1.0</span>
        </h1>
        <img src={Logo} alt="logo" />
        <h2>Login</h2>

        <form method="post" onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              name="username"
              required
              placeholder=" Enter User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              required
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="error"> {error}</p>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </form>
        <Link to="/forgetpassword">
          <button className="forget-btn">FORGET PASSWORD</button>
        </Link>
        <Link to="/register">
          <button className="forget-btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
