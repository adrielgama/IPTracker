// IP para teste: Algar Telecom (COREN-BA)
// 201.16.240.129

import React from "react";
import "./Search.css";

import RightIcon from "../../images/icon-arrow.svg";

const Search = (props) => {
  // const { submit, change } = props;
  const [ip, setIP] = React.useState("");

  const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({ ip });

    await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit} className="my-wrap">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search for any IP adress or domain"
        value={ip}
        onChange={({ target }) => setIP(target.value)}
      />
      <button type="submit" className="searchButton">
        {" "}
        <img src={RightIcon} alt="icon" />{" "}
      </button>
    </form>
  );
};

export default Search;





// const Search = (props) => {
//   // const { submit, change } = props;

//   const [ip, setIP] = React.useState("");

//   const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

//   async function handleSubmit(event) {
//     event.preventDefault();
//     console.log({ ip });

//     await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
//       .then((response) => {
//         console.log(response);

//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         return json;
//       });
//   }

//   // props = (event) => {
//   //   event.preventDefault();
//   // };

//   // const change = (event) => {
//   //   this.setState({ ip: event.target.value });
//   // };

//   return (
//     <div className="search-container">
//       <form action="" onSubmit={handleSubmit} className="my-wrap">
//         <input
//           type="text"
//           className="searchTerm"
//           placeholder="Search for any IP adress or domain"
//           value={ip}
//           // onChange={change}
//         />
//         <button type="submit" className="searchButton">
//           {" "}
//           <img src={RightIcon} alt="icon" />{" "}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Search;


