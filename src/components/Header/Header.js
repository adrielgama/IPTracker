import React from "react";

import "./Header.css";

import Search from "../Search/Search";
import Results from "../Results/Results";

function Header() {

  return (
    <div>
      <div className="container-xl">
        <h1 className="header-title">IP Address Tracker</h1>
        <Search />
      </div>
      <Results />
    </div>
  );
}

export default Header;
