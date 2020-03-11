import React, { Component } from "react";
class SumValue extends Component {
  sumOfEachValue() {
    let sum = 0;
    this.props.counters.map(c => {
      sum += c.value;
    });
    return sum;
  }
  render() {
    return (
      <div className="badge badge-pill badge badge-info">
        SUM of all stuffs&nbsp;:&nbsp;
        <span className="sumColor" style={this.sumColor}>
          {this.sumOfEachValue()}
        </span>
      </div>
    );
  }
  sumColor = {
    color: "#f6e58d"
  };
}

export default SumValue;
