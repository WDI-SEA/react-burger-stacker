import React, { Component } from "react";

export default class Ingredient extends Component {
  render() {
    return (
      <div className="ingredient">
        {this.props.name}
        <button onClick={this.props.handleStack}>stack me</button>
      </div>
    );
  }
}
