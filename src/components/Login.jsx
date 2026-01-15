import React from "react";
import "../style/Login.css";

export default function Login() {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-header">
          <h2>Welcome Back 👋</h2>
          <p>Please login to your account</p>
        </div>

        <div className="input-group">
          <span className="input-icon">🐱‍👤</span>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="input-group">
          <span className="input-icon">🐱‍👤</span>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="form-login-btn">
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </form>
    </div>
  );
}
