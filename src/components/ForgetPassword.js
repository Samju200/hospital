import React from "react";
import "./forgetPassword.css";

function ForgetPassword() {
  return (
    <div>
      {" "}
      <form method="post" className="forget-password-form">
        <h2>Forgot Password</h2>
        <label for="email">Email</label>
        <input type="email" name="email" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
