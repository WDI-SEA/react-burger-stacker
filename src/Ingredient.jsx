import React, { Component } from "react";

class Ingredient extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ingredient.name}</h1>
      </div>
    );
  }
}

export default Ingredient;
