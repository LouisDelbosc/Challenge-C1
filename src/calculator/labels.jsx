import React, { Component } from "react";
import { displayCalculatorLabel } from "src/redux/reducer";
import { connect } from "react-redux";

const mapStateToProps = ({ calculator }) => ({
  result: calculator.result,
  currentOps: displayCalculatorLabel(calculator)
})

class LabelsComponent extends Component {
  render() {
    const { result, currentOps } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="currentOps">{result}</label>
        <input
          id="currentOps"
          readOnly
          className="form-control"
          value={currentOps}
        />
      </div>
    );
  }
}

export const Labels = connect(mapStateToProps, undefined)(LabelsComponent);
