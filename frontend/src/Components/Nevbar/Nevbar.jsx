import React, { useState } from "react";
import "./Nevbar.css"



function Nevbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Udemy</div>
       
      </div>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
       <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for anything..."
        />
       </div>
       <a href="#" className="nav-link">Plans & Pricing</a>
        <a href="#" className="nav-link">Udemy  Business</a>
        <a href="#" className="nav-link">Teach on Udemy </a>
        <a href="#" className="nav-link">My Learning</a>
        <a href="#" className="nav-link">🛒</a>
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}




export default Nevbar;
