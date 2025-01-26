import React from "react";
import { Link } from "react-router-dom";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={` ${darkMode ? "bg-dark text-white" : "bg-primary text-dark"}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <img className="logo" width="100px"  height="100px" src="KB-Dev-favicon.png" alt="logo"/>
          <Link className="navbar-brand" to="/">
            KB-DEV <br /> To-Do List</Link>          
            <button  className={`navbar-toggler ${darkMode ? "navbar-dark" : "navbar-light"}`} 
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link nav-item-hover" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-hover" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-hover" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} 
                onClick={toggleDarkMode}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
