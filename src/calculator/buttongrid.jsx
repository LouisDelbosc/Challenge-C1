import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  addInput,
  clearCalculator,
  compute,
  changeOperation
} from "src/redux/action";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addInput, clearCalculator, compute, changeOperation },
    dispatch
  );

class ButtonGridComponent extends Component {
  renderButtons() {
    const { addInput, compute } = this.props;
    const buttonData = [
      { label: "1", onClick: () => addInput("1") },
      { label: "2", onClick: () => addInput("2") },
      { label: "3", onClick: () => addInput("3") },
      { label: "4", onClick: () => addInput("4") },
      { label: "5", onClick: () => addInput("5") },
      { label: "6", onClick: () => addInput("6") },
      { label: "7", onClick: () => addInput("7") },
      { label: "8", onClick: () => addInput("8") },
      { label: "9", onClick: () => addInput("9") },
      { label: "0", onClick: () => addInput("0") },
      { label: ".", onClick: () => addInput(".") },
      { label: "=", onClick: () => compute() }
    ];
    return buttonData.map(({ label, onClick }) => (
      <button
        key={label}
        className="btn btn-light col-4"
        onClick={onClick}
        value={label}
      >
        {label}
      </button>
    ));
  }

  renderOps() {
    const { clearCalculator, changeOperation } = this.props;
    const buttonData = [
      { label: "/", onClick: () => changeOperation("divide") },
      { label: "*", onClick: () => changeOperation("multiply") },
      { label: "-", onClick: () => changeOperation("substract") },
      { label: "+", onClick: () => changeOperation("add") },
      { label: "C", onClick: () => clearCalculator() }
    ];
    return buttonData.map(({ label, onClick }) => (
      <div className="row" key={label}>
        <button
          className="btn btn-light col-12"
          onClick={onClick}
          value={label}
        >
          {label}
        </button>
      </div>
    ));
  }

  render() {
    console.log('rerender');
    return (
      <div className="row">
        <div className="col-9">
          <div className="row">{this.renderButtons()}</div>
        </div>
        <div className="col-3">{this.renderOps()}</div>
      </div>
    );
  }
}

export const ButtonGrid = connect(undefined, mapDispatchToProps)(
  ButtonGridComponent
);
