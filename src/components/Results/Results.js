import React from "react";

import "./Results.css";

const Results = (props) => {
  const { ip, city, country, postalCode, timezone, isp } = props;

  return (
    <div>
      <div className="grid-container2">
        <div className="container-pop">
          <div>
            <h2 className="title-span"> IP Address </h2>
            <p> {ip} </p>
          </div>
          <div>
            <h2 className="title-span"> Location </h2>

            <p>
              {city}, {country}
            </p>

            <p> {postalCode} </p>
          </div>

          <div>
            <h2 className="title-span"> Timezone </h2>
            <p> UTC {timezone} </p>
          </div>

          <div>
            <h2 className="title-span"> ISP </h2>
            <p> {isp} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
