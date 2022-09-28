import React, { Component } from "react"
import Ingredients from "./Ingredients"

export default class BurgerStack extends Component {
  render () {
    const ingredientComponents = this.props.clickedIngredients.map((item, i) => {
        return (
            <Ingredients
                ingredient={item}
                key={`burgerlist-ingredient${i}`}
            />
        )
    })
    return (
      <div>
        {ingredientComponents}
      </div>
    )
  }
}