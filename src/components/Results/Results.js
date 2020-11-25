import React from "react";

import "./Results.css";
import Search from "../Search/Search";
// import { useState } from "react";

const Results = (props) => {
  const { ip, location, isp } = props.items;

  return (
    <div>
      <div className="grid-container">
        {/* IP ADDRESS SECTION */}
        <div>
          <h2 className="title-span"> IP Address </h2>
          <p> {ip} </p>
          {/* 192.212.174.101 */}
        </div>

        {/* LOCATION SECTION */}
        <div>
          <h2 className="title-span"> Location </h2>
          <p>
            {location.city}, {location.country}
          </p>
          <p>{location.postalCode}</p>
        </div>

        {/* TIMEZONE SECTION */}
        <div>
          <h2 className="title-span"> Timezone </h2>
          <p>{location.timezone}</p>
        </div>

        {/* ISP SECTION */}
        <div>
          <h2 className="title-span"> ISP </h2>
          <p>{isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
