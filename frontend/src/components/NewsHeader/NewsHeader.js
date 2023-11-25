import React, { useState } from "react";
import header from "./NewsHeaderStyle.module.css";

// Components import start
import DropdownMenu from "../NewsPage/DropdownMenu";
import SearchdropDown from "../NewsPage/SearchdropDown";
// Components import end

import Logo from "../Assets/Images/Logo.svg";
import Notification from "../Assets/Images/notification-line.svg";
import Profile from "../Assets/Images/Sarah-profile.svg";
import SearchIcon from "../Assets/Images/search.svg";
import DropDown from "../Assets/Images/drop-down-line.svg";

function NewsHeader() {
  // Search drop down for mobile start
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const toggleSearch = () => setSearchIsOpen(!searchIsOpen);
  // Search drop down for mobile end

  // Menu drop down for mobile start
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  // Menu drop down for mobile end
  return (
    <div>
      <header className={header.header}>
        <img className={header.logo} src={Logo} alt="Logo" />

        <div className={header.headerSearch}>
          <img
            className={header.searchIconDesktop}
            src={SearchIcon}
            alt="search"
          />
          <input className={header.search} type="search" placeholder="Search" />
        </div>
        <div className={header.headerRight}>
          <div className={header.notDiv1}>
            <img
              onClick={toggleSearch}
              className={header.searchIconMobile}
              src={SearchIcon}
              alt="search"
            />
            {searchIsOpen && <SearchdropDown />}
            <div className={header.notDiv}>
              <p className={header.not}>0</p>
            </div>
            <img
              className={header.notification}
              src={Notification}
              alt="notification"
            />
          </div>

          <img
            onClick={toggleMenu}
            className={header.profile}
            src={Profile}
            alt="Profile"
          />
          <img
            onClick={toggleMenu}
            className={header.dropDown}
            src={DropDown}
            alt="drop down"
          />
          {showMenu && <DropdownMenu />}
        </div>
      </header>
    </div>
  );
}

export default NewsHeader;
