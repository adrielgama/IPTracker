import React, { Component } from "react";
// 201.16.240.129
import "./Header.css";
// import RightIcon from "../../images/icon-arrow.svg";
import Search from "../Search/Search";
import Results from "../Results/Results";

function Header() {
// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//     this.change = this.change.bind(this);
//     this.state = {
//       tracers: [],
//       // ip: "",
//       // location: {
//       //   city: "",
//       //   country: "",
//       //   postalCode: "",
//       //   timezone: "",
//       // },
//       // isp: "",
//       searchAdress: "",
//     };

//   }
  
  const apiKey = "at_povLdCez9qiZB5HqCbXwDzPzOYvpa";

  const submit = (event) => {
    event.preventDefault();
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // this.setState({
        //   tracers: [...data.results],
        //   totalResults: data.total_results,
        // });

        console.log(data);
      });
  };

  const change = (event) => {
    this.setState({ searchAdress: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container-xl">
          <h1 className="header-title">IP Address Tracker</h1>
          <Search 
            submit={submit}
            change={change}
          />
        </div>
        <Results 

          tracers={this.state.tracers}
          // ip={this.state.ip}
          // city={this.state.city}
          // country={this.state.country}
          // postalCode={this.state.postalCode}
          // timezone={this.state.timezone}
          // isp={this.state.isp}
        
        />
      </div>
    );
  }
}

export default Header;
