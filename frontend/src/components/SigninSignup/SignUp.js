import React, { useState } from "react";
import "./SignUpStyle.css";
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

function SignUp() {
  // const [isSignInMode, setIsSignInMode] = useState(true);

  // const actionText = isSignInMode ? "Sign In" : "Sign Up";
  // const welcomeText = isSignInMode ? "Welcome Back!" : "Join SpaceTech";
  // const continueText = isSignInMode
  //   ? "Sign in to continue"
  //   : "Register to continue";

  return (
    <div className="bg-con-signup">
      <img className="bg-1-signup" src={BG1} alt="" />
      <img className="bg-2-signup" src={BG2} alt="" />
      <img className="bg-3-signup" src={BG3} alt="" />
      <div className="bg-con1-signup">
        <div className="main-con-signup">
          <div className="welcome-container-signup">
            <h2 className="big-header-signup">Join SpaceTech</h2>
            <p className="small-header-signup">Register to continue</p>
            <div className="logo-container-signup">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="signin-form-signup">
            <form className="form-signup">
              <input
                className="input-signup"
                type="text"
                placeholder="Username"
              />
              <input
                className="input-signup"
                type="email"
                placeholder="Email"
              />
              <input
                className="input-signup"
                type="password"
                placeholder="Password"
              />
              <input
                className="submit-button-signup"
                type="submit"
                value="SIGN UP"
              />
            </form>
            <div className="OR">
              <img className="line-desktop-signup" src={OR} alt="Logo" />
              <img className="line-mobile-signup" src={LineMobile} alt="Logo" />
            </div>
            <div className="social-icons-signup">
              <a href="https://www.google.com">
                <img src={google} alt="google" />
              </a>
              <a className="linkedin-signup" href="https://www.linkedin.com">
                <img src={Llnkedin} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com">
                <img src={Facebook} alt="facebook" />
              </a>
            </div>
            <p className="signup-link-signup">
              Already have an account?
              <Link to="/signin">
                <a className="sign-up-signup" href="#">
                  Sign In
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
