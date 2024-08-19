import { MdFavoriteBorder, MdFavorite, MdOutlineCancel } from "react-icons/md";
import AccessoriesBanner from "../Components/AccessoriesBanner";
import { GrPrevious, GrNext } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import axios from "axios";
import "../App.css";

const ImazhetEAksesoriev = require.context("../Images/ImazhetAksesorie", false, /\.(png|jpe?g|svg)$/);

const Accessories = ({ addToCart }) => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);  
  const [currentPage, setCurrentPage] = useState(1);
  const AccessoriesPerPage = 18;
  const maxPageNumbers = 4;

  useEffect(() => {
    fetchAccessories();
  }, []);

  const AccDetailPage = (accessory) => {
    setDetail([{ ...accessory }]);
    setClose(true);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const totalPages = Math.ceil(accessories.length / AccessoriesPerPage);

  const currentAccessories = accessories.slice(
    (currentPage - 1) * AccessoriesPerPage,
    currentPage * AccessoriesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const scrollToFirstQuarter = () => {
    const firstQuarterY = window.innerHeight / 3;
    window.scrollTo(0, firstQuarterY);
  };
  
  useEffect(() => {
    scrollToFirstQuarter();
  }, [currentPage]);


  const fetchAccessories = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Accessories`);
      console.log("Accessories fetched:", response.data);
      setAccessories(response.data);
    } catch (error) {
      console.error("Error fetching accessories:", error);
    }
  };
  
  // const ImazhetEAksesoriev = require.context("../Images/ImazhetAksesorie", false, /\.(png|jpe?g|svg)$/);

  const handleSubmit = (accessory) => {
    addToCart(accessory);
  };

  const preprocessImagePath = (path) => {
    if (!path) {
      console.error("Path is null or undefined.");
      return null;
    }

    console.log(`Processing path: ${path}`);
    const image = path.split("/").pop();

    try {
      return ImazhetEAksesoriev(`./${image}`);
    } catch (err) {
      console.error(`Image not found: ${image}`);
      return null;
    }
  };

  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="accessories">
      <div className="second-section">
        <AccessoriesBanner />
      </div>
      {close && (
        <div className="Acc-detail-container">
          <div className="Acc-detail-content">
            <button onClick={() => setClose(false)} className="Acc-close">
              <MdOutlineCancel />
            </button>
            {detail.map((x, index) => (
              <div key={`${x.id}-${index}`} className="Acc-detail-info">
                <div className="Acc-img-box">
                  <img src={preprocessImagePath(x.image)} alt={x.name} />
                  <br></br>
                  <button className="cont-button-link " onClick={() => handleSubmit(x)}>
                    <CiShoppingCart />
                  </button>
                  <button className="cont-button-link" > 
                    <MdFavorite />
                  </button >
                </div>
                <div className="Accessory_Details">
                  <h4>{x.name}</h4>
                  <h5>${x.price}</h5>
                  <p>Marka: {x.seller}</p>
                  <p>Pershkrimi: {x.description}</p>
                  <p>Permasat: {x.dimensions}</p>
                  <p>Data e Shtimit: {x.dateofAddition}</p>
                  <p>Ne magazine: {x.Stock > 0 ? x.Stock : "Jashte Stoku"} <a href="/cart" class="button-link">
                    View Cart
                  </a></p>
                  {/* FIX OUT OF STOCK ????????????????????????????????????
                  ???????????????????????????????????????????????????
                  ????????????????????????????????????????????????/ */}

                  {/* FIX DASHBOARD ADDITTION ????????????????????????????????????
                  ???????????????????????????????????????????????????
                  ????????????????????????????????????????????????/ */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="Acc-cards">
        {currentAccessories.map((accessory, index) => {
          const imagePath = preprocessImagePath(accessory.image);
          return (
            <div className="card-item" key={`${accessory.id}-${index}`}>
              <div className="acc-card-image">
                <div className="acc-image">
                  <img
                    src={imagePath || "/Images/placeholder.jpg"}
                    alt={accessory.name}
                    className="accessories-image"
                  />
                </div>
                <div className="icon-container">
                  {isFavorite ? (
                    <MdFavorite
                      className="favorite-icon"
                      onClick={() => handleFavoriteClick(accessory.id)}
                    />
                  ) : (
                    <MdFavoriteBorder
                      className="favorite-icon"
                      onClick={() => handleFavoriteClick(accessory.id)}
                    />
                  )}
                </div>
                <div className="dropup">
                  <div className="a-dropup-content">
                    <p className="card-price">Price: €{accessory.price}</p>
                    <h3 className="card-title">{accessory.name}</h3>
                    <button
                      onClick={() => {
                        AccDetailPage(accessory);
                        scrollToFirstQuarter();
                      }}
                      className="Acc-btn"
                    >
                      View
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-author">{accessory.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <GrPrevious />
          </button>
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <GrNext />
            </button>
        </div>
      <p className="Acc-btn-p">
        Jump Up
        <button onClick={top} className="Acc-Topbtn">
          <BsArrowUpShort />
        </button>
      </p>
    </div>
  );
};

export default Accessories;
