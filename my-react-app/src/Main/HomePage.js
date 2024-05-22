import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import NavbarHome from "./NavbarHome";
import img1s1 from "../Images/img1s1.jpg"; // Adjust the path to your image


import "../App.css";

const HomePage = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  //Text Animation
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 500,
    config: { duration: 1000 }
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
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
          
        </div>
      
        <div className="right-part-s1">
        
        <animated.img src={img1s1} alt="img1-s1" className="img1-s1" style={imageSpring} />
        </div>
      </div>

      <div className="second-section">
        <h1>Readtopia</h1>
        <h3>Where does it come from?</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
        <button className="custom-button" >
        Read more
      </button>
      </div>
    </>
  );
};

export default HomePage;