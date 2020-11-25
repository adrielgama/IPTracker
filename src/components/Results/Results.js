import React from "react";

import "./Results.css";
import Search from "../Search/Search";
// import { useState } from "react";

const Results = (props) => {
  const { id, ip, city, country, postalCode, timezone, isp } = props;

  return (
    <div>
      <div className="grid-container">
        {/* {items.map((item) => {
          return ( */}
        <Search
          key={id}
          ip={ip}
          city={city}
          country={country}
          postalCode={postalCode}
          time={timezone}
          isp={isp}
        />

        <div>
          <h2 className="title-span"> IP Address </h2>
          <p> {id} </p>
        </div>

        <div>
          <h2 className="title-span"> Location </h2>
          <p>
            {props.city}, {props.country}
          </p>
          <p>{props.postalCode}</p>
        </div>

        <div>
          <h2 className="title-span"> Timezone </h2>
          <p>{props.timezone}</p>
        </div>

        <div>
          <h2 className="title-span"> ISP </h2>
          <p>{props.isp}</p>
        </div>
        {/* )
        })}
         */}
      </div>
    </div>
  );
};

export default Results;


  /* <div>
          <h2 className="title-span"> IP Address </h2>
          <p> {ip} </p>
          
        </div>

        
        <div>
          <h2 className="title-span"> Location </h2>
          <p>
            {location.city}, {location.country}
          </p>
          <p>{location.postalCode}</p>
        </div>

        
        <div>
          <h2 className="title-span"> Timezone </h2>
          <p>{location.timezone}</p>
        </div>

        
        <div>
          <h2 className="title-span"> ISP </h2>
          <p>{isp}</p>
        </div> */

