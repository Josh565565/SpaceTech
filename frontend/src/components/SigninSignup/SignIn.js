import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import OR from "../Assets/Group 1.png";
import LineMobile from "../Assets/Images/line-mobile.png";
import Facebook from "../Assets/logos_facebook.svg";
import Llnkedin from "../Assets/skill-icons_linkedin.svg";
import google from "../Assets/icons_google.svg";
// import BG from "../Assets/Images/sign-in-bg.svg";
import BG1 from "../Assets/Images/bg-1.svg";
import BG2 from "../Assets/Images/bg-2.svg";
import BG3 from "../Assets/Images/bg-3.svg";
// import bgMobile from "../Assets/Images/bg-mobile.svg";

function SignIn() {
  // const [isSignInMode, setIsSignInMode] = useState(true);

  // const actionText = isSignInMode ? "Sign In" : "Sign Up";
  // const welcomeText = isSignInMode ? "Welcome Back!" : "Join SpaceTech";
  // const continueText = isSignInMode
  //   ? "Sign in to continue"
  //   : "Register to continue";

  return (
    <div className="bg-con">
      <img className="bg-1" src={BG1} alt="" />
      <img className="bg-2" src={BG2} alt="" />
      <img className="bg-3" src={BG3} alt="" />
      <div className="bg-con1">
        <div className="main-con">
          <div className="welcome-container">
            <h2 className="big-header">Welcome Back!</h2>
            <p className="small-header">Sign in to continue</p>
            <div className="logo-container">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="signin-form">
            <form className="form">
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <input className="submit-button" type="submit" value="SIGN IN" />
            </form>
            <div className="OR">
              <img className="line-desktop" src={OR} alt="Logo" />
              <img className="line-mobile" src={LineMobile} alt="Logo" />
            </div>
            <div className="social-icons">
              <a href="https://www.google.com">
                <img src={google} alt="google" />
              </a>
              <a className="linkedin" href="https://www.linkedin.com">
                <img src={Llnkedin} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com">
                <img src={Facebook} alt="facebook" />
              </a>
            </div>
            <p className="signup-link">
              Don't have an account?
              <Link to="/signup">
                <a className="sign-up" href="#">
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
