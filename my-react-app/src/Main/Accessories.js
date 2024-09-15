import AccessoriesBanner from "../Components/AccessoriesBanner";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useSpring, animated } from "react-spring";
import React, { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const ImazhetEAksesoriev = require.context(
  "../Images",
  false,
  /\.(png|jpe?g|svg)$/
);

const Accessories = ({ addToCart }) => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [accessoriesPerPage, setAccessoriesPerPage] = useState(24);

  // Function to update items per page based on screen width
  const updateAccessoriesPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      setAccessoriesPerPage(24); // Large screens
    } else if (screenWidth >= 768) {
      setAccessoriesPerPage(16); // Medium screens
    } else {
      setAccessoriesPerPage(8); // Small screens
    }
  };

  useEffect(() => {
    updateAccessoriesPerPage();
    window.addEventListener("resize", updateAccessoriesPerPage);

    return () => {
      window.removeEventListener("resize", updateAccessoriesPerPage);
    };
  }, []);

  const maxPageNumbers = 3;

  useEffect(() => {
    fetchAccessories();
  }, []);

  const AccDetailPage = (accessory) => {
    setDetail([{ ...accessory }]);
    setClose(true);
  };

  const handleFavoriteClick = (accessoryID) => {
    setIsFavorite(!isFavorite);
  };

  const sortedAccessories = [...accessories].sort(
    (a, b) => new Date(b.dateofAddition) - new Date(a.dateofAddition)
  );

  const totalPages = Math.ceil(sortedAccessories.length / accessoriesPerPage);

  const currentAccessories = sortedAccessories.slice(
    (currentPage - 1) * accessoriesPerPage,
    currentPage * accessoriesPerPage
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
      const response = await axios.get(
        `https://localhost:7061/api/Accessories`
      );
      console.log("Accessories fetched:", response.data);
      setAccessories(response.data);
    } catch (error) {
      console.error("Error fetching accessories:", error);
    }
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

  const handleSubmit = (accessory) => {
    addToCart(accessory);
    setSelectedAccessory(accessory);
    setShowModal(true);
  };

  const top = () => {
    window.scrollTo(0, 0);
  };

  const modalSpring = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0)" : "translateY(-50px)",
  });

  return (
    <div className="accessories">
      <div className="second-section">
        <AccessoriesBanner />
      </div>
      {close && (
        <div className="Acc-detail-container">
          <div className="Acc-detail-content">
            <button onClick={() => setClose(false)} className="Acc-close">
              <IoMdClose />
            </button>

            {detail.map((x, index) => (
              <div key={`${x.id}-${index}`} className="Acc-detail-info">
                <div className="Acc-img-box">
                  <img src={preprocessImagePath(x.image)} alt={x.name} />
                  <br></br>
                </div>
                <div className="Accessory_Details">
                  <h4>{x.name}</h4>
                  <h5>${x.price}</h5>
                  <p>Marka: {x.seller}</p>
                  <p>Pershkrimi: {x.description}</p>
                  <p>Permasat: {x.dimensions}</p>
                  <p>Data e Shtimit: {x.dateofAddition}</p>
                  <p>Ne magazine: {x.Stock > 0 ? x.Stock : "Jashte Stoku"} </p>
                  <div className="book-buttons">
                    <button
                      className="favorite-btn"
                      onClick={() => handleSubmit(x)}
                    >
                      <CiShoppingCart /> Add to Cart
                    </button>
                    <button
                      className="favorite-btn"
                      onClick={() => handleFavoriteClick(x.id)}
                    >
                      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />} Add
                      to Wish List
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="cards-Home">
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
        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
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
      {showModal && selectedAccessory && (
        <animated.div className="modal-cart" style={modalSpring}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            {selectedAccessory && (
              <>
                <p>Item added to cart</p>
                <img
                  src={preprocessImagePath(selectedAccessory.image)}
                  alt={selectedAccessory.name}
                  className="design-preview"
                />
                <p>Amount: €{selectedAccessory.price}</p>
              </>
            )}
            <div className="view-cart-container">
              <Link to="./cart" className="view-cart-button">
                View Cart
              </Link>
            </div>
            <div className="view-cart-container">
              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default Accessories;
