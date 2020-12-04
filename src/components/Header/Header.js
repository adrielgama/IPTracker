import React from "react";

import "./Header.css";

import Search from "../Search/Search";
import Results from "../Results/Results";
import Map from "../Map/Map";

function Header() {
  const [results, setResults] = React.useState({
    ip: "",
    location: {
      city: "",
      country: "",
      postalCode: "",
      timezone: "",
      lat: "-15.7979",
      lng: "-47.8843",
    },
    isp: "",
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
          />
        ))}
      </div>
      <div>
        {[results].map((mapResults) => (
          <Map lat={mapResults.location.lat} lng={mapResults.location.lng} />
        ))}
      </div>
    </div>
  );
}

export default Header;
