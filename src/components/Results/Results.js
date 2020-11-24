import React from "react";
import Search from "../Search/Search";

import "./Results.css";
// import Search from "../Search/Search";
// import { useState } from "react";

const Results = (props) => {
  const { tracers } = props;

  // , ip, city, country, postalCode, timezone, isp

  // const handleSubmit = Search();

  // const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

  // const handleAddressSearch = (addressIP) => {
  //   fetch(
  //     `httPs://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${addressIP}`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div>
      <div className="grid-container">
        {tracers.map((tracer) => {
          return (
            <Search
              key={tracer.ip}
              city={tracer.city}
              country={tracer.country}
              postalCode={tracer.postalCode}
              timezone={tracer.timezone}
              isp={tracer.isp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;

{
  /* <ul onClick={() => handleAddressSearch(ip)}>
          <li>
            <span className="title-span"> IP Address </span>
            <p> {ip} </p>
            192.212.174.101
          </li>
          <li>
            <span className="title-span"> Location </span>
            <p>
              {city}, {country}
            </p>
            <p>{postalCode}</p>
          </li>
          <li>
            <span className="title-span"> Timezone </span>
            <p>{timezone}</p>
          </li>
          <li>
            <span className="title-span"> ISP </span>
            <p>{isp}</p>
          </li>
        </ul> */
}
