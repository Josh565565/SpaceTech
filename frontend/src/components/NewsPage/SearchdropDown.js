import React, { useState } from "react";
import "./SearchdropDownStyle.css";

export default function SearchdropDown() {
  return (
    <div className="search-dropdown-menu">
      <form>
        <input className="custom-input" type="search" placeholder="Search.." />
        <input className="custom-submit" type="submit" value="Search" />
      </form>
    </div>
  );
}
