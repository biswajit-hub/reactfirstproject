import React from "react";

import PropTypes from "prop-types";
// import {
//   Link,
//   NavLink
// } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar bg-${props.mode} ${
          props.mode === "success" ? "" : "border border-info"
        } navbar-dark navbar-expand-lg`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="App-link nav-link " href="/about">
                  About
                </a> */}
                <a className="App-link nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className={`dropdown-menu bg-${props.mode}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className={`dropdown-item App-link bg-${props.mode}`}
                      href="/"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item App-link bg-${props.mode}`}
                      href="/"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr
                      className={`dropdown-divider App-link bg-${props.mode}`}
                    />
                  </li>
                  <li>
                    <a
                      className={`dropdown-item App-link bg-${props.mode}`}
                      href="/"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <div className="form-check form-switch mx-1">
              <input
                className="form-check-input"
                onClick={props.togleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label text-white"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btnValue}
              </label>
            </div>
            <form className="d-flex">
              <input
                className={`form-control me-2 bg-${props.mode} text-info`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
};
