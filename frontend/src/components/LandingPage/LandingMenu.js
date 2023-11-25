import React, { useState } from "react";
import menu from "./LandingMenu.module.css";
import { Link } from "react-router-dom";

export default function LandingMenu() {
  return (
    <div className={menu.dropdownMenu}>
      <div className={menu.dropdownbox1}>
        <div className={menu.item2}>
          <a className={menu.dropdownlink1} href="#">
            About Us
          </a>
        </div>
        <div className={menu.item2}>
          <a className={menu.dropdownlink1} href="#">
            Contact Us
          </a>
        </div>
        <div className={menu.item2}>
          <Link to="/signin">
            <a className={menu.dropdownlink} href="">
              Sign In
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
