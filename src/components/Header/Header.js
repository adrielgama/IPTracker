import React from "react";

import "./Header.css";

import Search from "../Search/Search";
import Results from "../Results/Results";

function Header() {
  const [results, setResults] = React.useState([]);

  // console.log(results.location.city);

  return (
    <div>
      <div className="container-xl">
        <h1 className="header-title">IP Address Tracker</h1>
        <Search onChange={setResults} />
      </div>
      <div>
        {[results].map((dataResult) => (
          <Results {...dataResult} />
          
        ))}
        {/* <Results /> */}
      </div>
    </div>
  );
}

export default Header;
