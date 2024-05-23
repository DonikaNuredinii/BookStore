import React, { useState, useEffect } from "react";
import slideImages from "../Images/images.js";
import "../App.css"; // Import the CSS file

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide-container">
      <div
        className="each-slide"
        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
      ></div>
    </div>
  );
};

export default Slider;
