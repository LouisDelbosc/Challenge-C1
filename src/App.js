import React, { Component } from "react";
import { ButtonGrid } from "./calculator/buttongrid.jsx";
import { Labels } from "./calculator/labels.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator 3000</h1>
        </header>
        <div className="container" style={{ width: "512px" }}>
          <Labels />
          <ButtonGrid />
        </div>
      </div>
    );
  }
}
export default App;
