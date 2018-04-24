import React, { Component } from "react";
import {
  USER_ROLE,
  switchToUserRole,
  switchToDevRole
} from "src/redux/userreducer";
import { connect } from "react-redux";

const mapStateToProps = ({ user }) => ({
  role: user.role
});

const mapDispatchToProps = dispatch => ({
  toDev: () => dispatch(switchToDevRole),
  toUser: () => dispatch(switchToUserRole)
});

class UserButtonComponent extends Component {
  render() {
    const { role, toDev, toUser } = this.props;
    const isNormalUser = role === USER_ROLE;
    console.log("role", role);
    return (
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
        style={{ marginBottom: "16px" }}
      >
        <label className={`btn btn-secondary ${isNormalUser ? "active" : ""}`}>
          <input
            type="radio"
            className="options"
            onChange={toUser}
            checked={isNormalUser}
          />{" "}
          Normal User
        </label>
        <label className={`btn btn-secondary ${!isNormalUser ? "active" : ""}`}>
          <input
            type="radio"
            className="options"
            onChange={toDev}
            checked={!isNormalUser}
          />{" "}
          Developer
        </label>
      </div>
    );
  }
}

export const UserButton = connect(mapStateToProps, mapDispatchToProps)(
  UserButtonComponent
);
