import React, { Component } from "react";

export class Labels extends Component {
  render() {
    const { previousResult, currentOps } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="currentOps">{previousResult}</label>
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
