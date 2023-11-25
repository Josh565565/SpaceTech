import React from "react";
import "./LinksdropDownStyle.css";

export default function LinksDropDown() {
  return (
    <div className="link-dropdown-menu">
      <div className="links-div">
        <a href="/contact" className="links">
          Software
        </a>
        <a href="/contact" className="links">
          Robotics
        </a>
        <a href="/contact" className="links">
          Space Tech
        </a>
        <a href="/contact" className="links">
          Programming
        </a>
        <a href="/contact" className="links">
          Virtual reality
        </a>
        <a href="/contact" className="links">
          Python
        </a>
      </div>
    </div>
  );
}
