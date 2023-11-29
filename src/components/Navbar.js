import React from "react";
import Logo from "../img/logo1.jpeg";
import { IoIosNotifications } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
        <h1>Samju</h1>
      </div>

      <div className="header-side">
        <img
          src={`data:image/png;base64,${user?.profilePicture?.data}`}
          alt="profile"
        ></img>

        <IoIosNotifications className="header-icon" />
        <p>{user?.username}</p>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
