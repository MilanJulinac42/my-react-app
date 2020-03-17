import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Carlos"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Milan"
      });
    }, 1000);
  }

  render() {
    const buttonStyle = {
      backgroundColor: "gray",
      border: "1px solid black"
    };
    return (
      <div className="Home">
        <h1>Welcome to Codejobs</h1>
        <p> Hi my name is {this.state.name}</p>
        <button style={buttonStyle}> Click Me !</button>
      </div>
    );
  }
}

export default Home;
