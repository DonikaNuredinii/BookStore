import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar p-0.5" style={{ height: "100vh" }}>
      <div className="me-2">
        <i className="bi bi-bootstarap-fill me-2 fs-4"></i>
        <span className="brand-name fs-4">Readopia</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group listgroup-flush">
        <a className="list-group-item py-3">
          <i id="dashboardname" className="bi bi-speedometer2 fs-5 me-3"></i>
          <span className="fs-5">Dashboard</span>
        </a>
        <Link to="" className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </Link>
        <Link to="./Staff" className="list-group-item py-2">
          <i class="bi bi-person-badge fs-5 me-3"></i>
          <span>Stafi</span>
        </Link>
        <Link to="./Books" className="list-group-item py-2 ">
          <i className="bi bi-book fs-5 me-3"></i>
          <span>Libra</span>
        </Link>
        <Link to="./Categories" className="list-group-item py-2 ">
          <i class="bi bi-grid-1x2 fs-5 me-3"></i>
          <span>Kategorite</span>
        </Link>
        <Link to="./Authors" className="list-group-item py-2">
          <i class="bi bi-vector-pen fs-5 me-3"></i>
          <span>Autoret</span>
        </Link>
        <Link to="./Accessories" className="list-group-item py-2 ">
          <i class="bi bi-bookmark-star-fill fs-5 me-3"></i>
          <span>Aksesoret</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
