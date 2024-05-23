import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../App.css";

const Account = () => {
    const [action, setAction] = useState('');

    const signUpLink = () => {
        setAction('active');
    }

    const logInLink = () => {
        setAction('');
    }

    return (
        <div className="container-logIn">
            <div className={`wrapper ${action}`}>
                <div className="form-box logIn">
                    <form action="">
                        <h1>Log In</h1>
                        <div className="inputs-logIn">
                            <input type="text" placeholder='Username' required />
                            <FaUser className="icon" />
                        </div>
                        <div className="inputs-logIn">
                            <input type="password" placeholder='Password' required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Log In</button>
                        <div className="signUp-link">
                            <p>Do you have an account? <a href="#" onClick={signUpLink}>Sign Up</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <form action="">
                        <h1>Sign Up</h1>
                        <div className="inputs-logIn-row">
                            <input type="text" placeholder='Name'required />
                            <input type="text" placeholder='Surname' required />
                        </div>
                        {/* <div className="inputs-logIn">
                            
                        </div> */}
                        <div className="inputs-logIn">
                            <input type="text" placeholder='Phone Number' required />
                        </div>
                        <div className="inputs-logIn">
                            <input type="email" placeholder='E-mail' required />
                        </div>
                        <div className="inputs-logIn">
                            <input type="password" placeholder='Password' required />
                        </div>
                        <div className="inputs-logIn">
                            <input type="password" placeholder='Confirm Password' required />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />I agree to the terms & conditions</label>
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className="signUp-link">
                            <p>Already have an account? <a href="#" onClick={logInLink}>Log In</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;
