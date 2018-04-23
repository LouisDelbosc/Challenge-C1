import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonGrid } from "./calculator/buttongrid.jsx";
import { Labels } from "./calculator/labels.jsx";
import "./App.css";

class App extends Component {
  render() {
    const { result, label } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator 3000</h1>
        </header>
        <div className="container" style={{ width: "512px" }}>
          <Labels result={result} currentOps={label} />
          <ButtonGrid />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.calculator.result,
  label: `${state.calculator.result} ${state.calculator.operation.display} ${
    state.calculator.input
  }`
});

export default connect(mapStateToProps, undefined)(App);
