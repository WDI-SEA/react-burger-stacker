import React, { Component } from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {
  render() {
    const allIngredients = this.props.ingredients.map((ingredient, i) => {
      return (
        <Ingredient
          name={ingredient.name}
          key={`ingredient ${i}`}
          color={ingredient.color}
          handleStack={this.props.handleStack}
        />
      );
    });
    return <div>{allIngredients}</div>;
  }
}
