import React from "react";

import "./Results.css";

const Results = (props) => {
  const { ip, isp, ...location } = props;

  // console.log(props);

  return (
    <div>
      <div className="grid-container2">
        <div className="container-pop ">
          <div className="grid-container-title">
            <h2 className="title-span"> IP Address </h2>
            <h2 className="title-span"> Location </h2>
            <h2 className="title-span"> Timezone </h2>
            <h2 className="title-span"> ISP </h2>
          </div>

          <div className="grid-container-content">
            <p className="p-res"> {ip} </p>
            <p className="p-res">
              {location.city}, {location.country} {location.postalCode}
            </p>
            <p className="p-res">UTC {location.timezone}</p>
            <p className="p-res">{isp}</p>
          </div>

          {/* <div>
            <h2 className="title-span"> IP Address </h2>
            <p className="p-res"> {ip} </p>
          </div>
          <div>
            <h2 className="title-span"> Location </h2>

            <p className="p-res">
              {location.city}, {location.country}
            </p>

            <p className="p-res"> {location.postalCode} </p>
          </div>

          <div>
            <h2 className="title-span"> Timezone </h2>
            <p className="p-res"> UTC {location.timezone} </p>
          </div>

          <div>
            <h2 className="title-span"> ISP </h2>
            <p className="p-res"> {isp} </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
