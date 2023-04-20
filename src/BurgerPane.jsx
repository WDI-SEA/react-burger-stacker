import React, { Component } from "react";
import StackedIngredient from "./StackedIngredient";

export default class BurgerPane extends Component {
  render() {
    let stackedIngredients = this.props.stackedIngredients.map(
      (stackedIngredient, i) => {
        return (
          <StackedIngredient
            name={stackedIngredient.name}
            key={`stackedIngredient ${i}`}
            color={stackedIngredient.color}
          />
        );
      }
    );
    return <div>{stackedIngredients}</div>;
  }
}
