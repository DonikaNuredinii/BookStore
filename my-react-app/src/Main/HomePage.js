import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import NavbarHome from "./NavbarHome";
import books from "../Images/books.jpg"; // Adjust the path to your image
import Slider from "../Components/Slider";
import "../App.css";
import { IoSnow } from "react-icons/io5";
import BookBanner from "../Components/BookBaner";
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [toggle, setToggle] = useState(true);

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
      <NavbarHome Toggle={Toggle} />
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
            src={books}
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
      <div className="fourth-section"></div>

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
