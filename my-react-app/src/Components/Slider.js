import React, { useState, useEffect } from "react";
import slide1 from "../Images/Slide1.png";
import slide2 from "../Images/Slide2.png";
import slide3 from "../Images/Slide3.png";
import "../App.css";

const Slider = () => {
  const slideImages = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

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
