import React from 'react'
import { SiIfood } from "react-icons/si";
import "../style/Header.css";
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="navber-container">
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => {
            navigate('/');
          }}
        >
          <span className="logo-icon">
            <SiIfood />
          </span>
          <span className="logo-text">Standard Fare</span>
        </div>

        <div className="nav-actions">
          <span className="live-status">● 120+ Restaurants Open</span>
          <button
            type="button"
            className="login-btn"
            onClick={() => {
              navigate('login');
            }}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
