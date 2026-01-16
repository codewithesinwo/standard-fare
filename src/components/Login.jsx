import React from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

      const navigate = useNavigate();

  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-header">
          <h2>Welcome Back 👋</h2>
          <p>Please login to your account</p>
        </div>

        <div className="input-group">
          <span className="input-icon">🇳🇬</span>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </div>

        <button type="submit" className="form-login-btn">
          Process
        </button>

        <p className="signup-text">
          Don’t have an account?{" "}
          <span
            onClick={() => {
              navigate("/signup");
            }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
