import React, { Component } from "react";
import "./App.css";
import Home from "./Home/Home.js";
import Content from "../shared/components/layout/Content.js";
import Header from "../shared/components/layout/Header.js";
import Footer from "../shared/components/layout/Footer.js";
import Todo from "./Todo/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" />
        <Content>
          <Todo />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
