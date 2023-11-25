import React, { useState } from "react";
import "./DropdownMenu.css";

import AboutUs from "../Assets/Images/about-us-icon.svg";
import Help from "../Assets/Images/help-icon.svg";
import ProfileIcon from "../Assets/Images/profile-male.svg";
import Publish from "../Assets/Images/publish-icon.svg";
import Settings from "../Assets/Images/settings-icon.svg";
import Write from "../Assets/Images/write-icon.svg";

export default function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-box-1">
        <div className="item2">
          <img className="item-img" src={Write} alt="Write Icon" />
          <a className="drop-down-link" href="#">
            Write
          </a>
        </div>
        <div className="item2">
          <img className="item-img" src={ProfileIcon} alt="Profile Icon" />
          <a className="drop-down-link" href="#">
            Profile
          </a>
        </div>
        <div className="item2">
          <img className="item-img" src={Publish} alt="Published Icon" />
          <a className="drop-down-link" href="#">
            Published
          </a>
        </div>
      </div>
      {/*  */}
      <div className="dropdown-box-2">
        <div className="item2">
          <img className="item-img" src={Settings} alt="Settings Icon" />
          <a className="drop-down-link" href="#">
            Settings
          </a>
        </div>
        <div className="item2">
          <img className="item-img" src={Help} alt="Help Icon" />
          <a className="drop-down-link" href="#">
            Help
          </a>
        </div>
        <div className="item2">
          <img className="item-img" src={AboutUs} alt="AboutUs Icon" />
          <a className="drop-down-link" href="#">
            About Us
          </a>
        </div>
        <div className="sign-out-div">
          <a className="sign-out-l" href="">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}
