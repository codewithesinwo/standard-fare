import React from 'react'
import { SiIfood } from "react-icons/si";
import "../style/Header.css";


export default function Header() {
  return (
    <div className='navber-container'>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">
            <SiIfood />
          </span>
          <span className="logo-text">Standard Fare</span>
        </div>
        <div className="nav-actions">
          <span className="live-status">● 120+ Restaurants Open</span>
          <button className="login-btn">Login</button>
        </div>
      </nav>
    </div>
  );
}
