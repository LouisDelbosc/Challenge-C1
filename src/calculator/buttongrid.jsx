import React, { Component } from 'react';

export class ButtonGrid extends Component {
  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-9">
            <div className="row">
              <button className="btn btn-light col-4">1</button>
              <button className="btn btn-light col-4">2</button>
              <button className="btn btn-light col-4">3</button>
              <button className="btn btn-light col-4">4</button>
              <button className="btn btn-light col-4">5</button>
              <button className="btn btn-light col-4">6</button>
              <button className="btn btn-light col-4">7</button>
              <button className="btn btn-light col-4">8</button>
              <button className="btn btn-light col-4">9</button>
              <button className="btn btn-light col-4">0</button>
              <button className="btn btn-light col-4">.</button>
              <button className="btn btn-light col-4">=</button>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <button className="btn btn-light">/</button>
            </div>
            <div className="row">
              <button className="btn btn-light">*</button>
            </div>
            <div className="row">
              <button className="btn btn-light">-</button>
            </div>
            <div className="row">
              <button className="btn btn-light">+</button>
            </div>
            <div className="row">
              <button className="btn btn-light">C</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
