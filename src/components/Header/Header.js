import React from "react";

import "./Header.css";

import Search from "../Search/Search";
import Results from "../Results/Results";

function Header() {
  const [results, setResults] = React.useState({
    ip: '',
    location: {
      city: '',
      country: '',
      postalCode: '',
      timezone: '',
      lat: '',
      lng: '',
    },
    isp: '',
  });

  console.log(results);

  return (
    <div>
      <div className="container-xl">
        <h1 className="header-title">IP Address Tracker</h1>
        <Search onChange={setResults} />
      </div>
      <div>
        {[results].map((dataResult) => (
          <Results 
          // {...dataResult} 
            ip={dataResult.ip}
            isp={dataResult.isp}
            city={dataResult.location.city}
            country={dataResult.location.country}
            postalCode={dataResult.location.postalCode}
            timezone={dataResult.location.timezone}

            // lat={dataResult.location.lat}
            // lng={dataResult.location.lng}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
