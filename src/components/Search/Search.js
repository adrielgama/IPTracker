import React from "react";
import "./Search.css";

import RightIcon from "../../images/icon-arrow.svg";

const Search = (props) => {
  const [items, setItems] = React.useState(null);
  const [input, setInput] = React.useState("");

  const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${input}`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setItems(result);
      });
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
          onChange={handleChange}
        />
        <button type="submit" className="searchButton">
          {" "}
          <img src={RightIcon} alt="icon" />{" "}
        </button>
      </form>

      {/* <div className="container-pop">
        <div>
          <h2 className="title-span"> IP Address </h2>
          {items && <p> {items.ip} </p>}
        </div>

        <div>
          <h2 className="title-span"> Location </h2>
          {items && (
            <p>
              {items.location.city}, {items.location.country}
            </p>
          )}
          {items && <p> {items.location.postalCode} </p>}
        </div>

        <div>
          <h2 className="title-span"> Timezone </h2>
          {items && <p> UTC {items.location.timezone} </p>}
        </div>

        <div>
          <h2 className="title-span"> ISP </h2>
          {items && <p> {items.isp} </p>}
        </div>
      </div> */}
    </div>
  );
};

export default Search;
