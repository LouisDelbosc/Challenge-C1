import React, { Component } from 'react';

const handleClick = (v) => { console.log(v.target.value) };

export class ButtonGrid extends Component {

  renderButtons() {
    const buttonData = [
      { label: '1', onClick: handleClick },
      { label: '2', onClick: handleClick },
      { label: '3', onClick: handleClick },
      { label: '4', onClick: handleClick },
      { label: '5', onClick: handleClick },
      { label: '6', onClick: handleClick },
      { label: '7', onClick: handleClick },
      { label: '8', onClick: handleClick },
      { label: '9', onClick: handleClick },
      { label: '0', onClick: handleClick },
      { label: '.', onClick: handleClick },
      { label: '=', onClick: handleClick },
    ];
    return buttonData.map(({label, onClick}) => (
      <button key={label} className="btn btn-light col-4" onClick={onClick} value={label}>
        {label}
      </button>
    ));
  }

  renderOps() {
    const buttonData = [
      { label: '-', onClick: handleClick },
      { label: '*', onClick: handleClick },
      { label: '-', onClick: handleClick },
      { label: '+', onClick: handleClick },
      { label: 'C', onClick: handleClick },
    ];
    return buttonData.map(({label, onClick}) => (
      <div className="row">
        <button key={label} className="btn btn-light col-12" onClick={onClick} value={label}>
          {label}
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.renderButtons()}
            </div>
          </div>
          <div className="col-3">
            {this.renderOps()}
          </div>
        </div>
      </div>
    );
  }
}
