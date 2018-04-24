import React, { Component } from "react";

export class Labels extends Component {
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
