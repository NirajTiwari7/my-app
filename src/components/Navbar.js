import React from "react";

// IMPORTING PORTYPES [
// --- // agar mai chahta ho ki title ka value sirf string hi raha agar mai number dal ta ho toh error da [ TOH MUJHE NAVBAR.JS MAI PROTYPES KO INMPORT KARNA HOGA AUR CODE LIKHNA HOGA] ]

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// ++++*------ [ BEFORE USING PROPS YOU HAVE TO WRITE PROPS INSIDE THE BRAKET OF NAVABAR LIKE THIS  export default function Navbar(props) ]
export default function Navbar(props) {
  return (
    <>
      {/*  ==  HTML KA ANDAR MAI CURLY BRACKET LAGA KA JAVASCRIPT LIKH SAKTA HO  [** APP.JS KA CODE DEKHO ]*/}

      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active navlink-Warning "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.abouttext}
                </Link>
              </li>
            </ul>
            {/*
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> 
            */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
/*
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext: PropTypes.string  
};
*/
// if the title is not given it will throw an error because i have used required
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};

// if there is no title and abouttext default will be shown  [ reqired will also not throw an error because there is a default ]
Navbar.defaultProps = {
  title: "Set title here",
  abouttext: "About text here",
};
