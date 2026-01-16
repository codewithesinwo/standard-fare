import React from "react";
import "../style/SignUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate();

  return (
    <div className="signup-form-container">
      <form className="signup-form">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <p>Create your account</p>
        </div>

        <div className="input-group">
          <input type="text" name="name" placeholder="First Name" required />
        </div>

        <div className="input-group">
          <input type="text" name="name" placeholder="Last Name" required />
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

        <div className="terms-of-use">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <p>
            By creating an account you agree to the{" "}
            <strong>Terms of Use</strong> and our{" "}
            <strong>Privacy policy</strong>
          </p>
        </div>

        <button type="submit" className="form-signup-btn">
          Process
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}
