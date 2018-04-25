import React, { Component } from "react";
import { displayCalculatorLabel } from "src/redux/reducer";
import { bindActionCreators } from "redux";
import { randomComputation } from "src/redux/action";
import { DEV_ROLE } from "src/redux/userreducer";
import { connect } from "react-redux";

const mapStateToProps = ({ calculator, user }) => ({
  role: user.role,
  result: calculator.result,
  currentOps: displayCalculatorLabel(calculator)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ randomComputation }, dispatch);

class LabelsComponent extends Component {
  handlePress = e => {
    if (e.key === " " && this.props.role === DEV_ROLE) {
      this.props.randomComputation();
    }
  };

  render() {
    const { result, currentOps } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="currentOps">{result}</label>
        <input
          id="currentOps"
          readOnly
          className="form-control"
          onKeyPress={this.handlePress}
          value={currentOps}
        />
      </div>
    );
  }
}

export const Labels = connect(mapStateToProps, mapDispatchToProps)(
  LabelsComponent
);
