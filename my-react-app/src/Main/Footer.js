import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { IoIosSearch } from "react-icons/io";

const Footer = () => {
    return(     
        <div className="footer-section">
            <div className="first-partCU">
                <div className="left-partCU">
                    <p className="p1">Say hi to the team</p>
                    <h1>Contact Us</h1>
                    <form action="">
                    <p>Feel free to contact us and we will get back to you as soon as we can!</p>
                    <div className="inputs-contact">
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="inputs-contact">
                        <input type="text" placeholder='E-mail' />
                    </div>
                    <div className="inputs-contact">
                        <input type="text" placeholder='Tell us all about it' />
                    </div>
                    
                    <button type="submit" className="button-CU">Send</button>
                    </form>
                </div>
                <div className="right-partCU">
                    <div className="list">
                        <ul>
                            <li className="h">opening hours</li>
                            <li>Monday - Friday</li>
                            <li>9pm - 7pm</li>
                            <li>Weekend</li>
                            <li>Closed</li>
                        </ul>
                        <ul>
                            <li className="h">address</li>
                            <li>Sheshi Nena Tereza nr.106</li>
                        </ul>
                        <ul>
                            <li className="h">contact details</li>
                            <li>readopia@gmail.com</li>
                            <li>+383 44 444 888</li>
                        </ul>


                    </div>
                    
                    <div className="last-partF">
                        
                        <p><a href="#" target="_blank">Instagram</a></p>
                        <p><a href="#"target="_blank">Threads</a></p>
                        <p><a href="#" target="_blank">Facebook</a></p>
                        <p><a href="#" target="_blank">Dribbble</a></p>

                    </div>
                  


                </div>
                
            </div>
        </div>
    );
};

export default Footer;

