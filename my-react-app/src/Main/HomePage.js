import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Books from "../Images/books.jpg"; // Adjust the path to your image
import Slider from "../Components/Slider";
import "../App.css";
import BookBanner from "../Components/BookBaner";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);
const HomePage = () => {
  const [toggle, setToggle] = useState(true);
  const [book, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
    console.log(book.image);
    console.log(book);
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`https://localhost:7061/api/Book`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  const preprocessImagePath = (path) => {
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const Toggle = () => {
    setToggle(!toggle);
  };
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on when you want the buttons to stick
      setSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //Text Animation
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 500,
    config: { duration: 1000 },
  });

  //Image Animation
  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 1000,
    config: { duration: 3000 },
  });
  //favorite
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = () => {
    // history.push("/new-route");
  };

  // Frame Animation
  // const frameSpring = useSpring({
  //   from: { opacity: 0, transform: "translateX(-40px)" },
  //   to: { opacity: 1, transform: "translateX(0)" },
  //   delay: 1500,
  //   config: { duration: 1500 }
  // });

  return (
    <>
      <div className="first-section">
        <div className="left-part-s1">
          <animated.h1 style={textSpring} className="h1-s1">
            Books are a uniquely portable magic
          </animated.h1>
          <animated.h2 style={textSpring} className="h2-s1">
            Do not miss out our bestselling books
          </animated.h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using{" "}
          </p>
        </div>

        <div className="right-part-s1">
          <animated.img
            src={Books}
            alt="img1-s1"
            className="img1-s1"
            style={imageSpring}
          />
        </div>
      </div>
      <div className="second-section">
        <BookBanner></BookBanner>
      </div>
      <div className="third-section">
        <Slider></Slider>
      </div>
      <div className="fourth-section">
        <div className="language">
          <Link to="/" className="language-link">
            English
          </Link>
          <Link to="/" className="language-link">
            Albanian
          </Link>
        </div>
        <div className="cards">
          {book.map((book) => {
            const imagePath = preprocessImagePath(book.image);
            return (
              <div key={book.bookID} className="card-item">
                <div className="card-image">
                  <img
                    src={imagePath || "/images/placeholder.jpg"}
                    alt={book.title}
                    className="book-image"
                  />
                  <div className="icon-container">
                    {isFavorite ? (
                      <MdFavorite
                        className="favorite-icon"
                        onClick={() => handleFavoriteClick(book.bookID)}
                      />
                    ) : (
                      <MdFavoriteBorder
                        className="favorite-icon"
                        onClick={() => handleFavoriteClick(book.bookID)}
                      />
                    )}
                  </div>
                </div>
                <div className="dropup">
                  <div className="dropup-content">
                    <p className="card-price">Price: €{book.price}</p>
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-author">Author: {book.author}</p>
                    <button className="buy-now-btn">Add to Cart</button>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{book.title}</h3>
                  <p className="card-author">Author: {book.author}</p>
                  <p className="card-price">Price: €{book.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`buttons-container ${isSticky ? "sticky" : ""}`}>
        <Link to="" className="link-on">
          <span role="img" aria-label="Love">
            <MdFavoriteBorder />
          </span>
        </Link>
        <Link to="" className="link-on">
          <span role="img" aria-label="Add to cart">
            <CiShoppingCart />
          </span>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
