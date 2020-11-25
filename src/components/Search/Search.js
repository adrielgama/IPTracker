// IP para teste: Algar Telecom (COREN-BA)
// 201.16.240.129

// https://github.com/kubajanik/ip-address-tracker/blob/master/src/components/App.js

import React from "react";
import "./Search.css";

import RightIcon from "../../images/icon-arrow.svg";
// import Results from "../Results/Results";

const Search = (event) => {
  const [address, setAddress] = React.useState("");
  const [location, setLocation] = React.useState({});

  const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

  React.useEffect(() => {
    async function fetchData() {
      // event.preventDefault();

      setLocation({});
      await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${address}`
      )
        .then((response) => response.json())
        .then((result) => {
          setLocation({ ip: result.ip, ...result.location, isp: result.isp });
          console.log(result);
        });
    }
    fetchData();
  }, [address]);

  const handleSubmit = (event) => {
    setAddress(address);
    console.log(address);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(address) => setAddress(address)} className="my-wrap">
      {/* <form onSubmit={(address) => handleSubmit(address)} className="my-wrap"> */}
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for any IP adress or domain"
        />
        <button type="submit" className="searchButton">
          {" "}
          <img src={RightIcon} alt="icon" />{" "}
        </button>
      </form>

      {/* <Results
          key={ip}
          ip={ip}
          city={city}
          country={country}
          postalCode={postalCode}
          time={timezone}
          isp={isp}
        /> */}
    </div>
  );
};

export default Search;
