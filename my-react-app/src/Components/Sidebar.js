import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { MdEvent } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar p-0.5" style={{ height: "100vh" }}>
      <div className="me-2">
        <i className="bi bi-bootstarap-fill me-2 fs-4"></i>
        <span className="brand-name fs-4">Readopia</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group listgroup-flush">
        <Link to="" className="list-group-item py-3">
          <i id="dashboardname" className="bi bi-speedometer2 fs-5 me-3"></i>
          <span className="fs-5">Dashboard</span>
        </Link>

        <Link to="/" className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </Link>
        <Link to="./User" className="list-group-item py-2">
          <i class="bi bi-person-badge fs-5 me-3"></i>
          <span>Users</span>
        </Link>
        <Link to="./Books" className="list-group-item py-2 ">
          <i className="bi bi-book fs-5 me-3"></i>
          <span>Books</span>
        </Link>
        <Link to="./Ebooks" className="list-group-item py-2 ">
          <i class="bi bi-tablet fs-5 me-3"></i>
          <span>Ebooks</span>
        </Link>
        <Link to="./Loans" className="list-group-item py-2 ">
          <i class="bi bi-journal-bookmark-fill fs-5 me-3"></i>
          <span>Ebook Loans</span>
        </Link>
        <Link to="./Categories" className="list-group-item py-2 ">
          <i class="bi bi-grid-1x2 fs-5 me-3"></i>
          <span>Categories</span>
        </Link>
        <Link to="./Author" className="list-group-item py-2">
          <i class="bi bi-vector-pen fs-5 me-3"></i>
          <span>Authors</span>
        </Link>

        <Link to="./Accessories" className="list-group-item py-2 ">
          <i class="bi bi-bookmark-heart fs-5 me-3"></i>
          <span>Acessories</span>
        </Link>
        <Link to="./Orders" className="list-group-item py-2 ">
          <i class="bi bi-cart2 fs-5 me-3"></i>
          <span>Orders</span>
        </Link>
        <Link to="./payment" className="list-group-item py-2 ">
          <i class="bi bi-credit-card-2-back fs-5 me-3"></i>
          <span>Payments</span>
        </Link>

        <Link to="./ContactUs" className="list-group-item py-2 ">
          <i class="bi bi-inbox fs-5 me-3"></i>
          <span>Contact</span>
        </Link>
        <Link to="./GiftCards" className="list-group-item py-2 ">
          <i class="bi bi-postcard fs-5 me-3"></i>
          <span>GiftCard</span>
        </Link>
        <Link to="./Event" className="list-group-item py-2">
          <MdEvent className="fs-5 me-3" />
          <span>Events</span>
        </Link>
        <Link to="./Quotes" className="list-group-item py-2 ">
          <i class="bi bi-quote fs-5 me-3"></i>
          <span>Quotes</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
