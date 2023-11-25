
import React, { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import DropdownMenu from "./DropdownMenu";
import LinksdropDown from "./LinksdropDown";
import SearchdropDown from "./SearchdropDown";
import NewsHeader from "../NewsHeader/NewsHeader";
import "./NewsPage.css";
import Logo from "../Assets/Images/Logo.svg";
import Notification from "../Assets/Images/notification-line.svg";
import Profile from "../Assets/Images/Sarah-profile.svg";
import DropDown from "../Assets/Images/drop-down-line.svg";
import ProfileNews from "../Assets/Images/Sarah-for-news.svg";
import ProfileFollow from "../Assets/Images/Sarah-follow.svg";
import ProfileTopics from "../Assets/Images/sarah-hot-topics.svg";
import News1 from "../Assets/Images/News1.png";
import VerifyBadge from "../Assets/Images/verified.svg";
import SearchIcon from "../Assets/Images/search.svg";
// Images import end

export default function NewsPage() {
  // Search drop down for mobile start
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const toggleSearch = () => setSearchIsOpen(!searchIsOpen);
  // Search drop down for mobile end

  // Link drop down for mobile start
  const [linkIsOpen, setLinkIsOpen] = useState(false);
  const toggleLink = () => setLinkIsOpen(!linkIsOpen);
  // Link drop down for mobile end

  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Click event fired outside dropdown");
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside the dropdown; close it
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const maxLength = 300;
  const [data, setData] = useState([]);
  const [truncatedText, setTruncatedText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/model/spacetech/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  useEffect(() => {
    // Assuming 'data.description' is the property you want to truncate
    setTruncatedText(truncateText(data.description, maxLength));
  }, [data.description, maxLength]);





  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
    <main>
      <NewsHeader />
      <div className="con">
        {/* <header className="header">
        <img className="logo" src={Logo} alt="Logo" />

        <div className="header-right">
          <div className="header-search">
            <img
              className="search-icon-desktop"
              src={SearchIcon}
              alt="search"
            />
            <input className="search" type="search" placeholder="Search" />
          </div>

          <div className="not-div-1">
            <img
              onClick={toggleSearch}
              className="search-icon-mobile"
              src={SearchIcon}
              alt="search"
            />
            {searchIsOpen && <SearchdropDown />}
            <div className="not-div">
              <p className="not">0</p>
            </div>
            <img
              className="notification"
              src={Notification}
              alt="notification"
            />
          </div>

          <img
            onClick={toggleMenu}
            className="profile"
            src={Profile}
            alt="Profile"
          />
          <img
            onClick={toggleMenu}
            className="drop-down"
            src={DropDown}
            alt="drop down"
          />
          {showMenu && <DropdownMenu />}
        </div>
      </header> */}
        <div className="header-links">
          <a
            style={{ color: "#3498DB" }}
            href="/news"
            className="header-links-mobile"
          >
            For you
          </a>
          <a href="/events" className="header-links-mobile">
            Following
          </a>
          <a href="/projects" className="header-links-mobile">
            Africa
          </a>
          <a href="/contact" className="header-links-mobile">
            Artificial intelligence
          </a>
          <img
            onClick={toggleLink}
            className="drop-down-mobile"
            src={DropDown}
            alt="drop down"
          />
          {linkIsOpen && <LinksdropDown />}
          <a href="/contact" className="header-links-desktop">
            Software
          </a>
          <a href="/contact" className="header-links-desktop">
            Robotics
          </a>
          <a href="/contact" className="header-links-desktop">
            Space Tech
          </a>
          <a href="/contact" className="header-links-desktop">
            Programming
          </a>
          <a href="/contact" className="header-links-desktop">
            Virtual reality
          </a>
          <a href="/contact" className="header-links-desktop">
            Python
          </a>
        </div>

        <main className="main">
          <div className="main-left">
            <p className="for-you">For you</p>
            
            {/* News 2 start */}

            {data.map((item) => (
            <div className="news-1">
              <div className="news-1-img">
                <img className="news-pic" src={News1} alt="News Pic" />
              </div>
              <div className="news-1-text">
                <div className="news-1-text-top">
                  <a href="">
                    <img
                      className="profile-news"
                      src={ProfileNews}
                      alt="Profile"
                    />
                  </a>
                  <p className="sarah">Sarah | September 11</p>
                  <p className="follow">following</p>
                </div>
                <a href="">
                  <h3 className="news-header">
                  {item.title}
                  </h3>
                </a>
                <p className="news-text">
                {truncateText(item.description, maxLength)}
                </p>
                <div className="news-1-text-top-mobile">
                  <a href="">
                    <img
                      className="profile-news"
                      src={ProfileNews}
                      alt="Profile"
                    />
                  </a>
                  <p className="sarah">Sarah | September 11</p>
                </div>
                <div className="news-1-text-bottom">
                  <p>5 min read</p>
                </div>
              </div>
            </div>
            ))}
            {/* News 2 End */}
            
          </div>

          <div className="main-right">
            <div className="who-to-follow-div">
              <p>Who to follow</p>
              <div className="person-1">
                <img
                  className="profile-follow"
                  src={ProfileFollow}
                  alt="Profile"
                />
                <div className="person-1-text-div">
                  <div className="name-div">
                    <a href="">
                      <p className="person-1-name">Chinaza Sunday</p>
                    </a>
                    <img className="badge" src={VerifyBadge} alt="Badge" />
                  </div>
                  <p className="person-1-info">
                    Frontend developer, fashion designer, Technical...
                  </p>
                </div>
                <p className="person-1-follow">Follow</p>
              </div>
              {/* Person 2 start */}
              <div className="person-1">
                <img
                  className="profile-follow"
                  src={ProfileFollow}
                  alt="Profile"
                />
                <div className="person-1-text-div">
                  <div className="name-div">
                    <a href="">
                      <p className="person-1-name">Chinaza Sunday</p>
                    </a>
                    <img className="badge" src={VerifyBadge} alt="Badge" />
                  </div>
                  <p className="person-1-info">
                    Frontend developer, fashion designer, Technical...
                  </p>
                </div>
                <p className="person-1-follow">Follow</p>
              </div>
              {/* Person 2 end */}
              {/* Person 3 start */}
              <div className="person-1">
                <img
                  className="profile-follow"
                  src={ProfileFollow}
                  alt="Profile"
                />
                <div className="person-1-text-div">
                  <div className="name-div">
                    <a href="">
                      <p className="person-1-name">Chinaza Sunday</p>
                    </a>
                    <img className="badge" src={VerifyBadge} alt="Badge" />
                  </div>
                  <p className="person-1-info">
                    Frontend developer, fashion designer, Technical...
                  </p>
                </div>
                <p className="person-1-follow">Follow</p>
              </div>
              {/* Person 3 end */}
              {/* Person 4 start */}
              <div className="person-1">
                <img
                  className="profile-follow"
                  src={ProfileFollow}
                  alt="Profile"
                />
                <div className="person-1-text-div">
                  <div className="name-div">
                    <a href="">
                      <p className="person-1-name">Chinaza Sunday</p>
                    </a>
                    <img className="badge" src={VerifyBadge} alt="Badge" />
                  </div>
                  <p className="person-1-info">
                    Frontend developer, fashion designer, Technical...
                  </p>
                </div>
                <p className="person-1-follow">Follow</p>
              </div>
              {/* Person 3 end */}

              <a href="" className="see-more-suggestions">
                See more suggestions
              </a>
            </div>
            <div className="hot-topics-div">
              <p className="hot">Hot Topics!</p>

              <div className="hot-topics">
                <div className="hot-topics-profile">
                  <a href="" className="hot-topics-profile-link">
                    <img
                      className="hot-topics-profile"
                      src={ProfileTopics}
                      alt="Profile"
                    />

                    <p className="hot-topics-name">Sarah</p>
                  </a>
                </div>
                <a href="">
                  <p className="hot-topics-text">
                    Market intelligence firm Sensor Tower conducts layoffs,
                    several execs out
                  </p>
                </a>
              </div>

              <a href="" className="see-more-suggestions">
                See more
              </a>
            </div>

            <div className="info-div">
              <a className="info-div-link" href="#">
                Team
              </a>
              <a className="info-div-link" href="#">
                About Us
              </a>
              <a className="info-div-link" href="#">
                Help
              </a>
            </div>
          </div>
        </main>
      </div>
    </main>
    </>
  );
}
