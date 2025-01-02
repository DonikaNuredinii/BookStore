import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { Link } from "react-router-dom";

import { Toggle } from "../App";

function Navbar({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-sm px-3 fs-4 me-3">
      <i
        className="navbar-brand bi bi-justify-left fs-4 d-block d-sm-none"
        onClick={Toggle}
      ></i>
      <button
        className="navbar-toggler d-block d-sm-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify"></i>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown ">
            <Link
              className="nav-link dropdown-toggle"
              to="/a"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="false"
              aria-expanded="true"
            >
              Readtopia
            </Link>
            <div
              className="dropdown-menu sidebarColor-bg me-2"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item " to="/profile">
                Profile
              </Link>
              <Link className="dropdown-item" to="/Settings">
                Settings
              </Link>
              <Link className="dropdown-item" to="/LogOut">
                Log out
              </Link>
              <hr className="dropdown-divider" />
              <Link className="dropdown-item" to="/SEH">
                Something else here
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
