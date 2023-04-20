import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { ingredient, onAddIngredient } = this.props;

    onAddIngredient(ingredient);
  }

  render() {
    const { ingredient } = this.props;

    return (
      <li style={{ backgroundColor: ingredient.color }}>
        <button onClick={this.handleClick}>{ingredient.name}</button>
      </li>
    );
  }
}

export default Ingredient;
