import React, { useState, useEffect } from "react";
import axios from "axios";
import "./landingPage.css";
import { Link } from "react-router-dom";
// import APISerive from "./APIService";
import Background from "../Assets/background-img.svg";
import Logo from "../Assets/Logo.png";
import Thinker from "../Assets/thinking.png";
import Team from "../Assets/team.png";
import BlogOne from "../Assets/blog_1.png";
// import BlogTwo from "../Assets/blog_2.png";
import ProfilePics from "../Assets/profilepics.png";
import RecieveEmail from "../Assets/subscribe.png";
import Facebook from "../Assets/Facebook.png";
import LinkedIn from "../Assets/LinkedIn.png";
import Instagram from "../Assets/Instagram.png";
import ArrowUp from "../Assets/arrowup.png";
import ArrowRight from "../Assets/arrowRight.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandingMenu from "./LandingMenu";

const LandingPage = () => {
  const maxLength = 350;
  const [data, setData] = useState([]);
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/model/spacetech/"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    // Assuming 'data.description' is the property you want to truncate
    setTruncatedText(truncateText(data.description, maxLength));
  }, [data.description, maxLength]);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div className="hero" id="hero">
        <div className="header-landing">
          <Link to="/">
            <a href="./">
              <img className="logohome" src={Logo} alt="Logo" />
            </a>
          </Link>
          <div className="navLinks">
            <Link to="/">
              <a className="home" href=".">
                Home
              </a>
            </Link>
            <a className="contact" href=".">
              Contact
            </a>
            <Link to="/signin">
              <a className="signInBtn" href="">
                Sign In
              </a>
            </Link>
            <Link to="/signup">
              <a className="getBtn" href="">
                Get started
              </a>
            </Link>
            {!showMenu ? (
              <FontAwesomeIcon
                className="barIcon"
                icon="fa-solid fa-bars"
                onClick={toggleMenu}
              />
            ) : (
              <FontAwesomeIcon
                className="barIcon"
                icon="fa-solid fa-times"
                onClick={toggleMenu}
              />
            )}

            {/* <LandingMenu /> */}
          </div>
        </div>
        {showMenu ? <LandingMenu closeMenu={closeMenu} /> : null}
        <div className="content-container">
          {/* <img className="backImg" src={Background} alt="bkg" /> */}
          <div className="content">
            <h1 className="contentHeader">Stay Up to Date</h1>
            <h2 className="contentSmallHeader">With technology</h2>
            <p className="contenBodytHeader">
              A place where you get updated about <br /> what's happening in the
              world of <br /> technology
            </p>
            <Link to="/signup">
              <a href="" className="heroBtn">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="next">
        <div className="left">
          <img className="thinker" src={Thinker} alt="thinker" />
          <div className="lefttext">
            <div className="txt">
              <h3 className="txtHeader">
                Stay In The Loop, Get the Tech Scoop!
              </h3>
              <p className="txtbody">
                Your go-to source for breaking tech news, trends, and updates
                from the ever-evolving world of technology.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="thinker" src={Team} alt="team" />
          <div className="righttext">
            <div className="txt">
              <h3 className="txtHeader">
                Stay In The Know, Share the Tech Flow!
              </h3>
              <p className="txtbody">
                Stay informed about tech news and share your insights with
                others, contributing to the tech world's knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recent">
        <div className="recentLeft">
          <h3 className="recentLeftHeader">RECENTLY ADDED</h3>
          <div className="mainLeft">
            {data.map((item) => (
              <div className="eachBlog">
                <a href=".">
                  <img src={BlogOne} />
                  <div className="text">
                    <h4 className="newsHeader">{item.title}</h4>
                    <div className="details">
                      <img src={ProfilePics} />
                      <h5 className="userName">Username |</h5>
                      <h6 className="datePosted">Date posted</h6>
                    </div>
                    <p className="newsBody">
                      {truncateText(item.description, maxLength)}
                    </p>
                  </div>
                </a>
              </div>
            ))}
            {/* <hr className='hr'/> */}
          </div>
          <a className="seemore" href=".">
            See More
          </a>
        </div>
        <div className="recentRight">
          <h3 className="recentRightHeader">TOP CATEGORIES</h3>
          <div className="topic">
            <a href=".">
              <h6 className="recentRightTopic">Python</h6>
            </a>
            <a href=".">
              <h6 className="recentRightTopic">Space Tech</h6>
            </a>
            <a href=".">
              <h6 className="recentRightTopic">AI</h6>
            </a>
            <a href=".">
              <h6 className="recentRightTopic">Crypto</h6>
            </a>
            <a className="recentRightTopic5" href=".">
              <h6 className="recentRightTopic">New Language</h6>
            </a>
          </div>
          <a className="recentRightSeeMore" href=".">
            See more topics
          </a>
          <h3 className="popular">POPULAR CONTENT</h3>
          <img className="pointArrow" src={ArrowRight} />
          <p className="eachitem">
            What is AI treats humans the way we treat animals?
          </p>
          <img className="pointArrow" src={ArrowRight} />
          <p className="eachitem">
            Diligence Africa wants to help African startups and investors make
            smarter investment decisions
          </p>
          <img className="pointArrow" src={ArrowRight} />
          <p className="eachitem">
            What is AI treats humans the way we treat animals?
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="higherFooter">
          <a href="./">
            <img className="logo1" src={Logo} alt="Logo" />
          </a>
          <div className="middle">
            <h3 className="middleSub">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="middleBody">
              To stay up-to-date with What’s happening in the TECH word, Enter
              your email to stay up yo date.
            </p>
            <form>
              <input className="emailSub" type="text" placeholder="Email" />
              <input
                className="submitSub"
                type="submit"
                placeholder="SUBSCRIBE"
              />
            </form>
          </div>
          <div className="right">
            <img className="righSubImg" src={RecieveEmail} />
          </div>
        </div>

        <div className="lowerFooter">
          <h3 className="lowerFooterHeader">SpaceTech</h3>
          <div className="about">
            <b className="aboutBold">
              <p>About</p>
            </b>
            <a className="aboutLink" href=".">
              SpaceTech
            </a>
            <a className="aboutLink" href=".">
              Contact Us
            </a>
            <a className="aboutLink" href=".">
              Staff
            </a>
            <a className="aboutLink" href=".">
              Site Map
            </a>
          </div>
          <div className="work">
            <b className="aboutBold">
              <p>Work With Us</p>
            </b>
            <a className="aboutLink" href=".">
              How to publish
            </a>
            <a className="aboutLink" href=".">
              Set up profile
            </a>
          </div>
          <div className="social">
            <b className="aboutBold">
              <p className="FollowUs">Follow Us!</p>
            </b>
            <div className="follow">
              <a href="https://facebook.com/">
                <img src={Facebook} />
              </a>
              <a href="https://instagram.com/">
                <img src={Instagram} />
              </a>
              <a href="https://linkedin.com/">
                <img src={LinkedIn} />
              </a>
            </div>
            <a className="arrowUp" href="#hero">
              <img src={ArrowUp} />
            </a>
          </div>
        </div>
        <p className="copy">&copy; 2023-SpaceTech. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
