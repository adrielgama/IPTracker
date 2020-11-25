// IP para teste: Algar Telecom (COREN-BA)
// 201.16.240.129

import React from "react";
import "./Search.css";

import RightIcon from "../../images/icon-arrow.svg";
// import Results from "../Results/Results";

const Search = () => {
  // const { ip, city, country, postalCode, timezone, isp } = props;

  const modelObject = {
    ip: "",
    location: {
      // city: "",
      // country: "",
      // postalCode: "",
      // timezone: "",
    },
    isp: "",
  };

  const [items, setItems] = React.useState(modelObject);
  const [input, setInput] = React.useState("");

  const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log({ ip });

    await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${input}`
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        setItems({
          id: result.ip,
          ...result.location,
          isp: result.isp,
        });
      });

      console.log(items);
    }
    
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-wrap">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for any IP adress or domain"
          value={input}
          // onChange={({ target }) => setIP(target.value)}
          onChange={handleChange}
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
