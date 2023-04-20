import React, { Component } from 'react';

class Ingredient extends Component {
  handleClick = () => {
    this.props.addIngredient(this.props.ingredient);
  }

  render() {
    return (
      <li style={{ backgroundColor: this.props.ingredient.color }} onClick={this.handleClick}>
        {this.props.ingredient.name}
      </li>
    );
  }
}

export default Ingredient;
