import React from "react";

import "./Results.css";
import Search from "../Search/Search";
// import { useState } from "react";

const Results = (props) => {
  const { id, ip, city, country, postalCode, timezone, isp } = props;

  return (
    <div>
      {/* <Search/> */}
      <Search
          key={id}
          ip={ip}
          city={city}
          country={country}
          postalCode={postalCode}
          time={timezone}
          isp={isp}
        />
      <div className="grid-container2">
        {/* {items.map((item) => {
          return ( */}
        {/* <Search
          key={id}
          ip={ip}
          city={city}
          country={country}
          postalCode={postalCode}
          time={timezone}
          isp={isp}
        /> */}

        <div className="container-pop">
          <div>
            <h2 className="title-span"> IP Address </h2>
            {id && <p> {ip} </p>}
          </div>
          <div>
            <h2 className="title-span"> Location </h2>
            {props && (
              <p>
                {city}, {country}
              </p>
            )}
            {props && <p> {postalCode} </p>}
          </div>

          <div>
            <h2 className="title-span"> Timezone </h2>
            {props && <p> UTC {timezone} </p>}
          </div>

          <div>
            <h2 className="title-span"> ISP </h2>
            {props && <p> {isp} </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
